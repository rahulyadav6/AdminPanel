import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<HomePage /> }/>
          <Route path='/create'  element={<CreatePage /> }/>
          <Route path='/create/:productId'  element={<CreatePage /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
