import logo from './logo.svg';
import './App.css';
import CardBox from './Components/Card';
import Cart from './Components/Cart';
import { Box, SimpleGrid } from '@chakra-ui/react'

const data = [{
  name: "Bitcoin",
  price: "40,000"
},
{
  name: "Ethereum",
  price: "2,800"
},
{
  name: "Litecoin",
  price: "150"
}]

function App() {

  return (
    <div className="App">
      <Box h={"100vh"} bg="gray.100" p={"2%"}>
        <SimpleGrid spacing={4} p={"2%"} mb={"5%"}  display={"flex"}  alignItems={"center"} justifyContent={"center"}  m={"auto"}templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {
            data.length > 0 && data.map((ele, i) => <CardBox key={i} item={ele} />)
          }

        </SimpleGrid>
        <Cart />
      </Box>

    </div>
  );
}

export default App;
