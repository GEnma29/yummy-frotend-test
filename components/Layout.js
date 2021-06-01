import { Flex,Text, Spacer } from "@chakra-ui/react"

const Layout = ({children}) => {
    return (
        <>
        <Flex w="100%" minH="90vh" align="center" justify="center">
            {children}
        </Flex>
        <Flex p={['2','2','8','8']} align="center" justify="center" >
            <Text >make by Enmamnuel </Text>
        </Flex>
        </>

    )
}

export default Layout
