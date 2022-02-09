import { useEffect } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { isShow } = useSelector((state) => state.showSidebar);
  useEffect(() => {}, [isShow]);

  return (
    <>
      <section className={"sidebar " + (isShow ? "inactive" : " ")}>
        <div className="d-flex align-items-center justify-content-between justify-content-lg-center">
          <h4 className="fw-bold">TestCase</h4>
          <i className="d-lg-none fs-1 bi bi-x"></i>
        </div>
        <div className="mt-4">
          <ul className="list-unstyled">
            <li className="sidebar-item active">
              <a className="sidebar-link" href="./index.html">
                <i className="me-2 bi bi-grid-fill"></i>
                <span>داشبورد</span>
              </a>
            </li>
            <li x-data="dropdown" className="sidebar-item">
              <div className="sidebar-link">
                <i className="me-2 bi bi-people-fill"></i>
                <span>کاربران</span>
                <i className="ms-auto bi bi-chevron-down"></i>
              </div>
              <ul x-show="open" className="submenu">
                <li className="submenu-item">
                  <a href="#">لیست کاربران</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
