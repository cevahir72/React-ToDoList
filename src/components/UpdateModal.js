import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    InputLeftAddon,
    InputGroup
  } from '@chakra-ui/react';



const UpdateModal = ({show, setShow,setUpdatedItem,updatedItem, list,setList }) => {

    const close = ()=> {
        setShow(false)
    }

    const onChange = (e) => {
        // id will stay same , others will be changed
        setUpdatedItem({
            ...updatedItem, [e.target.name]: e.target.value
        })
    }

    const updateTask = ()=> {
       
        setList([...list.filter(item=>item.id !== updatedItem.id), updatedItem])

        setShow(false);
    }


  return (
    <div>
        <Modal isOpen={show} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <InputGroup>
            <InputLeftAddon children='Title' />
            <Input type='text' name="title" value={updatedItem.title} onChange={(e)=>onChange(e)} />
            </InputGroup>
            <InputGroup mt="3">
            <InputLeftAddon children='Description' />
            <Input type='text' name="description" value={updatedItem.description} onChange={(e)=>onChange(e)}/>
            </InputGroup>
             
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" colorScheme='red' mr={3} onClick={close}>
              Close
            </Button>
            <Button colorScheme='teal' onClick={()=>updateTask()}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default UpdateModal