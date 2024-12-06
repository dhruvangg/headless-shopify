import { useAuth } from "../Context";
import { Navigate } from "react-router-dom"

export function AccessRoute({ children }) {
    const { user } = useAuth()
    return user ? <Navigate to="/" /> : children;
}