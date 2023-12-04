import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './Actor'
import Singer from './Singer'
import Cricketer from './Cricketer'
import Bookstore from './Bookstore'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)


  const actors = ['Sakib','Bappi', 'rajjak','Rubel']
  const singers = [
    {id: 1, name : 'Dr. Mahfujur Rahman', age: 68},
    {id: 2, name : 'Eva Rahman', age: 58},
    {id: 3, name : 'Pritom Rahman', age: 68}
  ]

  const players = [
    {name: "sakib", age: 45},
    {name: "rubel", age: 54},
    {name: "musfiqu", age: 50}
  ]

  const books = [
    {id: 1, name: "physics", price: 100},
    {id: 2, name: "Math", price: 120},
    {id: 3, name: "Bangla", price: 130},
    {id: 4, name: "Biology", price: 150}
  ]

  return (
    <>
     
      <h1>Vite + React</h1>
      <Bookstore books={books}></Bookstore>


      <Person></Person>
      {
        singers.map(singer=><Singer singer= {singer}></Singer>)
      }


{
  players.map(player=><Cricketer player={player}></Cricketer>)
}



      <Actor name ={'bapparaz'} ></Actor>
      {
        actors.map(actor =><Actor name = {actor} ></Actor>)
      }

   
      
    </>
  )
}

function Person(){
  const age = 25;
  const money = 200;
  return <h3>I am a person, age : {age}</h3>
}

export default App
