import PropTypes from 'prop-types';
import { useContext } from "react"
import { StoreContext } from "../../Context"
import { toast } from 'react-toastify';

export const ProductItem = ({ product }) => {
    const { title, variants, images, id } = product
    const { products, cart, setCart } = useContext(StoreContext)

    const AddtoCart = (e) => {
        const productId = e.target.dataset.productId
        if (cart.findIndex(item => item.id === productId) === -1) {
            const product = products.find(product => product.id === productId)
            const lineItemtoAdd = {
                id: productId,
                title: product.title,
                price: product.variants[0].price.amount,
                quantity: 1,
                variantId: product.variants[0],
                image: product.images[0].src
            }
            setCart([...cart, lineItemtoAdd])
        } else {
            const newCart = cart.map(item => {
                if (item.id === productId) {
                    item.quantity++
                }
                return item
            })
            setCart(newCart)
        }

        toast("Added to cart!", {
            hideProgressBar: true,
            position: "bottom-center",
        })
    }

    return (
        <div className="flex flex-col justify-between border-gray-100 dark:border-gray-800 cursor-pointer border border-gray-200 overflow-hidden rounded-lg shadow-md" id={product.id}>
            <p className="text-center">
                <img style={{ maxHeight: "200px", margin: "0 auto" }} src={images[0].src} alt={title} />
            </p>
            <div className="p-4 dark:text-gray-300">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold">{title}</h3>
                    <p>${parseFloat(variants[0].price.amount)}</p>
                </div>
            </div>
            <button data-product-id={id} className="addToCart font-semibold bg-indigo-700 dark:bg-gray-800 py-2 px-2 text-gray-300 w-full" onClick={AddtoCart}>Add to cart</button>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.object
}