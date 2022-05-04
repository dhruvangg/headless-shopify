import { Routes, Route, HashRouter } from "react-router-dom";
import Header from 'Components/Header'
import { app } from "firebase.js";
import { Home, Products, Signup, Login, Profile } from 'Pages'
import { PrivateRoute, AccessRoute } from "Routes";

export default function App() {
  return (
    <HashRouter>
      <main className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/product" element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/signup" element={<AccessRoute><Signup /></AccessRoute>} />
          <Route path="/login" element={<AccessRoute><Login /></AccessRoute>} />
        </Routes>
      </main>
    </HashRouter>
  )
}
