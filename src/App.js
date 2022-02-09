import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import HomePage from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
