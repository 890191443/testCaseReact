import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/action";
import Datalist from "./Datalist";
import FilterText from "./FilterText";
const Grid = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const clearFilter = () => {
    dispatch(fetchUsers());
  };
  return (
    <>
      <div className="row">
        <div className="card">
          {loading && (
            <div className="spinner-border text-primary " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="card-header text-end">
            <button
              className="btn btn-light-primary"
              onClick={() => clearFilter()}
            >
              <i className="bi bi-funnel-fill"></i>
              پاک کردن همه فیلتر ها
            </button>
            {users.length > 0 && (
              <>
                <Datalist items={users} id="dataListUser" />
                <FilterText />
                <hr />
              </>
            )}
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th>نام </th>
                    <th>نام کاربری</th>
                    <th>ایمیل</th>
                    <th>تلفن</th>
                    <th>وبسایت</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((itm, index) => (
                      <tr key={itm.id}>
                        <td>{index}</td>
                        <td className="text-muted">{itm.name}</td>
                        <td className="text-muted">{itm.username}</td>
                        <td className="text-muted"> {itm.email} </td>
                        <td className="text-muted tex_num"> {itm.phone} </td>
                        <td className="text-muted"> {itm.website} </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Grid;
