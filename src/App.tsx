
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import ToDoPage from './pages/ToDoPage'
import HomePage from './pages/HomePage'
// import Navbar from './components/Navbar'
import GoBackButton from './components/GoBackButton'
import LeftSideNavbar from './components/LeftSideNavbar';
import EntrancePage from './pages/EntrancePage'
import Stopwatch from './pages/StopWatch'
import NotFoundPage from './pages/NoFoundPage'
import Weather_App from './pages/Weather_App'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './Dashboard/ProtectedRoute';
import Login from './Dashboard/Login';
import Overview from './Dashboard/Overview'

import Report from './Dashboard/Report';
import Analytics from './Dashboard/Analytics'
import Users from './Dashboard/Users'
import Settings from './Dashboard/Settings'
function App() {

const location=useLocation();

const backbutton=["/todo","/stopwatch","/weather_app"];
const showBack=backbutton.includes(location.pathname)


const leftNav=["/todo","/projects","/stopwatch","/weather_app"];
const showLeftNav=leftNav.includes(location.pathname)

  return (
    <>
  
    {/* <Navbar/> */}
    {showBack && <GoBackButton/>}
     {showLeftNav && <LeftSideNavbar/>}
    
    <Routes>
      <Route path="/" element={<EntrancePage/>}/>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/overview" element={<Overview/>}/>
      <Route path="/reports" element={<Report/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/projects" element={<HomePage/>}/>
      <Route path="/todo" element={  <ToDoPage />}/>
      <Route path="/stopwatch" element={<Stopwatch/>}/>
      <Route path="/weather_app" element={<Weather_App/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
   
    
    </>
  )
}

export default App
