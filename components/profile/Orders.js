import Row from "react-bootstrap/Row";
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../../utils/constants";
import {fetchOrders} from "../../services/OrderServices";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrdersData = async () => {
        fetchOrders({
            paginate: 'yes'
        }).then((response) => {
            if (response?.data?.data) {
                setOrders(response.data.data);
            }
        });
    }

    useEffect(() => {
        fetchOrdersData();
    }, []);

    return (
        <>
            <Row>
                <h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 ">Ordered Products</h1>

                <div className=" table-responsive">
                    <table className="table mb-5 table-width">
                        <thead>
                        <tr>
                            <th scope="col" className="text-capitalize">Id</th>
                            <th scope="col" className="text-capitalize">Order Date</th>
                            <th scope="col" className="text-capitalize">Payment Status Id</th>
                            <th scope="col" className="text-capitalize">Order Status Id</th>
                            <th scope="col" className="text-capitalize">Grand Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((item, key) => (
                            <tr>
                                <td className="order-list mt-3 text-capitalize">{item.id}</td>
                                <td>{item.order_date}</td>
                                <td>{item.payment_status_id}</td>
                                <td>{item.order_status_id}</td>
                                <td>{item.grand_total}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Row>
        </>
    )
}
export default Orders