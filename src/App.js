import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widget from './components/Widget'
import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
// import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import { Axios } from 'axios';

function App() {
  //const [user, setUser] = useState(null)
  const [{ user }, dispatch] = useStateValue()
  return (
    
    <div>
    <AppWrapper> 
    {user ? (
    
    <div>
    <Header />
    <div className="app__body">
    <Sidebar />
    {/* <Widget /> */}
    <Feed />

    </div>
    
    /</div>
    ) : (
      <>
      <Login />
      <Register />
      </>
    )}
    </AppWrapper>
    
  </div>

);

}

const AppWrapper = styled.div`
background-color: #f1f2f5;
.app__body {
  display: flex;
}
`

export default App;
