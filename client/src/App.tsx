import { useState } from 'react'
import AllRoutes from './routes/AllRoutes'
import { Navbar, Loader } from './components'
import { useData } from './hooks';
import './App.css'

function App() {
  const [count, setCount] = useState(0) 
  const { loading } = useData();
  return (
    <div className="App">
      { loading && <Loader /> }
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App
