import React, { useState } from 'react';
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

const data = [
  {
    id: 1,
    avatar: '',
    name: 'Jordan Wilian',
    phone: '(11) 1 1111-1111'
  },
  {
    id: 2,
    avatar: '',
    name: 'Carlos Oliveira',
    phone: '(22) 2 2222-2222'
  },
  {
    id: 3,
    avatar: '',
    name: 'Ana Beatriz',
    phone: '(33) 3 3333-3333'
  },
  {
    id: 4,
    avatar: '',
    name: 'Bianca Pereira',
    phone: '(44) 4 4444-4444'
  },
  {
    id: 5,
    avatar: '',
    name: 'João Gabriel',
    phone: '(55) 5 5555-5555'
  },
  {
    id: 6,
    avatar: '',
    name: 'Mônica Rocha',
    phone: '(66) 6 6666-6666'
  }
]

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

  const [research, setResearch] = useState(data);

  const handleResearch = (value) => {

    if (!value) {
      setResearch(data)
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
