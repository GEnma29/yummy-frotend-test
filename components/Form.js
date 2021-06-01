import React,{useState} from 'react'
import Search from '../components/Search'
import {
    Button,
    Input,
    Flex,
    FormControl,
    Image,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react"
  import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';


  import {map, infoWindow} from '@googlemaps/js-api-loader'
const Form = ({res}) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  
  ///// auto complete 
  const [address, setAddress] = useState(null);


  const getLocation=()=>{
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else{
      alert("Geolocation is not supported by this browser");
    }
  }
  const getCoordinates= async(position)=>{
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.customKey}`)
    const json = await res.json()
    const {results} = json 
    console.log(results)
  }
    
  

  return(
    <Flex w="40%">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="name"></Input>
        <FormLabel>Email address</FormLabel>
        <Input type="name"></Input>
        <FormHelperText>We'll never share your email.</FormHelperText>
        <Button onClick={()=>{
          getLocation()
          }} >Location</Button>
          <Search />
      </FormControl>
    </Flex>
  )
   
}

export default Form
