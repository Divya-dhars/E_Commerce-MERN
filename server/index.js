const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const bodyParser=require('body-parser');
const UserModel=require('./models/User');
const Product=require('./models/Product')
const multer = require('multer');
const app=express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","DELETE","PUT"],
    credentials:true,
    optionsSuccessStatus:204
}))
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
app.post('/register',(req,res)=>{
    const {username,email,password,mobile,role}=req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        UserModel.create({username,email,password:hash,mobile,role})
        .then(user=>res.json("Success"))
        .catch(err=>res.json(err))
    }).catch(err=>res.json(err))
})

app.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await UserModel.findOne({email});
        if(!user){
            return res.json("No record exists");
        }
        const passwordMatch=await bcrypt.compare(password,user.password)
        if(passwordMatch){
            const token=jwt.sign({email:user.email,role:user.role},"jwt-secret-key",{expiresIn:'1d'})
            res.cookie('token',token);
            return res.json({status:"Success",role:user.role,token})
        }
        else{
            return res.json("Password incorrect")
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json(error)
    }
})

app.use(bodyParser.json());


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/src/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
app.post('/api/Product', upload.single('image'), async (req, res) => {
    try {
        const { productName, brandName, price, ratings, image } = req.body;
        const images = req.file.originalname;
        const newItem = new Product({productName, brandName, price, ratings, images});
        await newItem.save();
        res.status(201).json({status:400, message: 'Item created successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.u(500).json({ message: 'Server error' });
    }
});

app.get('api/Product/:productName/:brandName',async (req,res)=>{
  const {productName,brandName}=req.params;
  try{
  const response=await Product.findOne(
    {productName:productName},
    {brandName:brandName},
  )
  res.json(response);
  }catch(error){
    console.error('Error:', error);
  }
})
app.put('/api/Product/:id', async (req, res) => {
    const{ id } = req.params;
    const { price } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
             id,
            { price },
            { new: true }
        );
        res.json(updatedProduct);

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.listen(3001,() => {
    console.log("Server is Running");
})