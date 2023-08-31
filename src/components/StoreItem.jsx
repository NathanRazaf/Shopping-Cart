function StoreItem({json}) {
    return (
        <div className="store-item">
            <img src={json.image} alt={json.name} />
            <h3>{json.name}</h3>
            <p>{json.brand}</p>
            <p>{json.rating} ({json.numReviews} reviews)</p>
            <p>{json.price}</p>
        </div>
    )
}