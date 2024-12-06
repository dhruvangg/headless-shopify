import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import Header from './Components/Header'
import { app } from "./firebase";
import { Home, Products, Signup, Login, Profile } from './Pages'
import { PrivateRoute, AccessRoute } from "./Routes";
import ErrorBoundary from "./Components/ErrorBoundary";

export default function App() {
  return (
    <HashRouter>
      <ErrorBoundary>
        <main className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
          <Header />
          <Routes>
            <Route path="" element={<Navigate to="product" />} />
            <Route path="/product" element={<Products />} />
            {/* <Route path="/product" element={<PrivateRoute><Products /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/signup" element={<AccessRoute><Signup /></AccessRoute>} />
            <Route path="/login" element={<AccessRoute><Login /></AccessRoute>} /> */}
          </Routes>
        </main>
      </ErrorBoundary>
    </HashRouter>
  )
}
