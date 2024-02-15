import { useState } from 'react'
import SidebarLeft from './components/SidebarLeft/SidebarLeft.jsx'
import Content from './components/Content/Content.jsx'
import './App.css'

function App() {

  return (
    <div >
      <SidebarLeft />
       <Content />
    </div>
  );
}

export default App
