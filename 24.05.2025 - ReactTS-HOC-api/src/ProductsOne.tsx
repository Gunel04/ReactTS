import { Col, Row } from "react-bootstrap";
import GeneralConponent, { type productType } from "./GeneralConponent";

const ProductsOne: React.FC = (props: any) => {
    const { cards } = props;
    return (
        <div className="container my-5">
            <Row className="g-3">
                {cards.map((item:productType) => (
                    <Col sm={12} md={6} lg={4}>
                        <div key={item.id} className="card" >
                            <img src={item.image} height={250} style={{objectFit:"contain"}} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{item.title.slice(0,25)}...</h4>
                                <h5 className="card-title">Price: ${item.price}</h5>
                                <p className="card-text">{item.description.slice(0,70)}...</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default GeneralConponent(ProductsOne);