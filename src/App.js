import './App.scss';

import Item from './components/item.';

const data = [
  {
    avatar: '',
    name:'Lorem ipsum',
    phone: '(xx) x xxxx-xxxx'
  },
  {
    avatar: '',
    name:'Lorem ipsum',
    phone: '(xx) x xxxx-xxxx'
  },
  {
    avatar: '',
    name:'Lorem ipsum',
    phone: '(xx) x xxxx-xxxx'
  },
  {
    avatar: '',
    name:'Lorem ipsum',
    phone: '(xx) x xxxx-xxxx'
  },
  {
    avatar: '',
    name:'Lorem ipsum',
    phone: '(xx) x xxxx-xxxx'
  },
  {
    avatar: '',
    name:'Lorem ipsum',
    phone: '(xx) x xxxx-xxxx'
  },
  {
    avatar: '',
    name:'Lorem ipsum',
    phone: '(xx) x xxxx-xxxx'
  },
  {
    avatar: '',
    name:'Lorem ipsum',
    phone: '(xx) x xxxx-xxxx'
  },
]

function App() {
  return (
    <div className="App">
      {data.map((d)=>(
        <Item/>
      ))}
    </div>
  );
}

export default App;
