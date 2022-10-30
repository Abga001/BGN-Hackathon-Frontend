import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widget from './components/Widget'
import Globe from './components/Globe'
import React, { Component } from 'react';
// import ScriptTag from 'react-script-tag';
 

 


function App() {
  return (
    
    <div className="App">
      <AppWrapper>
      <Header />
      <div className="app__body">
      <Sidebar />
      <Feed />
      <Widget />
      <Globe />
      </div>
      </AppWrapper>
      {/* <ScriptTag isHydrating={true} type="text/javascript" src="chart_globe.js" /> */}
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
