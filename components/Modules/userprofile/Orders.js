import Row from "react-bootstrap/Row";
import Image from "next/image";
import Link from 'next/link'
import OrderImg from "../../../public/products/product1.png"
import OrderImg2 from "../../../public/products/product3.png"
import OrderImg3 from "../../../public/products/product4.png"
import Button from "react-bootstrap/Button"
import { RxCross2 } from 'react-icons/rx';
import { BiDollar } from 'react-icons/bi';

const Orders = () => {
  return (
    <>
      <Row>
        <h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 ">Ordered Products</h1>
       
        <div className=" table-responsive" >
          <table className="table mb-5 table-width">
            <thead>
              <tr>
                <th scope="col" className="text-capitalize">products</th>
                <th scope="col" className="text-capitalize">products name</th>
                <th scope="col" className="text-capitalize">quantity</th>
                <th scope="col" className="text-capitalize">payment</th>
                <th scope="col" className="text-capitalize">refund</th>
                <th scope="col" className="text-capitalize">total</th>
                <th scope="col" className="text-capitalize text-center">make payment</th>
                <th scope="col" className="text-capitalize">action</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row" className="">
                  <Image src={OrderImg} alt="" className="order-item-one" />
                </th>
                <td className="order-list mt-3 text-capitalize">ifad pillow chips</td>
                <td>50</td>
                <td>paid</td>
                <td>refund</td>
                <td>5000Tk</td>
                <td className="text-center">
                  <Button variant="success" className="order-icon-bg rounded-1 px-2 bg-success">
                    <BiDollar />
                  </Button>
                </td>
                <td>
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

                </td>
              </tr>
              <tr>
                <th scope="row" className="">
                  <Image src={OrderImg2} alt="" className="order-item-one" />
                </th>
                <td className="order-list mt-3 text-capitalize">ifad pillow chips</td>
                <td>50</td>
                <td>paid</td>
                <td>refund</td>
                <td>5000Tk</td>
                <td className="text-center">
                  <Button variant="success" className="order-icon-bg rounded-1 px-2 bg-success">
                    <BiDollar />
                  </Button>
                </td>
                <td>
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

                </td>
              </tr>
              <tr>
                <th scope="row" className="">
                  <Image src={OrderImg3} alt="" className="order-item-one" />
                </th>
                <td className="order-list mt-3 text-capitalize">ifad pillow chips</td>
                <td>10</td>
                <td>unpaid</td>
                <td>null</td>
                <td>5000Tk</td>
                <td className="text-center">
                  <Button variant="success" className="order-icon-bg rounded-1 px-2 bg-success">
                    <BiDollar />
                  </Button>
                </td>
                <td>
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

                </td>
              </tr>

            </tbody>
          </table> 
        </div>

      </Row>
    </>
  )
}
export default Orders