import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header
            class="bg-white border-b-2 border-indigo-700 p-2 sticky top-0 w-full flex flex-col justify-center gap-4 p-4 mb-4">
            <div class="container mx-auto flex justify-between items-center">
                <h2 class="text-xl font-bold text-indigo-700"><Link to="/">Shopify</Link></h2>
                <ul>
                    <li><Link to="/product">Product</Link></li>
                </ul>
                <button class="cart flex">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <sup class="bg-indigo-700 rounded-[100%] h-5 w-5 flex items-center justify-center text-white font-semibold">0</sup>
                </button>
            </div>
        </header >
    )
}
