import React, {useState} from 'react';
import { Box, Heading,  Flex, IconButton, Text,Tooltip } from '@chakra-ui/react';
import { AiFillEdit,AiOutlineArrowRight, AiOutlineCheck,AiFillDelete } from 'react-icons/ai';
import UpdateModal from './UpdateModal';



const Task = ({list, setList}) => {

    const [show, setShow] = useState(false);
    const [updatedItem, setUpdatedItem] = useState({})

    const deleteTask = (id)=> {
        if(list.length === 1) {
            setList([])
        }else{
          setList([...list.filter(item=> item.id !== id)])
        }
    }

    const openModal = (item)=> {
        setUpdatedItem({...item})
        setShow(true)
    }

    const taskDone = (item)=> {
          for (let i = 0; i < list.length; i++) {
            if (list[i].id === item.id) {
              list[i].done = !list[i].done 
              break;
            
          }
    }
     setList([...list]);
  }


  return (
    <>
    {
      list.length === 0 ? (
          <div style={{background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(5px)",border:"1px solid rgba(255, 255, 255, 0.3)",  padding:"1rem",}}>
            No Task Available
          </div>
      ) : (
        <>
        {
          list.map(item=> (
            <div style={{background:"rgba(255, 255, 255, 0.2)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(5px)",border:"1px solid rgba(255, 255, 255, 0.3)",  padding:"1rem",marginBottom:"1rem"}} key={item.id}>
            <Flex w="100%" >
            <Box w="80%">
              <Heading as='h4' size='md' style={{   textDecoration: `${item.done ? 'line-through' : "none"} `, color:`${item.done ? "red" : "white"}` }}>
                 {item.title}
              </Heading>
              <Text fontSize='md' style={{textDecoration: `${item.done ? 'line-through' : "none"} `}}>
              {item.description}
                </Text>
              </Box>
              <Flex w="20%" gap="2">
                {
                  !item.done ? (
                      <>
                      <Tooltip label='Done'>
                      <IconButton  icon={<AiOutlineCheck />} colorScheme='teal'
                      onClick={()=>taskDone(item)}/>
                      </Tooltip>
                      </>
                  ) : (
                    <>
                    <Tooltip label='Undone'>
                    <IconButton  icon={<AiOutlineArrowRight />} colorScheme='orange'
                    onClick={()=>taskDone(item)}/>
                    </Tooltip>
                    </>
                  )
                }
              
              <Tooltip label='Edit'>
              <IconButton  icon={<AiFillEdit />} colorScheme='blue'
              onClick={()=> openModal(item)}/>
              </Tooltip>
              <Tooltip label='Delete'>
              <IconButton  onClick={()=>deleteTask(item.id)} icon={<AiFillDelete />} colorScheme='red'/>
              </Tooltip>
              </Flex>
            </Flex>   
        </div>
          ))
        }
        </>
        
      )
    }
      { show && ( <UpdateModal show={show} setShow={setShow} updatedItem={updatedItem} setUpdatedItem = {setUpdatedItem} list= {list} setList={setList} />)}
    </>
    
  )
}

export default Task