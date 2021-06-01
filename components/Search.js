import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react"

const Search = () => {
    return (
        <FormControl action="/" method="get" >
            <FormLabel htmlFor="header-search" >
                <Input 
                 type="text"
                 id="header-search"
                 placeholder="direction"
                 name="direction" 
                />
            </FormLabel>
            <Button type="submit" >Search</Button>
        </FormControl>
    )
}

export default Search
