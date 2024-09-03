//Components
import NotLoggedInCart from "../../modules/userCart/NotloggedInCart";
import LoggedInCart from "../../modules/userCart/LoggedInCart";

function UserCart({ token, cartData }) {
  return (
    <div className="flex flex-col justify-between items-center px-4 lg:px-0">
      {!!token ? (
        <LoggedInCart token={token} cartData={cartData} />
      ) : (
        <NotLoggedInCart />
      )}
    </div>
  );
}

export default UserCart;
