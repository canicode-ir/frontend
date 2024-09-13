//Components
import UnverifiedPayment from "../../modules/payment/UnverifiedPayment";
import VerifiedPayment from "../../modules/payment/VerifiedPayment";

function PaymentStatus({ searchParams, userProfile }) {
  const { amount, status } = searchParams;
  const transactionNumber = searchParams.in;
  const transactionData = userProfile && {
    amount,
    transactionNumber,
    userProfile,
  };

  return (
    <div className="flex flex-col justify-between items-center px-4 lg:px-0">
      {amount && status === "true" && transactionNumber ? (
        <VerifiedPayment data={transactionData} />
      ) : (
        <UnverifiedPayment />
      )}
    </div>
  );
}

export default PaymentStatus;
