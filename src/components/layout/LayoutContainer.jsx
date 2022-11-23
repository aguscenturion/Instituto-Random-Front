import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const LayoutContainer = ({children}) => {
  return (
    <>
    <div className="flex">
    <Sidebar />
      <div className="content w-100">
        <Navbar/>
        {children}
      </div>
    </div>
    </>
    
  );
};

export default LayoutContainer;