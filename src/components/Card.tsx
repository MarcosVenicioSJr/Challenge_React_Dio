import { Box, Center, Input } from "@chakra-ui/react"
import { Buttonn } from "./Button"

export const Card = () => {
    return (
    <Box minHeight="100vh" backgroundColor="#77696a" padding="25px">
      <Box bg="whatsapp.100" borderRadius="20px" padding="15px">
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Buttonn />
      </Box>
    </Box>
    )
}