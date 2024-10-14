import  {useState} from "react";
import { useEffect } from "react";

//Creating cat image
//Use useState to manage the statefor the cat image URL and the loading status.
//Use useEffect to fetch a random cat image from the API when the app first loads.
//Display a “Get New Cat” button that fetches a new random cat image when clicked.

//Child component
//the the api https://api.thecatapi.com/v1/images/search

function CatImage() {  //is a single element
    const [UrlImage, setUrlImage] = useState('');
    const [pressImage, setPressImage] = useState(false);

//execute when the page displays 
        useEffect(() => {
             fetch('https://api.thecatapi.com/v1/images/search').then(
                 response => response.json()
                ).then(data => {
                    setUrlImage (data[0].url)
                    console.log(data[0].url)
                })
            }, [pressImage]  //each  time press image change
        )

        return(
            <>
            <div className="div">
                <img src={UrlImage} className="Image" alt="cat" />
                    <button onClick={() => setPressImage(!pressImage)}>
                        Change for other cat
                    </button>
                    <p className="read-the-docs">
                     Here are some cute images of cats
                    </p>
            </div>
            </>
        )
    }
    

export default CatImage;