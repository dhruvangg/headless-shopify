import { StoreContext } from "Context/StoreContext"
import { useContext } from "react"

export default function Cart({ state }) {
    const { showCart, setShowCart } = state
    const { cart, addQuantity, subQuantity, removeItem } = useContext(StoreContext)
    return (
        <aside className={`w-96 fixed top-0 right-0 bg-white dark:bg-gray-800 dark:text-white min-h-screen shadow-2xl p-8 transition-all duration-300 overflow-auto h-screen ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="fixed top-5 right-5" onClick={() => setShowCart(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {cart.length > 0 ? <div className="flex flex-col justify-between">
                <h3 className="font-bold">Cart</h3>
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

                <button className="w-full bg-indigo-700 text-white py-2 font-semibold mt-4 flex justify-center items-center">
                    <span className="mr-4">Checkout</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </button>

            </div> : <div className="flex flex-col justify-between">
                <h3 className="font-bold">Cart</h3>
                <p>Your cart is empty</p>
            </div>}
        </aside>
    )
}
