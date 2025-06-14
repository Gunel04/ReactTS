import { useContext } from "react";
import { BaseUrlContext } from "./context/BaseUrlContext";
import { useQuery } from "react-query";
import axios from "axios";

const Product: React.FC = () => {
    const [baseUrl, header] = useContext(BaseUrlContext);


    const fetchData = useQuery('product', () => {
        return axios.get(`${baseUrl}/product`, header)
            .then((res) => res.data);
    })

    const { data, isLoading, refetch } = fetchData;
    console.log(data);

    if (isLoading) {
        return <p>Loading products...</p>
    }
    return (
        <div className="m-5">

            {data.map((item:any, index:any) => (
                <li key={index}>{item.titleAz}</li>
            ))}
            <button className="btn btn-info my-1" onClick={refetch}>Refresh</button>
        </div>
    )
}

export default Product