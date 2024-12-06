import { useAuth } from "../Context"

export function Profile() {
    const { user } = useAuth()
    const { displayName, email, emailVerified, photoURL } = user
    return (
        <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500" >
            <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
            <div className="flex justify-center -mt-8" >
                <img src={photoURL} className="rounded-full border-solid border-white border-2 -mt-3" />
            </div>
            <div className="text-center px-3 pb-6 pt-2" >
                <h3 className="text-white text-sm bold font-sans">{displayName}</h3 >
                <p className="mt-2 font-sans font-light text-white">{email}</p>
            </div>
        </div>
    )
}
