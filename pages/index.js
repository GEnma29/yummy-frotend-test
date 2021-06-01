import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import LandingForm from '../components/LandingForm';

// load google map script
const loadGoogleMapScript = (callback) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      callback();
    } else {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.customKey}&libraries=places`;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener("load", callback);
    }
  }
const Homepage = () => {
    
    const [loadMap, setLoadMap] = useState(false);
 
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);
    return (
        
        <div>
            <Head>
              <title>yummy test </title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
               <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.customKey}&libraries=places`} />
               <link rel="icon" href="/pencil.svg" />
            </Head>

            <LandingForm />
           
        </div>
    )
}

export default Homepage
