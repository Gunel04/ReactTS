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
                    {/* {filteredCategory} */}
                    <ul className="list-group">
                        {category.map((item: string, index: number) => (
                            <Link to={`/${item}`} key={index} className="list-group-item" onClick={() => { setFilteredCategory(item) }}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
                        ))}
                    </ul>
                </Col>
                <Col sm={9}>
                    <Row className="g-3">
                        {products.map((item: productType, index: number) => (
                            <Col key={index} sm={12} md={4} className="">
                                <div className="card">
                                    <img src={item.image} height={200} style={{ objectFit: "contain" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title.slice(0, 20)}...</h5>
                                        <h6 className="card-title">${item.price}</h6>
                                        <p className="card-text">{item.description.slice(0, 65)}...</p>
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