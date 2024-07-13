'use client';

//Context
import {AuthProvider} from '../../context/AuthContext';

import ButtonAppBar from "../modules/layoutModules/NavBar";
import Footer from "../modules/layoutModules/Footer";

type MyComponentProps = React.PropsWithChildren<{}>;

function Layout({ children, ...other}: MyComponentProps) {

  return (
    <AuthProvider>
      <div>
        <ButtonAppBar />
            {children}
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default Layout;