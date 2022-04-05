import { Routes, Route, HashRouter, } from "react-router-dom";
import Header from 'Components/Header'
import { Home, Products } from 'Pages'

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Routes>
          <Route path="/product" element={<Products />} />
          <Route path="" element={<Home />} />
        </Routes>
      </main>
    </HashRouter>
  )
}
