import EmptyCart from "../userCart/EmptyCart";
import CheckOut from "../userCart/CheckOut";

function LoggedInCart({ token, cartData }) {
  return (
    <div>
      {cartData.orders.length ? (
        <CheckOut token={token} cartData={cartData} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default LoggedInCart;
