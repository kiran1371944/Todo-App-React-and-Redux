import React,{useState,useEffect}from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useDispatch} from 'react-redux';
import {addTodo,handleEditSubmit} from '../redux/todoapp/actions'

function Form({editFormVisibility,editTodo,cancelUpdate}) {
  const dispatch = useDispatch()
  const [todoValue,setTodoValue]= useState('');
  const [editvalue,setEditvalue]= useState('');

  useEffect(() => { // 1 for access the state
    setEditvalue(editTodo.todo) //3 its todo value will be saved in the editvalue state
  }, [editTodo]) //2 In dependency array of useEffect,I will pass the editTodo prop therby when i receive diff object there surely will have a diff editTodo prop here,So whenever our editTodo prop changes ,it will trigger our useEffect
  

  const handleSubmit =(e)=>{
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();    //to create individual id for each todo
    let todoObj={
      id:time,
      todo:todoValue,
      completed:false
    }
     setTodoValue('')  //to clear our form
     dispatch(addTodo(todoObj))
  }

  const editSubmit = (e)=>{
    e.preventDefault();
    let editedObj={
      id:editTodo.id,
      todo:editvalue,
      completed:false,
    }
    dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
    {editFormVisibility===false ?(
    <Container>
       <Row>
         <Col></Col>
         <Col xs={12}>
         <form  onSubmit={handleSubmit}>
       <div className='d-flex '>
         <input type='text' placeholder='Add your todo-items' className='form-control ' required
         value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
         <button type='submit' className='btn btn-secondary btn-md'>ADD</button>
       </div>
         </form>
         </Col>
         <Col></Col>
       </Row>  
    </Container>
    ):(
      
    <Container>
      <Row>
        <Col></Col>
        <Col xs={12}>
        <form onSubmit={editSubmit}>
      <div className='d-flex '>
        <input type='text' placeholder='Update your todo-items' className='form-control ' required
        value={editvalue ||""} onChange={(e)=>setEditvalue(e.target.value)}/>
        <button type='submit' className='btn btn-secondary btn-md'>Update</button>
      </div>
        <div className='d-grid mt-3'>
          <button type="button" className='btn btn-primary ' onClick={cancelUpdate}>BACK</button>
        </div>
        </form>
        </Col>
        <Col></Col>
      </Row>
     
    </Container>
    )}
    </>
   
  )
}

export default Form