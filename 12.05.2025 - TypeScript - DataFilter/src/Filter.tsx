import axios from "axios";
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom";

type productType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}


const Filter: React.FC = () => {

    const { categories } = useParams();
    const [category, setCategory] = useState<string[]>([]);
    const [products, setProducts] = useState<productType[]>([]);
    const [filteredCategory, setFilteredCategory] = useState<string>(categories);
    const [active, setActive] = useState<string>("");
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(res => setCategory(res.data))


        axios.get(`https://fakestoreapi.com/products/category/${filteredCategory}`)
            .then(res => setProducts(res.data));
    }, [filteredCategory]);

    return (
        <Container className="my-5">
            <Row>
                <Col sm={3}>
                    <h3 className="mt-3 mb-2">Filter by Categories</h3>
                    <ul className="list-group">
                        {category.map((item: string, index: number) => (
                            <Link to={`/${item}`} key={index} className={`list-group-item ${active === item ? "color" : ""}`} onClick={() => { setFilteredCategory(item); setActive(item) }}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
                        ))}
                    </ul>
                </Col>
                <Col sm={9}>
                    <Row className="g-3">
                        <h3 className="text-center">Our Products</h3>
                        {products.map((item: productType, index: number) => (
                            <Col key={index} sm={12} md={4} className="">
                                <div className="card p-2">
                                    <div className="card-inner">
                                        <div className="card-body-1 ">
                                            <img src={item.image} height={200} style={{ objectFit: "contain" }} className="card-img-top mb-2" alt="..." />
                                            <h5 className="card-title">{item.title}</h5>
                                        </div>
                                        <div className="card-body-2 pt-4">
                                            <h4 className="card-title" style={{color:"rgb(11,215,195)"}}>Price: <span style={{fontStyle:"italic", color:"black"}}>${item.price}</span> </h4>
                                            <h5 className="text-center my-2" style={{fontStyle:"italic"}}>More Detail:</h5>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        ))}

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Filter