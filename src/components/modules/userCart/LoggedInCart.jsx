import EmptyCart from "../userCart/EmptyCart";
import CheckOut from "../userCart/CheckOut";

function LoggedInCart({ token, cartData }) {
  return (
    <div className="flex w-full justify-center items-center">
      {cartData.orders.length ? <CheckOut token={token} /> : <EmptyCart />}
    </div>
  );
}

export default LoggedInCart;
