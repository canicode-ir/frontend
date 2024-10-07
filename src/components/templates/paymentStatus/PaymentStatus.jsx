//Components
import UnverifiedPayment from "../../modules/payment/UnverifiedPayment";
import VerifiedPayment from "../../modules/payment/VerifiedPayment";
import ToastContainerComponent from "../../elements/ToastContainer";

function PaymentStatus({ searchParams, userProfile, URLHasSearchParams }) {
  const { amount, status } = searchParams;
  const transactionNumber = searchParams.in;
  const transactionData = userProfile &&
    searchParams && {
      amount,
      transactionNumber,
      userProfile,
    };

  console.log(transactionData);

  return (
    <div className="relative flex flex-col justify-between items-center px-4 lg:px-0">
      {amount && status === "true" && transactionNumber ? (
        <VerifiedPayment data={transactionData} />
      ) : (
        <UnverifiedPayment
          URLHasSearchParams={URLHasSearchParams}
          searchParams={searchParams}
          data={transactionData}
        />
      )}
      <ToastContainerComponent />
    </div>
  );
}

export default PaymentStatus;
