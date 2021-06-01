import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
    Flex,
    Icon,
    Stack,
    Box,
    useToast,
    Image,
    Wrap,
    WrapItem,
    Text,
    Link,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay, 
    Button,
    Heading,
    Input,
    InputLeftElement,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react"

import { motion,whileHover,whileTap } from "framer-motion"
import { BiCurrentLocation } from "@react-icons/all-files/bi/BiCurrentLocation";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { FaAppStoreIos } from "@react-icons/all-files/fa/FaAppStoreIos";
import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay";
const LandingForm = () => {
 // Form control with React-hooks-form
 const { register, handleSubmit } = useForm();
 // define toast 
 const toast = useToast();
 // define url api 
 const url= 'https://recruitment-two.vercel.app/api/v1/recruitment/prod'

 // send data to api 
 const onSubmit = async (data) => {
 const res= await fetch(url, {
   method: "POST",
   body: JSON.stringify(data),
   headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))// catch the error 
  .then(response => console.log('Success:', response)); // response
}
// reviews data users 
const reviews = {
  review1:{
    userImg:"https://bit.ly/dan-abramov",
    name:"Dan Abrahmov",
    contend: 'Great app. It’s reliable and has lots of options to choose from—more everyday. Definitely recommend it.',
    rating: 5, 
  },
  review2:{
    userImg:"https://bit.ly/kent-c-dodds",
    name:"Kent Dodds",
    contend: 'Yummy Great service! Honestly I’ve been using it for a while to send some deliveries to my family. Recommended.',
    rating: 5, 
  },
  review3:{
    userImg:"https://bit.ly/ryan-florence",
    name:"Ryan Florence",
    contend: 'Amazing Service I love how is so smooth and precise when it comes to deliver, pretty good app +5 stars',
    rating: 5, 
  },
}
  // place 
  const placeInputRef = useRef(null);
  const [place, setPlace] = useState(null);
 
  useEffect(() => {
    initPlaceAPI();
  }, []);
 
  // initialize the google place autocomplete
  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current);
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
      setPlace({
        address: place.formatted_address,
        lat: place.geometry.location.lat(),// 
        lng: place.geometry.location.lng()// 
      });
    });
  };
  return (
    <>
    {/** mobile view  */}
    <Flex >
    <Flex   position="absolute" top="30%" left="10%" display={['none', 'none', 'flex', 'flex']}>
      <motion.div
        whileHover={{ scale: 1.2}}
        whileTap={{ scale: 0.9 }}
      >
      <Box boxSize="sm">
        <Image src="https://play-lh.googleusercontent.com/VdssJ0c7j1mTuB7aJHMQqOooxSke4fpRzI2rae2QSyDUp8qJ8dh4XdFPa3z6nFy7Vb4=s180-rw"   boxSize="200px" borderRadius="1rem" alt="Segun Adebayo" />
      </Box>
      </motion.div>
    </Flex>
    <Flex position="absolute" top="65%" left="10%"  display={['none', 'none', 'flex', 'flex']} >
    <Box>
        <Heading color="teal" mb={4}>Download</Heading>
        <Flex  alignItems="center" justifyItems="center">
          <Link  href="https://apps.apple.com/us/app/yummy-venezuela/id1506748350" isExternal><Icon as={FaAppStoreIos} ml={12} w={8} h={8} color="cyan.300" /></Link>
          <Link  href="https://play.google.com/store/apps/details?id=com.yummy.customer&hl=es_419&gl=US" isExternal><Icon as={FaGooglePlay} ml={4} w={8} h={8} color="cyan.300" /></Link>
        </Flex>
      </Box>
    </Flex>
    <Flex   position="absolute" top="250" left="65%" display={['none', 'none', 'flex', 'flex']}>
    <Box flexDir="column" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Wrap>
        <WrapItem alignItems="center" justifyItems="center" p={2}>
           <Avatar  size="lg" name={reviews.review1.name} src={reviews.review1.userImg} />
           <Flex flexDir="column" alignItems="center">
           <Box p={2} d="flex" mt="2" alignItems="center">
           {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon as={AiFillStar} 
                key={i}
                color={i < reviews.review1.rating ? "yellow.300" : "gray.300"}
              />
            ))}
           </Box>
           <Box  p={2}  d="flex"  alignItems="center">
             <Text fontWeight="500" color="teal">{reviews.review1.contend}</Text>
           </Box>
           </Flex>
        </WrapItem>
      </Wrap>
    </Box>
    </Flex>
    <Flex position="absolute" top="450" left="65%" display={['none', 'none', 'flex', 'flex']} >
    <Box flexDir="column" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Wrap>
        <WrapItem alignItems="center" justifyItems="center" p={2}>
           <Avatar  size="lg" name={reviews.review2.name} src={reviews.review2.userImg} />
           <Flex flexDir="column" alignItems="center">
           <Box p={2} d="flex" mt="2" alignItems="center">
           {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon as={AiFillStar} 
                key={i}
                color={i < reviews.review1.rating ? "yellow.300" : "gray.300"}
              />
            ))}
           </Box>
           <Box  p={2}  d="flex"  alignItems="center">
             <Text fontWeight="500" color="teal">{reviews.review2.contend}</Text>
           </Box>
           </Flex>
        </WrapItem>
      </Wrap>
    </Box>
    </Flex>
    <Flex position="absolute" top="50" left="65%" display={['none', 'none', 'flex', 'flex']} >
    <Box flexDir="column" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Wrap>
        <WrapItem alignItems="center" justifyItems="center" p={2}>
           <Avatar  size="lg" name={reviews.review3.name} src={reviews.review3.userImg} />
           <Flex flexDir="column" alignItems="center">
           <Box p={2} d="flex" mt="2" alignItems="center">
           {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon as={AiFillStar} 
                key={i}
                color={i < reviews.review1.rating ? "yellow.300" : "gray.300"}
              />
            ))}
           </Box>
           <Box  p={2}  d="flex"  alignItems="center">
             <Text fontWeight="500" color="white">{reviews.review3.contend}</Text>
           </Box>
           </Flex>
        </WrapItem>
      </Wrap>
    </Box>
    </Flex>
    <Flex position="absolute" top="-10" left="0" borderRadius="10px"  zIndex="hide" bg="teal" minW="100%" minH="50%"></Flex>
    <Flex align='center' justify="center" flexDir="column">
    <motion.div
      initial={{y:-250}}
      animate={{ y:-10}}
     >
       <h1 className='Title' as="h1" mb={4}>Yummy test</h1>
    </motion.div> 
    <Box w="100%" zIndex="dropdown" boxShadow="dark-lg"   p="6" rounded="md" bg="white" >
      <Box  zIndex="docked" p="2" >
      <form onSubmit={handleSubmit(onSubmit)}>
       <FormControl>
         <Stack spacing={3} >
           <FormLabel>ID</FormLabel>
           <Input type="tel"  {...register("idCode")} type="text" />
           <FormLabel>Name</FormLabel>
          <Input type="tel" {...register("name")} type="text" />
          <FormLabel>Phone</FormLabel>
          <Input type="tel"  {...register("phone")} type="text" />
          <FormLabel>Location</FormLabel>
          <InputGroup   flexDir="column" >
          <InputLeftElement
             pointerEvents="none"
             children={<Icon as={BiCurrentLocation} w={6} h={6} color="red.300" />}

             />
          <Input type="tel" type="text" ref={placeInputRef} />
          {place && <div style={{ display:"none" }}>
           <Input  {...register('location.lat')} value={place.lat} /> 
           <Input  {...register('location.long')} value={place.lng} />   
           </div>}
           </InputGroup>
          </Stack>
         <Flex  mt={4} justify='center'>
         <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         >
            <Button colorScheme="teal" type="submit" onClick={() =>
               toast({
                      title: "Send data",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                      })
                      }>
                      Submit</Button>
         </motion.div>
         
      </Flex>
      </FormControl>
      </form>
      </Box>
      </Box>
      </Flex>
     </Flex>

     <style jsx>{`
      
      .Title{
       font-family: 'Pacifico', cursive;
       color: #ffff;
       font-size: 35px;
       margin-bottom: 10px;
      }
   `}</style>
    </>
  );
};
 
export default LandingForm;