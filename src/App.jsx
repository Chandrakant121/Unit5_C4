import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser } from "./Redux/actions"
import { addOrder } from "./Redux/actions"
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { toggleisAuth } from "./Redux/actions";
import { ProtectedRoute } from "./components/ProtextedRoute";

function App() {

  const log = useSelector((store) => store.isLoggedIn);
  var dispatch = useDispatch();


  useEffect(() => {
    getData(dispatch);
  }, []);

  async function getData(dispatch) {

    let data = await fetch("http://localhost:8080/users");
    let res = await data.json();
    dispatch(addUser(res));

  }



  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}

        {log ? (
          <Link className="nav-logout" to="/" onClick={() => {
            dispatch(toggleisAuth(true))
          }}>
            Logout
          </Link>
        ) : (
          <Link className="nav-login" to="/login">
            Login
          </Link>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/neworder" element={<NewOrder />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </div>
  );
}

export default App;
