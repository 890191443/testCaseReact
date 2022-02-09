import BreadCrumb from "../component/BreadCrumb";
import Grid from "../component/Grid";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const HomePage = () => {
  const { isShow } = useSelector((state) => state.showSidebar);
  useEffect(() => {}, [isShow]);
  return (
    <>
      <section x-data="toggleSidebar" className="dir-rtl">
        <Sidebar />

        <section className={"main  " + (isShow ? "active" : " ")}>
          <Header />

          <div className="content p-2 p-lg-4">
            <div className="container-fluid">
              <BreadCrumb />
              <Grid />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
