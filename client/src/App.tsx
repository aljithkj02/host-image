import { useState } from 'react'
import AllRoutes from './routes/AllRoutes'
import { Navbar } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App
