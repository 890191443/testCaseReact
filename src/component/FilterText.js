import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterAll } from "../redux/user/action";
const FilterText = () => {
  const dispatch = useDispatch();
  const [val, setval] = useState("");

  const filterAllUser = () => {
    dispatch(filterAll(val));
  };
  return (
    <>
      <div className="row">
        <div className="col-md-3 col-sm-12 txt-rtl">
          <label htmlFor="exampleInputEmail1" className="form-label">
            عنوان
          </label>
          <input
            type="text"
            placeholder="عنوان"
            className="form-control"
            onChange={(e) => setval(e.target.value)}
          />
        </div>

        <div className="col-md-3 col-sm-12 txt-rtl btn-form">
          <button
            className="btn btn-light-primary"
            onClick={() => filterAllUser()}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterText;
