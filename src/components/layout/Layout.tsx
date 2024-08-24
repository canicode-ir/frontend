import ButtonAppBar from "../modules/layoutModules/NavBar";
import Today from '../modules/layoutModules/Today'
import Footer from "../modules/layoutModules/Footer";
import { cookies } from 'next/headers';

//Components
import InstagramQR from '../elements/InstagramQR';


type MyComponentProps = React.PropsWithChildren<{}>;

function Layout({ children, ...other}: MyComponentProps) {
  //Is User Logged In?
  const cookieStore = cookies()
  const tokenObj = cookieStore.get('token')
  const userToken = tokenObj?.value;

  return (
      <div>
        <ButtonAppBar token={userToken} />
        <Today />
            {children}
            <InstagramQR />
        <Footer />
      </div>
  )
}

export default Layout;