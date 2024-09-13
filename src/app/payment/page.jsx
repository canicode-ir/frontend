//Components
import PaymentStatus from "../../components/templates/paymentStatus/PaymentStatus";

function page({ params, searchParams }) {
  return (
    <div>
      <PaymentStatus params={params} searchParams={searchParams} />
    </div>
  );
}

export default page;
