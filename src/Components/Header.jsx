import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import Client from 'shopify-buy';
import { ThemeContext, StoreContext, useAuth } from "../Context";

export default function Header() {
    const [showCart, setShowCart] = useState(false)
    const { theme, setTheme } = useContext(ThemeContext);
    const { cart, addQuantity, subQuantity, removeItem } = useContext(StoreContext)
    const { user } = useAuth()

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const client = Client.buildClient({
        domain: 'champdecay.myshopify.com',
        storefrontAccessToken: 'd04cfcf5c5bd7f6e80ae0a2a245d6967'
    });

    const handleCheckout = () => {
        client.checkout.create().then((checkout) => {
            localStorage.setItem("checkoutId", checkout.id)
            const checkoutId = checkout.id
            const lineItemsToAdd = cart.reduce((acc, item) => {
                acc.push({
                    variantId: item.variantId.id,
                    quantity: item.quantity,
                    customAttributes: [{
                        key: "title",
                        value: item.title
                    }, {
                        key: "price",
                        value: item.price
                    }, {
                        key: "image",
                        value: item.image
                    }]
                })
                return acc
            }, [])

            client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
                console.log(checkout.webUrl);
                window.open(checkout.webUrl);
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <header
            className="bg-white dark:bg-gray-900 border-b-2 border-indigo-500 p-2 sticky top-0 w-full flex flex-col justify-center gap-4 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-500"><Link to="">HeadlessShopify</Link></h2>
                <ul className="flex">
                    {/* <li className="mx-4 font-semibold"><Link to="/product" className="dark:text-white">Product</Link></li> */}
                </ul>
                <div className="flex">
                    <button className="mr-4" onClick={toggleTheme}>
                        {theme === "light" ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>}
                    </button>
                    <button className="cart flex" onClick={() => setShowCart(!showCart)}>
                        <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <sup className="bg-indigo-700 dark:bg-indigo-500 rounded-[100%] h-5 w-5 flex items-center justify-center text-white font-semibold">{cart.length || 0}</sup>
                    </button>
                </div>
            </div>
            <aside className={`w-96 fixed top-0 right-0 bg-white dark:bg-gray-800 dark:text-white min-h-screen shadow-2xl p-8 transition-all duration-300 overflow-auto h-screen ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col justify-between">
                    <div className="flex justify-between">
                        <h3 className="font-bold">Cart</h3>
                        <button className="" onClick={() => setShowCart(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {cart.length > 0 ? <>
                        <ul className="flex flex-col">
                            {cart.map((item) => {
                                return <li className="flex py-6" key={item.id}>
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src={item.image} alt={item.title} className="h-full w-full object-cover object-center" />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                                                <h3><a href="#">{item.title}</a></h3>
                                                <p className="ml-4">₹{parseFloat(item.price) * parseInt(item.quantity)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Unit Price: ₹{parseFloat(item.price)}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <div className="text-gray-500 dark:text-gray-300 flex items-center">Qty
                                                <div className="flex px-4 items-center">
                                                    <button onClick={() => subQuantity(item.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                    <span className="m-2 ">{item.quantity}</span>
                                                    <button onClick={() => addQuantity(item.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => removeItem(item.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <button type="button" className="font-semibold bg-indigo-700 dark:bg-gray-800 py-2 px-2 text-gray-300 w-full rounded-md" onClick={handleCheckout}>Checkout</button>
                    </> : <p>Your cart is empty</p>}
                </div>
            </aside>
        </header >
    )
}
