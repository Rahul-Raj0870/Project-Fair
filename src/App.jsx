
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>} ></Route>
        <Route path='/dash' element={<Dashboard/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/projects' element={<Projects/>} ></Route>
      </Routes>
    </>
  )
}

export default App
