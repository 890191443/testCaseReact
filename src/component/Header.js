import image5 from "../assets/images/5.jpg";
import { useSelector, useDispatch } from "react-redux";
import { setShowSideBar } from "../redux/showSidebar/action";
const Header = () => {
  const { isShow } = useSelector((state) => state.showSidebar);

  const dispatch = useDispatch();

  const toggle = () => {
    const sidebarsection = document
      .querySelector(".sidebar")
      .classList.contains("inactive");

    const mainsection = document
      .querySelector(".main")
      .classList.contains("active");
    if (sidebarsection && mainsection) {
      dispatch(setShowSideBar(false));
      console.log("showSidebar2", isShow);
    } else {
      dispatch(setShowSideBar(true));
      console.log("showSidebar3", isShow);
    }
  };

  return (
    <>
      <header className="header d-flex justify-content-between p-3 align-items-center">
        <div>
          <a onClick={() => toggle()}>
            <i className="toggle-sidebar-icon bi bi-justify fs-3"></i>
          </a>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown">
            <div
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="position-absolute top-0 end-50 translate-middle badge rounded-pill bg-red">
                9
              </span>
              <i className="bi bi-envelope fs-4 text-gray-600"></i>
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item fs-7" href="#">
                  {" "}
                  لورم ایپسوم{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-7" href="#">
                  {" "}
                  لورم ایپسوم متن{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-7" href="#">
                  {" "}
                  لورم ایپسوم متن ساختگی{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown mx-4">
            <div
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-bell fs-4 text-gray-600"></i>
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item fs-7" href="#">
                  {" "}
                  لورم ایپسوم{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-7" href="#">
                  {" "}
                  لورم ایپسوم متن{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-7" href="#">
                  {" "}
                  لورم ایپسوم متن ساختگی{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <div
              className="dropdown-toggle profile d-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                width="45"
                className="img-fluid rounded-circle me-2"
                src={image5}
                alt=""
              />
              <div>
                <h6 className="fs-6 fw-bold text-gray-600 mb-0">
                  سیده سمیه صفوی
                </h6>
                <p className="fs-8 text-gray-600 mb-0">سوپر ادمین</p>
              </div>
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item fs-7" href="#">
                  <i className="bi bi-person fs-5 me-1"></i>
                  پروفایل
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-7" href="#">
                  <i className="bi bi-gear fs-6 me-1"></i>
                  تنظیمات
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-7" href="#">
                  <i className="bi bi-wallet fs-6 me-1"></i>
                  حساب کاربری
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item fs-7" href="#">
                  <i className="bi bi-box-arrow-left fs-5 me-1"></i>
                  خروج
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
