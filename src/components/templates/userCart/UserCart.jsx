//Components
import NotLoggedInCart from "../../modules/userCart/NotloggedInCart";
import LoggedInCart from "../../modules/userCart/LoggedInCart";
import ToastContainerComponent from "../../elements/ToastContainer";

function UserCart({ token, cartData }) {
  return (
    <div className="flex flex-col justify-between items-center px-4 lg:px-0">
      {!!token ? (
        <LoggedInCart token={token} cartData={cartData} />
      ) : (
        <NotLoggedInCart />
      )}
      <ToastContainerComponent />
    </div>
  );
}

export default UserCart;
