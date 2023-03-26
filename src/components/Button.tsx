import { Button, ButtonGroup } from '@chakra-ui/react'
import { Login } from '../services/Login'

export const Buttonn = () => {
    return (
        <Button colorScheme='blue' onClick={Login}>Button</Button>
    )
}