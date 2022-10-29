import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import { useState } from 'react'
import Login from './components/Login' 
import Register from './components/Register';

function App() {
  const [user, setUser] = useState(null)

  return (
      <div>
      <AppWrapper> 
      {user ? (
      
      <div>
      <Header />
      <div className="app__body">
      <Sidebar />
      <Feed />

      </div>
      
      /</div>
      ) : (
        <><Login /><Register /></>
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