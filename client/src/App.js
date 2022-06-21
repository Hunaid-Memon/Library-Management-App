import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AddData from './components/AddData';
import Main from './components/Main';

const App = () => {

  const students = [{
    id: 1,
    name: 'Hunaid',
    email: 'Email',
    phone: '021558545'
  }]

  const submitData = e => {
    e.preventDefault()
    console.log(e.target.value);
}

  return (
    <>
    <Navbar />
    <Header heading='Library Managment' />
    <div className='container' >
      <AddData />
      <Main students={students} submitData={submitData} />
    </div>
    </>
  )
}

export default App
