import { BrowserRouter, Route, Routes } from "react-router-dom"
import Filter from "./Filter"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filter />}></Route>
          <Route path="/:categories" element={<Filter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App