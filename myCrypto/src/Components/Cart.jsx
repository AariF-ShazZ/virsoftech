import { Box, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const data = useSelector((store) => store.cartReducer.cart)
  console.log("data", data)


  let total_final_price = 0

  const convertToNumber = (str) => {

    if (Number(str)) {
      //   console.log("str =>",Number(str))
      return Number(str)
    }
    let arr = str.includes(",") ? str.split(",") : []
    let final_str = arr.reduce((acc, value) => acc + value, "")

    let result = Number(final_str)
    return result
  }
  data.forEach((prod) => {
    console.log(convertToNumber(prod.price) * prod.quantity)
    let total_price=0
    total_price = convertToNumber(prod.price) * prod.quantity
    total_final_price = total_price
  })

  console.log("total_final_price",total_final_price);
  return (
    <>
      <Box>
        <Heading color={"gray.800"} mb={"2%"}>Your Cart</Heading>
        <OrderedList>
          {
            data.length > 0 ? data.map((ele) => <ListItem p={"1%"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"}  mb={"1%"} display={"flex"} alignContent={"center"} justifyContent={"space-between"}>
              <Box color={"gray.500"}>
              {ele.name}  ${ele.price}     {ele.quantity}
              </Box>
              <Text color={"gray.500"}>Total : {total_final_price}</Text>
            
            </ListItem>) : <Heading fontSize={"17px"} color={"red"}>Your cart is empty!</Heading>
          }

        </OrderedList>
      </Box>

    </>
  )
}

export default Cart