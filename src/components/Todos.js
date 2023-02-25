import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Todos.css'
import {removeTodo,handleCheckbox} from '../redux/todoapp/actions/index'

function Todos({handleEditClick,editFormVisibility}) {
  const dispatch = useDispatch();
  const todos =useSelector((state)=>state.todoReducer)
  console.log(todos);
  return todos.map  ((todo)=>(

<Container>
<Row>
  <Col></Col>
  <Col xs={12}>
  <div key={todo.id} className=' mt-2  p-2 bg-warning'>
        <div className='container-fluid  d-flex justify-content-between align-items-center '>
          {editFormVisibility === false &&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
          )}

          <p  style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}  }>{todo.todo}</p>

          {editFormVisibility === false &&(
            <div >
              <span  onClick={()=>handleEditClick(todo)}> <Icon icon={edit2}/></span>
              <span  onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
            </div>
          )}
        </div>
      

  </div>
  </Col>
  <Col></Col>
</Row>
</Container>
    
  ))
}

export default Todos
// p {
//   margin-top: -23px;
//   margin-bottom: 3rem;
//   margin-left: 50px;
// }