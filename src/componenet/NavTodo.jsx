import React from 'react'
import { Link } from 'react-router-dom'

const NavTodo = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TODO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">AddTodo</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">SearchTodo</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">DeleteTodo</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewAll">ViewTodo</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavTodo