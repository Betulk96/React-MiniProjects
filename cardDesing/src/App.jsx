import { useState } from 'react'
import Header from './components/header/navbar'
import './App.scss'

import CardList from './components/main/cardList'
import Footers from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <CardList />
      <Footers />
      

    </div>
  )
}

export default App;
