import {
  Box,
  Button,
  Center,
  Input
} from "@chakra-ui/react"
import { login } from "./services/login";

function App() {
  return (
    <>
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Box backgroundColor='#000000' borderRadius='25px' padding='15px'>
        <Center>
          <h1>Faça o Login</h1>
        </Center>
        <Input placeholder='email'/>
        <Input placeholder='password'/>
        <Center>
          <Button onClick={login} backgroundColor='green' size='sm' width='100%' marginTop='20px'>
            Enviar
          </Button>             
        </Center>   
      </Box>
    </Box>
    </>
  );
}

export default App;
