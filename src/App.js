import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from './Components/Header'
import { Products } from './Modules'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

const Home = () => {
  return <h1>Home</h1>
}