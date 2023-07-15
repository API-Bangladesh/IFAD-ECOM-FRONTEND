import Row from "react-bootstrap/Row";
import Image from "next/image";
import Link from 'next/link'
import OrderImg from "../../../public/products/product1.png"
import OrderImg2 from "../../../public/products/product3.png"
import OrderImg3 from "../../../public/products/product4.png"
import Button from "react-bootstrap/Button"
import { RxCross2 } from 'react-icons/rx';
import { BiDollar } from 'react-icons/bi';
import { token } from "../../../utils/auth";
import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [myOrder, setMyOrder] = useState([]);

  	const fetchData = async() =>{
		const BASE_URL = "http://192.168.11.93:8000/ecom"
		const headers = {
			"Authorization": token(),
			"Content-Type": "application/json",
		  };
	try{
		await axios.get(`${BASE_URL}/orders`, {headers})
		.then((res)=>{
			setMyOrder(res.data.data);
			console.log(myOrder); 
		})
	}catch(err){
		console.log(err.message);
	}
	};

	useEffect(()=>{
		fetchData(); 
	},[]);

  return (
    <>
      <Row>
        <h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 ">Ordered Products</h1>
       
        <div className=" table-responsive" >
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
              <tr>
             {
            myOrder.map((item)=>{
              <>
                  {/* <th scope="row" className="">
                    <Image src={OrderImg} alt="" className="order-item-one" />
                  </th> */}
                  <td className="order-list mt-3 text-capitalize">{item.id}</td>
                  <td>{item.order_date}</td>
                  <td>{item.payment_status_id}</td>
                  <td>{item.order_status_id}</td>
                  <td>{item.grand_total}</td>
                  {/* <td>5000Tk</td> */}
                  {/* <td className="text-center">
                    <Button variant="success" className="order-icon-bg rounded-1 px-2 bg-success">
                      <BiDollar />
                    </Button>
                  </td> */}
                  {/* <td>
                    <div className="d-flex justify-content-start order-icons">
                      <Link href="/payments/Payments">
                        <Button variant="success" className="order-icon-bg rounded-1 px-2 bg-success me-2">
                          <svg width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                          </svg>
                        </Button>
                      </Link>
                      <div>
                        <Button variant="danger" className="order-icon-bg rounded-1 px-2 bg-danger">
                          <RxCross2 />
                        </Button>
                      </div>
                    </div>
  
                  </td> */}
                </>
                })
              }
              </tr>
              </tbody>
          </table> 
        </div>

      </Row>
    </>
  )
}
export default Orders