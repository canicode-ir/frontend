import React from "react"

import ButtonAppBar from "../modules/layoutModules/NavBar";
import Footer from "../modules/layoutModules/Footer";

type MyComponentProps = React.PropsWithChildren<{}>;

function Layout({ children, ...other}: MyComponentProps) {

  return (
    <div>
      <ButtonAppBar />
          {children}
      <Footer />
    </div>
  )
}

export default Layout;