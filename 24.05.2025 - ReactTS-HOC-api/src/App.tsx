import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import ProductsOne from "./ProductsOne"
import Home from "./Home"
import ProductsTwo from "./ProductsTwo"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productone" element={<ProductsOne/>}/>
        <Route path="/producttwo" element={<ProductsTwo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App