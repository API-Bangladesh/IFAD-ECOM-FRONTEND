import React, {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {fetchOrder} from "../../../../services/OrderServices";
import InvoiceCard from "../../../../components/common/InvoiceCard";

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

    console.log(id)

    return (
        <Fragment>
            <div id="printable" className="invoice-box">
                <InvoiceCard orderId={id} />
            </div>
            <div className="text-center my-3">
                <button onClick={handlePrint} className="btn btn-warning">Print Invoice</button>
            </div>
        </Fragment>
    )
}

export default Invoice;