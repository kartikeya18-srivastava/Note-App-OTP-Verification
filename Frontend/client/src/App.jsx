import React from 'react'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import SignUp from './pages/SignUp/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Home />
      <Login />
      <SignUp />
   </div>
  )
}

export default App
