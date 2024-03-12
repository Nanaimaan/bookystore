import { useEffect } from "react";
import "./App.css";
import MainRouts from "./components/Routes/MainRouts";
import Navbar from "./components/UI/Navbar";
import Pagination from "./components/UI/PaginationComp";
import { authListener, login } from "./components/Auth/store/authSlice";
import { useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import Footer from "./components/UI/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(authListener());
    }
  }, [login]);
  return (
    <div className='App'>
      <Navbar />
      <Container maxWidth='xl' className='nav'>
        <MainRouts />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
