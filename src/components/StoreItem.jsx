import '../styles/StoreItem.css'
function StoreItem({json}) {
    return (
        <div className="store-item">
            <img src={json.image} alt={json.name} />
            <h3>{json.name}</h3>
            <p>Rating: {json.rating} ({json.numReviews} reviews)</p>
            <p className='brand'>Brand: {json.brand}</p>
            <p className='price'>{json.price} $</p>
        </div>
    )
}

export default StoreItem