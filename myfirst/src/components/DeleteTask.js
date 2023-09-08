import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function DeleteTask({ task, deleteTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button isRound='true' onClick={onOpen}>Remove</Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>Do you really want to delete the task?</ModalHeader>
          <ModalBody>
            <Text>{task.body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme='red'
              onClick={() => deleteTask(task.id, onClose)}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { DeleteTask };
