import React, { useState,useEffect } from 'react';
import Nav from '../components/nav.js';
import '../styles/categories.css';
import ProductDetails from '../components/description.js'
import { Link} from 'react-router-dom';
import earthm1 from '../assets/earth-m1.png';
import earthm2 from '../assets/earth-m2.png';
import earthm3 from '../assets/earth-m3.png';
import earthm4 from '../assets/earth-m4.png';
import nivea from '../assets/nivea.png';
import nivea1 from '../assets/nivea1.png';
import gd from '../assets/gd.png';
import gd1 from '../assets/g1.png';
import plom from '../assets/plom.png';
import plom1 from '../assets/plom3.png';
import dot from '../assets/dotk.jpg';
import dot1 from '../assets/dotk1.jpg';
import dot2 from '../assets/dotk2.jpg';
import dot3 from '../assets/dotk3.jpg';
import earthm5 from '../assets/mam2.jpg';
import earthm6 from '../assets/mam3.jpg';
import earthm7 from '../assets/mam4.jpg';
import earthm8 from '../assets/mam5.jpg';
import earthm9 from '../assets/mam6.jpg';
import mams from '../assets/mams.jpg';
import mams1 from '../assets/mams1.jpg';
import mams2 from '../assets/mams2.jpg';
import mams3 from '../assets/mams3.jpg';
import mams4 from '../assets/mams4.jpg';
import mams5 from '../assets/mams5.jpg';
import ploms from '../assets/Ploms.png';
import ploms1 from '../assets/Ploms1.png';
import loreals from '../assets/loreals2.jpg';
import loreals1 from '../assets/loreals1.jpg';
import loreals2 from '../assets/loreals3.jpg';
import loreals3 from '../assets/loreals4.jpg';
import biot from '../assets/biot.png';
import biot1 from '../assets/biot1.png';
import biot2 from '../assets/biot2.png';
import biot3 from '../assets/biot3.png';
import him1 from '../assets/him1.png';
import him2 from '../assets/him2.png';
import him3 from '../assets/him3.png';
import him4 from '../assets/him5.jpg';
import lakf from '../assets/lakf.jpg';
import lakf1 from '../assets/lakf1.jpg';
import lakp from '../assets/lakp.jpg';
import laklip from '../assets/laklip.jpg';
import laklip1 from '../assets/laklip1.jpg';
import laklip2 from '../assets/laklip2.jpg';
import laklip3 from '../assets/laklip3.jpg';
import laklip4 from '../assets/laklip4.jpg';
import lakkajal from '../assets/lakkajal.jpg';
import mamlip from '../assets/mamlip.jpg';
import mamlip1 from '../assets/mamlip1.jpg';
import mamlip2 from '../assets/mamlip2.jpg';
import hudacon from '../assets/hudacon.png';
import hudacon1 from '../assets/hudacon1.png';
import hudaeye from '../assets/hudaeye.png';
import mayfit from '../assets/mayfit.jpg';
import mayfit1 from '../assets/mayfit1.jpg';
import mayfit2 from '../assets/mayfit2.jpg';
import reneelip from '../assets/reneelip.webp';
import reneelip1 from '../assets/reneelip1.webp';
import reneelip2 from '../assets/reneelip2.webp';
import reneelip3 from '../assets/reneelip3.webp';
import reneelip4 from '../assets/reneelip4.webp';
import reneelip5 from '../assets/reneelip5.webp';
import faces from '../assets/faces.jpg';
import faces1 from '../assets/faces1.jpg';
import ny from '../assets/ny.webp';
import ny1 from '../assets/ny2.webp';
import macf from '../assets/macf.jpg';
import macf1 from '../assets/macf1.jpg';
import macf2 from '../assets/macf3.jpg';
import sugarlip from '../assets/sugarlip.webp';
import sugareye from '../assets/sugareye.webp';
function renderStarRating(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i} className="star">&#9733;</span>);
        } else if (i - 0.5 === rating) {
            stars.push(<span key={i} className="star">&#9733;&#189;</span>); 
        } else {
            stars.push(<span key={i} className="star">&#9734;</span>);
        }
    }
    return stars;
}

