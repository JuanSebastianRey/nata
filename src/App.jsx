import './App.css'
import {Routes, Route } from'react-router-dom';
import Opinion from "./opinion/opinion"

function App() {

  return (
      <Routes>
          <Route path="/" element={<Opinion />} />
      </Routes>
  )
}

export default App
