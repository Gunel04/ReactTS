import axios from "axios";
import { useEffect, useState } from "react"

export interface productType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        "rate": number,
        "count": number
    }
}

const GeneralConponent = (OriginalComponent: any) => {
    const productsContainer = () => {
        const [products, setProducts] = useState<productType[]>([]);
        const [user, setUser] = useState<any[]>([]);
        useEffect(() => {
            axios.get("https://fakestoreapi.com/products")
                .then(res => setProducts(res.data))
            axios.get("https://dummyjson.com/products")
                .then(res => setUser(res.data.products))
        }, []);
        return <OriginalComponent cards={products} users={user} ></OriginalComponent>
    }
    return productsContainer;
}

export default GeneralConponent