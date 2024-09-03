//Components
import NotLoggedInCart from "../../modules/userCart/NotloggedInCart";
import LoggedInCart from "../../modules/userCart/LoggedInCart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserCart({ token, cartData }) {
  return (
    <div className="flex flex-col justify-between items-center px-4 lg:px-0">
      {!!token ? (
        <LoggedInCart token={token} cartData={cartData} />
      ) : (
        <NotLoggedInCart />
      )}
      <ToastContainer
        style={{
          width: "fit-content",
          margin: "80px 0 0 auto",
          boxShadow: "none",
        }}
        closeButton={false}
        autoClose={2000}
        bodyStyle={{
          width: "fit-content",
          color: "",
          fontFamily: "dana",
        }}
        progressStyle={{
          backgroundColor: "rgba(26, 103, 103, 0.2)",
        }}
      />
    </div>
  );
}

export default UserCart;
