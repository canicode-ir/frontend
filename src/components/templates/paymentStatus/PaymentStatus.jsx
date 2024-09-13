"use client";

function PaymentStatus({ searchParams, userProfile }) {
  const { amount, status } = searchParams;
  const transactionNumber = searchParams.in;
  console.log(userProfile);

  return (
    <div>
      <h1>پرداخت با موفقیت انجام شده است</h1>
    </div>
  );
}

export default PaymentStatus;
