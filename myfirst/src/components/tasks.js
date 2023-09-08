import React from "react";
import { DeleteTask } from "./DeleteTask";
import {
  HStack,
  Box,
  VStack,
  Text,
  StackDivider,
  Heading,
} from "@chakra-ui/react";

function TaskList({ tasks, deleteTask }) {
  if (!tasks.length) {
    return (
      <>
        <Box maxW='80%'>
          <Heading   mt='20px'>No tasks added yet!</Heading>
        </Box>
      </>
    );
  }
  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor='gray.100'
        borderWidth='2px'
        p='5'
        borderRadius='lg'
        w='100%'
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems='stretch'
      >
        {tasks.map((task) => (
          <HStack key={task.id}>
            <Text
              w='100%'
              p='8px'
              borderRadius='lg'
              cursor='pointer'
            >
              {task.body}
            </Text>
            <DeleteTask
              task={task}
              deleteTask={deleteTask}
            />
          </HStack>
        ))}
      </VStack>
    </>
  );
}

export default TaskList;
