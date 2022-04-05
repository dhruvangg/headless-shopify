import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from 'Components/Header'
import { Products } from 'Pages'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Routes>
          <Route path="/headless-shopify" element={<Home />} />
          <Route path="/headless-shopify/product" element={<Products />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

const Home = () => {
  return <h1>Home</h1>
}