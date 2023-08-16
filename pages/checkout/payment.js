import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from '../../utils/axios';

const PaymentStatus = () => {
  const router = useRouter();
  const { status } = router.query;
  const { order_id } = router.query;

  useEffect(() => {
    const updateOrder = async () => {
      try {
        const response = await axios.put(`/ecom/orders/${order_id}/change-status`, {
          payment_status_id: 1,
          order_status_id: order_id
        });
        // console.log(response)
      } catch (error) {
          // tostify(toast, 'error', error);
          console.log("Something went wrong");
      }
      if (status === "success") {
        updateOrder();
      }
    };
  }, [order_id, status]);

  return (
    <div style={{ padding: '200px 0', fontSize: "34px", textAlign: "center" }}>
      {status === "success" && <p>Payment Successfull</p>}
      {status === "fail" && <p>Payment Failed</p>}
      {status === "cancel" && <p>Payment Canceled</p>}
    </div>
  );
};

export default PaymentStatus;
