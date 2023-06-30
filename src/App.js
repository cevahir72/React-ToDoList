import { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { Container } from '@chakra-ui/react'

function App() {
  const [list, setList] = useState([])

console.log(list)
  return (
    <div className="App" style={{background:"#36454F",color:"white",height:"100vh",paddingTop:"2rem"}}>
      <Container maxW='container.md'>
        <AddTask setList={setList} list= {list}/>
        <Task setList={setList} list= {list} />
      </Container>
    </div>
  );
}

export default App;
