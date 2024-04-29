import { useState } from 'react'
import './ShowCount.css'
function ShowCount() {
  const [count, setCount] = useState(0)
  const suma = () => {
    setCount(count + 1)
  }
  const resta = () => {
    setCount(count - 1)
  }
  return (
    <div className='container'>
      <button id='sumar' onClick={suma}>
        Sumar
      </button>
      <button id='restar' onClick={resta}>
        Restar
      </button>
      <h3>Contador: {count}</h3>
    </div>
  )
}

export default ShowCount