const brands= {
    "Skin Care": ["Mamaearth", "Nivea","Good Vibes","Plom","Dot & Key"],
    "Hair Care": ["Mamaearth","Good Vibes","Loreal Paris","Biotique","Himalaya"],
    "Makeup": ["lakme", "facescanada","Mamaearth","Hudabeauty","Maybelline","Renee","NYbae","Mac","Sugar"]
};
function Category() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [cart, setCart] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const categories = ["Skin Care", "Hair Care", "Makeup"];
    const [selectedProduct, setSelectedProduct] = useState(null);
    

    const products = {
        "Skin Care": [
            { id: 1, name: "OIL-FREE MOSTURIZER", image: earthm1, brand: "Mamaearth", price: 50, ratings: 4 },
            { id: 2, name: "UBTAN NOURSHING COLD CREAM", image: earthm4, brand: "Mamaearth", price: 120, ratings: 5 },
            { id: 3, name: "VITAMIN C NOURISHING COLD CREAM", image: earthm3, brand: "Mamaearth", price: 120, ratings: 5 },
            { id: 4, name: "UBTAN FACE WASH", image: earthm2, brand: "Mamaearth", price: 120, ratings: 5 },
            { id: 5, name: " MOSTURIZER", image: nivea, brand: "Nivea", price: 120, ratings: 4 },
            { id: 6, name: "BODY MILK BODY LOTION", image: nivea1, brand: "Nivea", price: 120, ratings: 4 },
            { id: 7, name: "TONER", image: gd, brand: "Good Vibes", price: 120, ratings: 4 },
            { id: 8, name: "NOURISHING DAY CREAM", image:gd1, brand: "Good Vibes", price: 120, ratings: 4 },
            { id: 9, name: "SERUM", image:plom, brand: "Plom", price: 120, ratings: 4 },
            { id: 10, name: "NIGHT CARE", image:dot, brand: "Dot & Key", price: 120, ratings: 5 },
            { id: 11, name: "LIP CARE", image:dot1, brand: "Dot & Key", price: 120, ratings: 4 },
            { id: 12, name: "MOISTURIZER", image:dot2, brand: "Dot & Key", price: 150, ratings: 4 },
            { id: 13, name: "BODY CARE", image:dot3, brand: "Dot & Key", price: 120, ratings: 5 },
            { id: 14, name: "ALOE VERA SUNSCREEN", image:earthm5, brand: "Mamaearth", price: 120, ratings: 5 },
            { id: 15, name: "UBTAN CLEANSING MILK", image:earthm6, brand: "Mamaearth", price: 180, ratings: 4 },
            { id: 16, name: "ALOE VERA FACE WASH", image:earthm7, brand: "Mamaearth", price: 180, ratings: 5 },
            { id: 17, name: "ALOE TUMERIC GEL", image:earthm8, brand: "Mamaearth", price: 150, ratings: 4 },
            { id: 18, name: "MULTANI MITTI", image:earthm9, brand: "Mamaearth", price: 120, ratings: 5 },
            { id: 19, name: "SAFFRON & PAPAYA FACE WASH", image:plom1, brand: "Plom", price: 100, ratings: 5 },
        ],
        "Hair Care": [
            { id: 1, name: "ALMOND SHAMPOO", image: mams, brand: "Mamaearth", price: 150, ratings: 3},
            { id: 2, name: "ONION SHAMPOO", image: mams1, brand: "Mamaearth", price: 180, ratings: 4 },
            { id: 3, name: "ROSEMARY ANIT-HAIR FALL", image: mams2, brand: "Mamaearth", price: 180, ratings: 5 },
            { id: 4, name: "ROSEMARY HAIR GROWTH OIL", image: mams3, brand: "Mamaearth", price: 210, ratings: 4 },
            { id: 5, name: "BHRING AMLA  HAIR OIL", image: mams4, brand: "Mamaearth", price: 210, ratings: 3 },
            { id: 6, name: "ARGAN HAIR MASK", image: mams5, brand: "Mamaearth", price: 170, ratings: 4 },
            { id: 7, name: "LOREAL ELVIVE CONDITIONER", image: loreals, brand: "Loreal Paris", price: 170, ratings: 4 },
            { id: 8, name: "LOREAL ELVIVE SHAMPOO", image: loreals1, brand: "Loreal Paris", price: 170, ratings: 5 },
            { id: 9, name: "LOREA HAIR SPA", image: loreals2, brand: "Loreal Paris", price: 170, ratings: 4 },
            { id: 10, name: "LOREAL ELSEVE SHAMPOO + CONDITIONER", image: loreals3, brand: "Loreal Paris", price: 170, ratings: 5 },
            { id: 11, name: "ONION BLACK SEED HAIR OIL", image: biot, brand: "Biotique", price: 170, ratings: 4 },
            { id: 12, name: "BHRINGRAJ ANTI HAIR FALL", image: biot1, brand: "Biotique", price: 170, ratings: 5 },
            { id: 13, name: "CONDITIONER", image: biot2, brand: "Biotique", price: 170, ratings: 4 },
            { id: 14, name: "ARGAN OIL", image: biot3, brand: "Biotique", price: 170, ratings: 5 },
            { id: 15, name: "ANTI HAIR FALL SHAMPOO", image: him4 , brand: "Himalaya", price: 170, ratings: 4 },
            { id: 16, name: "ANTI HAIR FALL CONDITIONER", image: him1, brand: "Himalaya", price: 170, ratings: 5 },
            { id: 17, name: "HIMALAYA ANTI-DANDRUFF TEA TREE SHAMPOO", image: him2, brand: "Himalaya", price: 170, ratings: 4 },
            { id: 18, name: "ANTI-HAIR FALL HAIR OIL", image: him3, brand: "Himalaya", price: 170, ratings: 5 },
            { id: 11, name: "BANANA SHINE SHAMPOO", image: ploms, brand: "Good Vibes", price: 170, ratings: 4 },
            { id: 12, name: "ARGAN STRENGTHENING SHAMPOO", image: ploms1, brand: "Good Vibes", price: 170, ratings: 5 },
        ],
        "Makeup": [
            { id: 1, name: "Lakme Foundation", image: lakf, brand: "lakme", price: 300, ratings: 4.8 },
            { id: 2, name: "Lakme Foundation PRIMER-MATTE", image: lakf1, brand: "lakme", price: 150, ratings: 4 },
            { id: 3, name: "Lakme Primer", image: lakp, brand: "lakme", price: 300, ratings: 4.8 },
            { id: 4, name: "Lakme Lipstick", image: laklip, brand: "lakme", price: 150, ratings: 4 },
            { id: 5, name: "Lakme Lipstick", image: laklip1, brand: "lakme", price: 300, ratings: 4.8 },
            { id: 6, name: "Lakme Lipstick", image: laklip2, brand: "lakme", price: 150, ratings: 4 },
            { id: 7, name: "Lakme Lipstick", image: laklip3, brand: "lakme", price: 300, ratings: 4.8 },
            { id: 8, name: "Lakme Lipstick", image: laklip4, brand: "lakme", price: 150, ratings: 4 },
            { id: 9, name: "Lakme EYECONIC KAJAL", image: lakkajal, brand: "lakme", price: 150, ratings: 4 },
            { id: 10, name: "LIPSTICK(SHADE-PINK TULIP)", image: mamlip, brand: "Mamaearth", price: 150, ratings: 4 },
            { id: 11, name: "LIPSTICK(SHADE-PINK LEMONADE)", image: mamlip1, brand: "Mamaearth", price: 150, ratings: 4 },
            { id: 12, name: "LIPSTICK(SHADE-BUBBLEGUM)", image: mamlip2, brand: "Mamaearth", price: 150, ratings: 4 },
            {id: 13, name: "HYDRATING SHEER VEGAN CONCEALER", image: hudacon, brand: "Hudabeauty", price: 150, ratings: 4 },
            {id: 14, name: "FAUXFILTER COLOR CORRECTOR", image: hudacon1, brand: "Hudabeauty", price: 150, ratings: 4 },
            {id: 15, name: "LASH", image: hudaeye, brand: "Hudabeauty", price: 150, ratings: 4 },
            {id: 16, name: "MATTE+PORTLESS", image: mayfit, brand: "Maybelline", price: 150, ratings: 4 },
            {id: 17, name: "MATTE+PORTLESS", image: mayfit1, brand: "Maybelline", price: 150, ratings: 4 },
            {id: 18, name: "MATTE+PORTLESS", image: mayfit2, brand: "Maybelline", price: 150, ratings: 4 },
            {id: 19, name: "RENEE MADNESS PH LIPSTICK", image: reneelip, brand: "Renee", price: 150, ratings: 4 },
            {id: 20, name: "RENEE FAB 5 MATTE FINISH 5 IN 1", image: reneelip1, brand: "Renee", price: 150, ratings: 4 },
            {id: 21, name: "RENEE SHINE ON", image: reneelip2, brand: "Renee", price: 150, ratings: 4 },
            {id: 22, name: "RENEE STAY WITH ME COMBO", image: reneelip3, brand: "Renee", price: 150, ratings: 4 },
            {id: 23, name: "RENEE CRUSH GLOSSY LIPSTICK", image: reneelip4, brand: "Renee", price: 150, ratings: 4 },
            {id: 24, name: "RENEE STUNNER MATTE LIPSTICK", image: reneelip5, brand: "Renee", price: 150, ratings: 4 },
            {id: 25, name: "MATTE FINISH FOUNDATION", image: faces, brand: "facescanada", price: 150, ratings: 4 },
            {id: 26, name: "FOUNDATION STICK", image: faces1, brand: "facescanada", price: 150, ratings: 4 },
            {id: 27, name: "STROBE SKIN TINT COMBO ", image: ny, brand: "NYbae", price: 150, ratings: 4 },
            {id: 28, name: "PRIMER", image: ny1, brand: "NYbae", price: 150, ratings: 4 },
            {id: 29, name: "MAC FOUNDATION", image: macf, brand: "Mac", price: 150, ratings: 4 },
            {id: 30, name: "MAC FOUNDATION", image: macf1, brand: "Mac", price: 150, ratings: 4 },
            {id: 31, name: "COMPACT", image: macf2, brand: "Mac", price: 150, ratings: 4 },
            {id: 32, name: "LIPSTICK", image: sugarlip, brand: "Sugar", price: 150, ratings: 4 },
            {id: 33, name: "EYELINER", image: sugareye, brand: "Sugar", price: 150, ratings: 4 },
        ]
    };
    useEffect(() => {
        setSelectedCategory(categories[0]); 
    }, [categories]);
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedBrand(null);
    };

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="full-container">
            <Nav />
            <div className="container1">
                <div className="left-panel">
                    <div className="filter-options">
                        <div className="filter-card">
                            <div className="card-header">CATEGORY</div>
                            <div className="card-body">
                                {categories.map((category, index) => (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            name="category"
                                            onChange={() => handleCategoryClick(category)}
                                            checked={selectedCategory === category}
                                        />
                                        {category}
                                    </label>
                                ))}
                            </div>
                        </div>
                        {selectedCategory && (
                            <div className="filter-card">
                                <div className="card-header">BRAND</div>
                                <div className="card-body">
                                    {brands[selectedCategory].map((brand, index) => (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name="brand"
                                                onChange={() => handleBrandClick(brand)}
                                                checked={selectedBrand === brand}
                                            />
                                            {brand}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="right-panel">
                    <div className="image-gallery">
                        {selectedCategory && (
                            <div className="gallery">
                                {selectedBrand ?
                                    products[selectedCategory]
                                        .filter(product => product.brand === selectedBrand)
                                        .map(product => (
                                            <div key={product.id} className="product-item">
                                                <Link to={{
                                                   pathname: `/product/${product.id}`, // Define your route path
                                                    state: { product: product } // Pass the product details as state
                                                }}>
                                                <div className="product-card">
                                                    <img src={product.image} alt={product.name} />
                                                    <div className="product-info">
                                                        <div className="name">{product.name}</div>
                                                        <div className="brand">{product.brand}</div>
                                                        <div className="price">MRP:{product.price}</div>
                                                        <div className="ratings">
                                                            {renderStarRating(product.ratings)}
                                                        </div>
                                                        <Link to='/cart'><button className="a-btn"  onClick={() => addToCart(product)}>ADD TO CART</button></Link>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>
                                        )) :
                                    products[selectedCategory].map(product => (
                                        <div key={product.id} className="product-item">
                                            <div className="product-card" onClick={() => setSelectedProduct(product)}>
                                                <img src={product.image} alt={product.name} />
                                                <div className="product-info">
                                                    <div className="name">{product.name}</div>
                                                    <div className="brand">{product.brand}</div>
                                                    <div className="price">MRP:{product.price}</div>
                                                    <div className="ratings">
                                                        {renderStarRating(product.ratings)}
                                                    </div>
                                                    <Link to='/cart'><button className="a-btn"  onClick={() => addToCart(product)}>ADD TO CART</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                    {selectedProduct && <ProductDetails product={selectedProduct} />}

                </div>
            </div> 
        </div>
    );
}

export default Category;
