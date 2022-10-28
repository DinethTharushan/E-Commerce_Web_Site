import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

import { SendEmail } from "./pages/sendEmail/SendEmail";
import BulkEmail from "./pages/BulkEmail/BulkEmail";
import OrderList from "./pages/OrderList/OrderList";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword";
import PaymentList from "./pages/paymentList/PaymentList";
import Payments from "./pages/payment/Payment";
import ReportList from "./pages/ReportList/ReportList";
import Error from "./components/error/Error";

function App() {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        {/* <Route to="*" component={NotFound}></Route> */}
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/ForgetPassword">
          <ForgetPassword />
        </Route>
        {/* {user.isAdmin && ( */}
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
            <Route path="/orders">
              <OrderList />
            </Route>
            <Route path="/reports">
              <ReportList />
            </Route>

            <Route path="/email">
              <SendEmail />
            </Route>
            <Route path="/bulkEmail">
              <BulkEmail />
            </Route>
            <Route path="/payments">
              <PaymentList />
            </Route>
            <Route path="/payment/:paymentId">
              <Payments />
            </Route>
          </div>
        </>
        {/* )} */}
      </Switch>
    </Router>
  );
}

export default App;
