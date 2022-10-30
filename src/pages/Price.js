import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Price = () => {
    const [coin, setCoin] = useState(null)

    //using useEffect hook to make API call
    useEffect(() => {
        getCoin()
    }, []);

    // storing apiKey and currency symbol in variables
    const apiKey = ' 2A7450FC-963C-4DD0-82DB-C4CAD6773730';
    
    // returns object with matching URL params
    const params = useParams()
    
    // interpolate apiKey and symbol in the fetch URL
    const url = `https://rest-sandbox.coinapi.io/v1/exchangerate/${params.symbol}/USD?apikey=${apiKey}`

    //Fetch the coin data
    const getCoin = async () => {
        try {
            // fetch request
            const res = await fetch(url)
            const data = await res.json()
            // save resulting data in state
            setCoin(data)
        } catch (error) {
            console.log(error);
        }
    };

    // ===== Rendering
    // If data has loaded/was fetched
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        );
    };


    // If data is still loading ...
    const loading = () => <h1>LOADING . . .</h1>

    return(
        <div className='prices'>
            <h1>Prices</h1>
            {coin && coin.rate ? loaded() : loading()}
        </div>
    )
}

export default Price;