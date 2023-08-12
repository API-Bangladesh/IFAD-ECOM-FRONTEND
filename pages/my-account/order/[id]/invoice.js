import React, {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {fetchOrder} from "../../../../services/OrderServices";

const Invoice = () => {

    const router = useRouter();
    const {id} = router.query;

    const [order, setOrder] = useState({});

    useEffect(() => {
        if (id) {
            fetchOrder(id).then((response) => {
                if (response.data) {
                    setOrder(response.data);
                }
            })
        }
    }, [id]);

    const handlePrint = () => {
        const sectionToPrint = document.getElementById('printable');
        if (sectionToPrint) {
            const printWindow = window.open('', '_blank');
            printWindow.document.write('<html><head><title>Print</title></head><body>');
            printWindow.document.write(sectionToPrint.innerHTML);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        }
    };

    return (
        <Fragment>
            <div className="text-center my-3">
                <button onClick={handlePrint} className="btn btn-warning">Print Invoice</button>
            </div>

            <div id="printable" className="invoice-box">
                <table cellPadding={0} cellSpacing={0}>
                    <tbody>
                    <tr className="top">
                        <td colSpan={2}>
                            <table>
                                <tbody>
                                <tr>
                                    <td className="title">
                                        <img
                                            src="https://www.sparksuite.com/images/logo.png"
                                            style={{width: "100%", maxWidth: 300}} alt=""
                                        />
                                    </td>
                                    <td>
                                        Invoice #: {order?.id}
                                        <br/>
                                        Created: January 1, 2015
                                        <br/>
                                        Due: February 1, 2015
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="information">
                        <td colSpan={2}>
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        Sparksuite, Inc.
                                        <br/>
                                        12345 Sunny Road
                                        <br/>
                                        Sunnyville, CA 12345
                                    </td>
                                    <td>
                                        Acme Corp.
                                        <br/>
                                        John Doe
                                        <br/>
                                        john@example.com
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="heading">
                        <td>Payment Method</td>
                        <td>Check #</td>
                    </tr>
                    <tr className="details">
                        <td>Check</td>
                        <td>1000</td>
                    </tr>
                    <tr className="heading">
                        <td>Item</td>
                        <td>Price</td>
                    </tr>
                    <tr className="item">
                        <td>Website design</td>
                        <td>$300.00</td>
                    </tr>
                    <tr className="item">
                        <td>Hosting (3 months)</td>
                        <td>$75.00</td>
                    </tr>
                    <tr className="item last">
                        <td>Domain name (1 year)</td>
                        <td>$10.00</td>
                    </tr>
                    <tr className="total">
                        <td/>
                        <td>Total: $385.00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>

    )
}

export default Invoice;