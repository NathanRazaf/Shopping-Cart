import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import StoreItem from "../components/StoreItem";
import '../styles/Store.css';
import '../styles/LoadingScreen.css';

const Store = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [productsDisplayed, setProductsDisplayed] = useState([]);
    const [displayCategories, setDisplayCategories] = useState(false);
    const [filter, setFilter] = useState(null); // e.g., "electric-guitars"
    const [sortOrder, setSortOrder] = useState(null); // e.g., "alphabetical"
    const [highlightedButton, setHighlightedButton] = useState('all');
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        fetch('../assets/instruments.json')
            .then(response => response.json())
            .then(data => {
                setAllProducts(data.instruments);
                setProductsDisplayed(data.instruments);
                setLoading(false); // Set loading to false when data is fetched
            });
    }, []);

    useEffect(() => {
        let filteredProducts = [...allProducts];

        if (filter) {
            filteredProducts = filteredProducts.filter(product => product[filter.name] === filter.value);
        }

        switch (sortOrder) {
            case 'alphabetical':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'price':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            default:
                break;
        }

        setProductsDisplayed(filteredProducts);
    }, [filter, sortOrder, allProducts]);

    if (loading) {
        return <div className='loadingScreen'><h1>Loading products...</h1></div>;
    }

    return (
        <div className='store'>
            {displayCategories && (
                <div className='sidebar'>
                    <Link to='/store'>
                        <button onClick={() => {
                            setFilter(null);
                            setHighlightedButton('all');
                        }}
                                className={highlightedButton === 'all' ? 'highlighted' : ''}>
                            All Products
                        </button>
                    </Link>
                    <h2>Categories</h2>
                    <ul>
                        <li>
                            <Link to='/store/electric-guitars'>
                                <button onClick={() => {
                                    setFilter({'name':'category', 'value':'electric-guitars'});
                                    setHighlightedButton('electric');
                                }}
                                        className={highlightedButton === 'electric' ? 'highlighted' : ''}
                                >
                                    Electric Guitars
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/store/acoustic-guitars'>
                                <button onClick={() => {
                                    setFilter({'name':'category', 'value':'acoustic-guitars'});
                                    setHighlightedButton('acoustic');
                                }}
                                        className={highlightedButton === 'acoustic' ? 'highlighted' : ''}
                                >
                                    Acoustic Guitars
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/store/bass-guitars'>
                                <button onClick={() => {
                                    setFilter({'name':'category', 'value':'bass-guitars'});
                                    setHighlightedButton('bass');
                                }}
                                        className={highlightedButton === 'bass' ? 'highlighted' : ''}
                                >
                                    Basses
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/store/pianos'>
                                <button onClick={() => {
                                    setFilter({'name':'category', 'value':'pianos'});
                                    setHighlightedButton('pianos');
                                }}
                                        className={highlightedButton === 'pianos' ? 'highlighted' : ''}
                                >
                                    Pianos
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/store/violins'>
                                <button onClick={() => {
                                    setFilter({'name':'category', 'value':'violins'});
                                    setHighlightedButton('violins');
                                }}
                                        className={highlightedButton === 'violins' ? 'highlighted' : ''}
                                >
                                    Violins
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/store/wind-instruments'>
                                <button onClick={() => {
                                    setFilter({'name':'category', 'value':'wind-instruments'});
                                    setHighlightedButton('wind');
                                }}
                                        className={highlightedButton === 'wind' ? 'highlighted' : ''}
                                >
                                    Wind Instruments
                                </button>
                            </Link>
                        </li>
                    </ul>
                    <h2>Brands</h2>
                    <ul>
                        <li>
                            <Link to='/store/Fender'>
                                <button onClick={() => {
                                    setFilter({'name':'brand', 'value':'Fender'});
                                    setHighlightedButton('fender')
                                }}
                                        className={highlightedButton === 'fender' ? 'highlighted' : ''}
                                >
                                    Fender
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/store/Music-Man'>
                                <button onClick={() => {
                                    setFilter({'name':'brand', 'value':'Music Man'});
                                    setHighlightedButton('music-man')
                                }}
                                        className={highlightedButton === 'music-man' ? 'highlighted' : ''}
                                >
                                    Music Man
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/store/Yamaha'>
                                <button onClick={() => {
                                    setFilter({'name':'brand', 'value':'Yamaha'});
                                    setHighlightedButton('yamaha')
                                }}
                                        className={highlightedButton === 'yamaha' ? 'highlighted' : ''}
                                >
                                    Yamaha
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/store/Gibson'>
                                <button onClick={() => {
                                    setFilter({'name':'brand', 'value':'Gibson'});
                                    setHighlightedButton('gibson')
                                }}
                                        className={highlightedButton === 'gibson' ? 'highlighted' : ''}
                                >
                                    Gibson
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/store/Cecilio'>
                                <button onClick={() => {
                                    setFilter({'name':'brand', 'value':'Cecilio'});
                                    setHighlightedButton('cecilio')
                                }}
                                        className={highlightedButton === 'cecilio' ? 'highlighted' : ''}
                                >
                                    Cecilio
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )
            }
            <div className='products'>
                {productsDisplayed.map((product, index) => {
                    return (
                        <Link to={`/store/${product.category}/${product.id}`} key={index}>
                            <StoreItem key={index} json={product} />
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default Store;
