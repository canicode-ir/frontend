//Components
import PaymentStatus from "../../components/templates/paymentStatus/PaymentStatus";

function page({ searchParams }) {
  console.log(searchParams);
  return (
    <div>
      <PaymentStatus />
    </div>
  );
}

export default page;
