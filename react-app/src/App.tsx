import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/Lists';
import AddToList from './components/AddToList';
import Navbar from './components/Navbar';
export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  // const [number, setNumber] = useState(5);
  // const changeNumber = () => {
  //   setNumber(number + 1);
  // }
  const [people, setPeople] = useState<IState["people"]>([{
    name: 'John',
    age: 30,
    url: 'https://randomuser.me/api/portraits/',
    note: "This is a note"
  }]);
  // const addPerson = () => {
  //   setPeople([...people, { name: 'new person' }]);
  // }
  return (
    <div className="App">
      {/* <h1>People invited</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} /> */}
      <Navbar />
    </div>
  );
}

export default App;
