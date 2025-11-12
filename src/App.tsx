import {
  Route,
  Routes
}                       from 'react-router-dom'
import './App.css'
import Home             from './pages/Home'
import Characters       from './pages/Characters'
import CharacterDetail  from './pages/CharacterDetail'
import Spells           from './pages/Spells'
import Layout           from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<CharacterDetail />} />
        <Route path="spells" element={<Spells />} />
      </Route>
    </Routes>
  )
}

export default App
