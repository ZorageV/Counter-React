import './index.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const clickHandler = () => {
    setCount((prevState) => {
      return prevState + 1
    })
  }
  return (
    <div>
      <h1 className='w-fit px-2 py-2 mx-auto my-8 text-5xl font-semibold'>COUNTER</h1>
      <div className='bg-black/20 border-2 rounded-3xl border-gray-700 w-72 h-72 mx-auto my-32 relative'>
        <div className='bg-transparent text-9xl w-fit mx-auto my-4'>{count}</div>
        <div className='flex justify-center'>
        <button className='text-2xl font-medium bg-white/80 rounded-xl px-2 py-1 absolute bottom-1/4' onClick={clickHandler}>COUNT</button>
        </div>
      </div>
    </div>
  )
}

export default App
