import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../Context"

export function Login() {
    const { signInWithGoogle } = useAuth()

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const handleGoogleSignIn = async () => {
        setLoading(true)
        try {
            await signInWithGoogle()
            navigate("/")
            setLoading(false)
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            console.log({ errorCode, errorMessage, email })
            setError(errorMessage)
            setLoading(false)
        }
    }

    console.log(loading);

    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900 dark:text-white">
                            Sign in to your account
                        </h2>
                        <div className="mt-2 text-center text-sm leading-5 text-gray-600">
                            <div className="my-4 text-xs font-bold">OR</div>
                            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                Sign up for a new account
                            </Link>
                        </div>
                    </div>
                    <form className="mt-8">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm">
                            <div>
                                <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
                            </div>
                            <div className="-mt-px">
                                <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
                            </div>
                            <div className="mt-6 mb-4 flex items-center justify-between">
                                <div className="flex justify-between w-full">
                                    <div className="flex items-center">
                                        <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="ml-4 font-semibold block text-xs leading-5 text-gray-500 hover:text-gray-400 focus:outline-none focus:underline transition ease-in-out duration-150">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Sign up
                            </button>
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition duration-150 ease-in-out">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        &nbsp; Sign in with Google
                        {loading &&
                            <svg class="animate-spin ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>}
                    </button>
                </div>
            </div>
        </div>
    )
}
