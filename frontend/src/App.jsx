import React from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="wrapper">
        <Content />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
