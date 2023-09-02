import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        fetch(`https://fake-music-store-api-060cbc0be4fa.herokuapp.com/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setLoading(false); // Set loading to false when data is fetched
            });
    }, [id]);

    // If loading, show the loading screen
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='product-details'>
            {product &&
                <>
                    <h1>{product.name}</h1>
                    <div className='product-details-bottom'>
                        <img src={product.image} alt={product.name} />
                        <div className='product-details-right'>
                            <p className={'product-rating'}>{product.numReviews} people gave this product a {product.rating} stars rating!</p>
                            <p className={'product-brand'}>Made by {product.brand}</p>
                            <p className={'product-description'}>I'm sorry, there's no description, you're gonna have to just refer to the image (we're a quality store I promise)</p>
                            <p className={'product-price'}>Price: ${product.price}</p>
                            <p className={product.inStock ? 'in-stock' : 'out-of-stock'}>{product.inStock ? 'This product is still in stock!' : 'This product is out of stock!'}</p>
                            <button className={'add-to-cart'}>Add to cart</button>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default ProductDetails;
