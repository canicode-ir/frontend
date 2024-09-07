import ButtonAppBar from "../modules/layoutModules/NavBar";
import Today from '../modules/layoutModules/Today'
import Footer from "../modules/layoutModules/Footer";
import { cookies } from 'next/headers';
import { BASE_URL } from '../../services/api';
import Cookies from "js-cookie";

//Components
import InstagramQR from '../elements/InstagramQR';

type MyComponentProps = React.PropsWithChildren<{}>;


async function getUserProfile() {
  //Is User Logged In?
const cookieStore = cookies()
const tokenObj = cookieStore.get('token')
const userToken = tokenObj?.value;
  if (userToken) {
    try {
      const res = await fetch(`${BASE_URL}user/profile`, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
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
const cookieStore = cookies()
const tokenObj = cookieStore.get('token')
const userToken = tokenObj?.value;
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