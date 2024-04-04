import React, { useState } from 'react';
import './App.scss';

import Item from './components/item';
import Input from './components/input';
import Button from './components/button';

const data = [
  {
    avatar: '',
    name: 'Jordan Wilian',
    phone: '(11) 1 1111-1111'
  },
  {
    avatar: '',
    name: 'Carlos Oliveira',
    phone: '(22) 2 2222-2222'
  },
  {
    avatar: '',
    name: 'Ana Beatriz',
    phone: '(33) 3 3333-3333'
  },
  {
    avatar: '',
    name: 'Bianca Pereira',
    phone: '(44) 4 4444-4444'
  },
  {
    avatar: '',
    name: 'João Gabriel',
    phone: '(55) 5 5555-5555'
  },
  {
    avatar: '',
    name: 'Mônica Rocha',
    phone: '(66) 6 6666-6666'
  }
]

const App = () => {

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
    <div className="App">
      <h1>Js Chat</h1>

      <div className='subheader'>
        <Input handleResearch={handleResearch} />
        <Button label='Novo contato' />
      </div>

      <div className='lisItem'>
        {research.map((contact, index) => (
          <Item name={contact.name} phone={contact.phone} key={index} />
        ))}
      </div>

    </div>
  );
}

export default App;
