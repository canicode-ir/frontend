//Components
import NotLoggedInCart from "../../modules/userCart/NotloggedInCart";
import LoggedInCart from "../../modules/userCart/LoggedInCart";

function UserCart({ userToken }) {
  return (
    <div className="flex flex-col justify-between items-center px-4 lg:px-0">
      {!!userToken ? (
        <LoggedInCart userToken={userToken} />
      ) : (
        <NotLoggedInCart />
      )}
    </div>
  );
}

export default UserCart;
