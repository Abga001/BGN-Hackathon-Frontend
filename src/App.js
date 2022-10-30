import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widget from './components/Widget'
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
      </div>
      </AppWrapper>
      {/* <ScriptTag isHydrating={true} type="text/javascript" src="chart_globe.js" /> */}
    </div>


  );
}

const AppWrapper = styled.div`
background: rgb(227,53,19);
background: linear-gradient(90deg, rgba(227,53,19,1) 0%, rgba(249,120,0,1) 45%, rgba(255,166,0,1) 96%);
.app__body {
  display: flex;
}
`

export default App;
