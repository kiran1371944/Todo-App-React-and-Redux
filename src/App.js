import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';
import {useDispatch,useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const dispatch = useDispatch();
  const todos =useSelector((state)=>state.todoReducer);

  const [editFormVisibility,setEditFormVisibility] = useState(false);

  const [editTodo,setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);    // bcz user can click on any of the edit icon,So diiferent obj will rececive,also in form.js also must get the different editTodo prop there.
  }
  const cancelUpdate=()=>{
    setEditFormVisibility(false)
  }

  return (
      <div className="App  ">
        <br></br>
        <h1 style={{color:"white"}} className='text-center'> TODO-APP USING REACT-REDUX </h1>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={4} >
              <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
              <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
              <div className=" text-center d-grid m-2">
              {todos.length > 1&&(
                <button className='btn btn-danger ' onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
              )}
              </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      </div>
  );
}

export default App;
