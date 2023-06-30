import React, { useState } from 'react';
import { Box, Input, Button, Flex ,Heading} from '@chakra-ui/react';

const AddTask = ({setList, list}) => {

  const [Task, setTask] = useState({})

  const onChange = (e)=> {
      setTask({...Task,[e.target.name]: e.target.value })
  }
 
  const addTask = ()=> {
      if(list.length === 0){
        setList([
            {id: 0,
              done: false, 
             title: Task.title,
             description: Task.description
            }
          ]);
      }else {
        setList([...list,{id:list[list.length -1].id + 1, title: Task.title, description: Task.description,done: false}]);  
      }
  }

 
  
  return (
    <div style={{background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(5px)",border:"1px solid rgba(255, 255, 255, 0.3)",  padding:"1rem",marginBottom:"2rem"}}>
      <Heading as='h4' mb="4" >
         React To Do App
        </Heading>
        <Flex w="100%" >
        <Box w="40%">
            <Input placeholder='Title' name="title" value={Task.title}  size="md"
            onChange={(e)=> onChange(e)}  variant='outline'
            colorScheme="blackAlpha" />
          </Box>
          <Box w="40%" mx="2">
            <Input placeholder='Description'
            onChange={(e)=> onChange(e)}  
            name="description" value={Task.description} size="md" variant='outline' /> 
          </Box>
          <Flex  w="20%" justify="end">
            <Button size='md' colorScheme='teal'
              onClick={addTask}
            >Add</Button>
          </Flex>
        </Flex>   
    </div>
  )
}

export default AddTask