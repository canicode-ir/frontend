"use client";

function LoggedInCart({ userToken }) {
  const logOutHandler = () => {
    console.log(userToken);
  };

  return (
    <div>
      <button onClick={logOutHandler}>خروج</button>
    </div>
  );
}

export default LoggedInCart;
