import { Col, Row } from "react-bootstrap";
import GeneralConponent from "./GeneralConponent";

const ProductsTwo: React.FC = (props) => {
    const { users } = props;
    return (
        <div className="container my-5">
            <Row className="g-3">
                {users.map((item: any) => (
                    <Col sm={12} md={6} lg={4}>
                        <div key={item.id} className="card" >
                            <img src={item.images[0]} height={250} style={{ objectFit: "contain" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <h5 className="card-title">Price: ${item.price}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default GeneralConponent(ProductsTwo)