
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import ToDoPage from './pages/ToDoPage'
import HomePage from './pages/HomePage'
// import Navbar from './components/Navbar'
import GoBackButton from './components/GoBackButton'
import LeftSideNavbar from './components/LeftSideNavbar';
import EntrancePage from './pages/EntrancePage'

function App() {

const location=useLocation();

const backbutton=["/todo"];
const showBack=backbutton.includes(location.pathname)


const leftNav=["/todo","/projects"];
const showLeftNav=leftNav.includes(location.pathname)

  return (
    <>
  
    {/* <Navbar/> */}
    {showBack && <GoBackButton/>}
     {showLeftNav && <LeftSideNavbar/>}
    
    <Routes>
      <Route path="/" element={<EntrancePage/>}/>
      <Route path="/projects" element={<HomePage/>}/>
      <Route path="/todo" element={  <ToDoPage />}/>
    </Routes>
   
    
    </>
  )
}

export default App
