import logo from './logo.svg';
import './App.css';
import AddTodo from './componenet/AddTodo';
import SearchTodo from './componenet/SearchTodo';
import DeleteTodo from './componenet/DeleteTodo';
import ViewTodo from './componenet/ViewTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddTodo/>}/>
      <Route path='/search'element={<SearchTodo/>}/>
      <Route path='/delete'element={<DeleteTodo/>}/>
      <Route path='/viewAll'element={<ViewTodo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
