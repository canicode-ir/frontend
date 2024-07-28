import ButtonAppBar from "../modules/layoutModules/NavBar";
import Footer from "../modules/layoutModules/Footer";
import { cookies } from 'next/headers';


type MyComponentProps = React.PropsWithChildren<{}>;

function Layout({ children, ...other}: MyComponentProps) {
  //Is User Logged In?
  const cookieStore = cookies()
  const tokenObj = cookieStore.get('token')
  const userToken = tokenObj?.value;

  return (
      <div>
        <ButtonAppBar token={userToken} />
            {children}
        <Footer />
      </div>
  )
}

export default Layout;