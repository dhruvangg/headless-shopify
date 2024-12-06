import { useEffect, useContext } from 'react';
import Client from 'shopify-buy';
import { ProductItem } from '../Components/Product';
import { StoreContext } from '../Context';

const client = Client.buildClient({
    domain: 'champdecay.myshopify.com',
    storefrontAccessToken: 'd04cfcf5c5bd7f6e80ae0a2a245d6967'
});

export function Products() {
    const { products, setProducts } = useContext(StoreContext)

    useEffect(() => {
        client.product.fetchQuery({
            first: 250,
            query: "available_for_sale:true"
        }).then((products) => {
            setProducts(products)
        })
    }, [])

    if (products.length === 0) {
        return <div>Loading...</div>
    }

    console.log(products);


    return (
        <div className="container mx-auto">
            <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 py-4">
                {products.map((product) => <ProductItem product={product} key={product.id} />)}
            </div>
        </div>
    )
}
