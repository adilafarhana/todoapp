import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavTodo from './NavTodo'

const ViewTodo = () => {
    const[todo,changeTodo]=useState([])
    const fetchData =() =>{
      axios.get("https://jsonplaceholder.typicode.com/todos").then(
        (response)=>{
          changeTodo(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
      <NavTodo/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th>userId</th>
      <th>id</th>
      <th>title</th>
      <th>completed</th>
    </tr>
  </thead>
  {todo.map(
    (value,index)=>
        {
            return <tbody>
            <tr>
              <td>{value.userId}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.completed}</td>
            </tr>
           
          </tbody>
        }
  )
  }
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewTodo