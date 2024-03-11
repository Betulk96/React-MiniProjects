import React from 'react'
import Header from './components/header';
import Contents from './components/contents';
import SideBar from './components/sidebar';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />      
      <div className="sidebarAndContents">
        <SideBar />
        <Contents />
      </div>
    </div>
  )
}

export default App;