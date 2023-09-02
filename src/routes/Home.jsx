import '../styles/Home.css'
function Home() {
    return (
        <div className='home'>
            <div className='argument one'>
                <h2>Why buy from us?</h2>
                <p>
                    We are trusted by millions of customers around the world, especially Victor Wooten, the best bassist in the world,
                    who regularly buys from us after each time he breaks his bass in his concerts.
                </p>
                <span className='quote'>"Hold on, I have never learned about that store"</span>
                <span className='quote-author'>Victor Wooten</span>
            </div>
            <div className='argument two'>
                <h2>Can we trust your products?</h2>
                <p>
                    Our products are regularly verified by professionals. In particular, Michael Jackson can testify for the quality of our
                    guitars.
                </p>
                <span className='quote'>"Bro I don't even play guitar"</span>
                <span className='quote-author'>Michael Jackson</span>
            </div>
            <div className='argument three'>
                <h2>Are your prices higher than the market standards?</h2>
                <p>
                    We ourselves are partisans of low prices, so we always try to apply promotions as often as possible. In fact,
                    Elvis Presley always buys from us thanks to that.
                </p>
                <span className='quote'>"Nah bruh even Fender makes better prices than you"</span>
                <span className='quote-author'>Elvis Presley</span>
            </div>
        </div>
    )
}

export default Home