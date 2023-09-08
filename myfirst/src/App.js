import {
  Heading,
  VStack,

} from "@chakra-ui/react";
import TaskList from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  }

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  return (
    <VStack p={4} minH='100vh' pb={28}>

      <Heading
        p='5'
        fontWeight='extrabold'
        size='xl'
        bgGradient='linear(to-r, red.500, yellow.500)'
        bgClip='text'
      >
        Todo list
      </Heading>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
      />
    </VStack>
  );
}

export default App;
