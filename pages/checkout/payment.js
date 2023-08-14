import { useRouter } from 'next/router';

const PaymentStatus = () => {
  const router = useRouter();
  const { status } = router.query;

  return (
    <div style={{height: "500px", padding: "100px 0"}}>
      <h1>Payment Status: {status}</h1>
    </div>
  );
};

export default PaymentStatus;