import { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext()

export const StoreProvider = (props) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const [products, setProducts] = useState([])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addQuantity = (productId) => {
        const newCart = cart.map(item => {
            if (item.id === productId) {
                item.quantity++
            }
            return item
        })
        setCart(newCart)
    }

    const subQuantity = (productId) => {
        const newCart = cart.map(item => {
            if (item.id === productId) {
                item.quantity > 1 && item.quantity--
            }
            return item
        })
        setCart(newCart)
    }

    const removeItem = (productId) => {
        const newCart = cart.filter(item => item.id !== productId)
        setCart(newCart)
    }

    const cartStore = { products, setProducts, cart, setCart, addQuantity, subQuantity, removeItem }



    return <StoreContext.Provider value={cartStore}>
        {props.children}
    </StoreContext.Provider>
}