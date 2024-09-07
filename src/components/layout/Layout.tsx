import ButtonAppBar from "../modules/layoutModules/NavBar";
import Today from '../modules/layoutModules/Today'
import Footer from "../modules/layoutModules/Footer";
import { BASE_URL } from '../../services/api';
import Cookies from "js-cookie";

//Components
import InstagramQR from '../elements/InstagramQR';

type MyComponentProps = React.PropsWithChildren<{}>;


async function getUserProfile() {
  //Is User Logged In?
const userToken = Cookies.get('token');
  if (userToken) {
    try {
      const res = await fetch(`${BASE_URL}user/profile`, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        throw new Error('Failed to fetch user profile');
      }

      return res.json();
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('No token found');
  }
}

async function Layout({ children, ...other}: MyComponentProps) {
   //Is User Logged In?
const userToken = Cookies.get('token');
  const userProfile = userToken && await getUserProfile();
  const userRole = userProfile && userProfile.role;

  return (
      <div>
        <ButtonAppBar token={userToken} userRole={userRole}/>
        <Today />
            {children}
            <InstagramQR />
        <Footer />
      </div>
  )
}

export default Layout;