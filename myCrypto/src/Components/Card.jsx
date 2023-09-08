import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, ModalOverlay, Modal,Heading, Text, Button, Input, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/actions'
const CardBox = ({ item }) => {
    // console.log("item",item.name,item.price);
    const [quantity,setQuantity] =useState(1)
    const dispatch = useDispatch()
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const addToCartFunc = () => {
        console.log("add to cart functions",item)
        const payload = {
            ...item,quantity
        }
        console.log("add to cart",payload)
        dispatch(addToCart(payload))
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>
            <Card  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                <CardHeader>
                    <Heading size='md'>{item.name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>$ {item.price}</Text>
                </CardBody>
                <CardFooter>
                    <>
                        <Button
                            onClick={() => {
                                setOverlay(<OverlayOne />)
                                onOpen()
                            }}
                        >
                                Use Quantity
                        </Button>
                        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                            {overlay}
                            <ModalContent>
                                <ModalHeader>Quantity</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                <Input type='number' placeholder='Enter Quantity' value={quantity} onChange={(e) =>  setQuantity(e.target.value)}/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={onClose}>Close</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                    <Button onClick={addToCartFunc}>Buy</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default CardBox