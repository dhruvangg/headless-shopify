export function ProductItem({ product }) {
    return (
        <div class="flex flex-col justify-between border-gray-100 cursor-pointer border border-gray-200" id={product.id}>
            <p class="text-center">
                <img style={{ maxHeight: "200px", margin: "0 auto" }} src={product.images[0].src} alt={product.title} />
            </p>
            <div class="p-4">
                <div class="flex justify-between items-center">
                    <h3 class="font-bold">{product.title}</h3>
                    <p>${parseFloat(product.variants[0].price)}</p>
                </div>
            </div>
            <button data-product-id={product.id} class="addToCart font-semibold bg-indigo-700 py-2 px-2 text-white w-full">Add to cart</button>
        </div>
    )
}
