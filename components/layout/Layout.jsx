// Layout.jsx
import NavBar from "../Navbar";

const Layout = ({ children }) => {
    return (
   <div className="dark text-foreground bg-background">
      <NavBar/>
        <div className="ms:mx-3 sm:mx-3 md:mx-10 lg:mx-40 xl:mx-40">
          {children}
        </div>
   </div>
    );
  };
  
  export default Layout;
  