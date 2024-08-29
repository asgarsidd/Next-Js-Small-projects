import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
  })
  return (
    <>
      <div className="main">
        <h1>Hey there its joke here!!</h1>
        <p>Jokes: {jokes.length}</p>
        {
          jokes.map((joke) => {
            return (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
