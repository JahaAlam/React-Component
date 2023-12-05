import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './Actor'
import Singer from './Singer'
import Cricketer from './Cricketer'
import Bookstore from './Bookstore'
import Book from './Book'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)


  const actors = ['Sakib','Bappi', 'rajjak','Rubel']
  const singers = [
    {id: 1, name : 'Dr. Mahfujur Rahman', age: 68},
    {id: 2, name : 'Eva Rahman', age: 58},
    {id: 3, name : 'Pritom Rahman', age: 68}
  ]

  const players = [
    {id: 1, name: "sakib", age: 45},
    {id: 2, name: "rubel", age: 54},
    {id: 3, name: "musfiqu", age: 50}
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
      <Form></Form>



      <Bookstore books={books}></Bookstore>


      <Person></Person>
      {
        singers.map(singer=><Singer key= {singer.id} singer= {singer}></Singer>)
      }


{
  players.map(player=><Cricketer key={player.id}  player={player}></Cricketer>)
}



      <Actor name ={'bapparaz'} ></Actor>
      {
        actors.map(actor =><Actor key={actor} name = {actor} ></Actor>)
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
