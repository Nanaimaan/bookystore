import { useEffect } from "react";
import "./App.css";
import MainRouts from "./components/Routes/MainRouts";
import Navbar from "./components/UI/Navbar";
import Pagination from "./components/UI/PaginationComp";
import { authListener } from "./components/Auth/store/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(authListener());
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <MainRouts />
    </div>
  );
}

export default App;
