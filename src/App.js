import React, { useState, useEffect } from 'react';
import api  from './contexts/api'
import { 
  BrowserRouter as Router, 
  Route, 
  //Link, 
  Switch,
  //useHistory
 } from 'react-router-dom';

import './App.scss';

import Item from './components/item';
import Input from './components/input';
import Button from './components/button';
import NewContact from './components/newContact';


const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path='/new-contact' component={NewContact} />
      </Switch>
    </Router>
  );
}

const Home = ( {history} ) => {

  const [research, setResearch] = useState([]);

  const receiveData = () =>{
    api.get('/api/contact')
    .then((response)=>{
      console.log('response ', response)
      setResearch(response.data.data.contacts)
    })
    .catch((e)=>{console.log('error on response ', e)})
  }

  useEffect(()=>{
    receiveData()
  }, [])

  const handleResearch = (value) => {

    if (!value) {
      receiveData()
      return
    }

    const find = research.filter((contact) => {
      return contact.name.toLowerCase().indexOf(value.toLowerCase()) != -1 ||
        contact.phone.toLowerCase().indexOf(value.toLowerCase()) != -1
    })
    setResearch(find)
  }
  
  return (
    <div className='App'>
      <h1>Js Chat</h1>

      <div className='subheader'>
        <Input handleResearch={handleResearch} />
        <Button label='Novo contato' history={history} routeName='/new-contact' />
      </div>

      <div className='lisItem'>
        {research.map((contact, index) => (
          <Item name={contact.name} phone={contact.phone} key={index} />
        ))}
      </div>

    </div>
  )
}

export default App;
