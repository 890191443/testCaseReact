import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSearch } from "../redux/user/action";

const Datalist = (props) => {
  const { items, id } = props;
  const dispatch = useDispatch();

  const [val, setval] = useState("");

  const filterUser = () => {
    dispatch(filterSearch(val));
  };
  return (
    <>
      <div className="row">
        <div className="mb-3 col-md-3 col-sm-12 txt-rtl">
          <label htmlFor="exampleDataList" className="form-label">
            لیست کاربران
          </label>
          <input
            className="form-control "
            list={id}
            id="exampleDataList"
            placeholder="لیست کاربران"
            onChange={(e) => setval(e.target.value)}
          />
          <datalist id={id}>
            {items &&
              items.map((itm) => <option key={itm.id} value={itm.name} />)}
          </datalist>
        </div>

        <div className="col-md-3 col-sm-12 txt-rtl btn-form btn-form-datalist">
          <button
            className="btn btn-light-primary"
            onClick={() => filterUser()}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Datalist;
