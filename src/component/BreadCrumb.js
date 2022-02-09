const BreadCrumb = () => {
  return (
    <>
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a>داشبورد</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              لیست کاربران
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};
export default BreadCrumb;
