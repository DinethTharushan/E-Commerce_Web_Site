import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  AttachMoney,
  BarChart,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "../user/user.css";
import SweetAlert from "react-bootstrap-sweetalert";
import formatDistance from "date-fns/formatDistance";
import { format } from "timeago.js";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Payments() {
  const location = useLocation();
  const paymentId = location.pathname.split("/")[2];
  const [currentDate, setCurrentDate] = useState("");
  const [data, setData] = useState([]);
  const [formSaveData, setFormSaveData] = useState([]);
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.currentUser);
  let history = useHistory();

  const URL = `https://apipaymentbuyer.herokuapp.com/api/v1/checkout/find/${paymentId}`;

  useEffect(()=>{
    if(user === null){
      history.push('/login');
      // window.location.href = "https://fluffy-sopapillas-e80ba6.netlify.app/login";
    }
  },[]);

  useEffect(() => {
    const userData = async () => {
      try {
        let response = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "origin-list",
          },
        });
        let json = await response.json();
        setData(json);
        console.log(json);
        // let year = data.createdDate.getFullYear();
        // let month = data.createdDate.getMonth();
        // let date = data.createdDate.getDate();
        // let currentDate = year + '-' + month + '-' + date;
        // console.log(currentDate);
        console.log(data.createdDate);
        // const str = formatDistance(
        //     new Date(data.createdDate),
        //     new Date()
        // );
        // setCurrentDate(data.createdDate.toString().slice(0, 10));
        // console.log(data.createdDate.toString().slice(0, 10));
        // setLoading(false);
      } catch (error) {
        alert(error);
      }
    };
    userData();
  }, []);

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">View Payment</h1>
        <div className="userTitleButtons">
          <Link to={"/payments"}>
            <button
              className="userAddButton"
              style={{ marginRight: "20px", backgroundColor: "darkblue" }}
            >
              Back
            </button>
          </Link>

          {/* <Link to={"/newUser"}>
              <button className="userAddButton">Create</button>
            </Link> */}
        </div>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://gravatar.com/avatar/932f2d2e75e2483baab6befb7860b327?s=400&d=robohash&r=x"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{data.UserID}</span>
              {/* <span className="userShowUserTitle">
                  {data.isAdmin ? "Admin" : "User"}
                </span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <AttachMoney className="userShowIcon" />
              <span className="userShowInfoTitle">Currency - </span>
              <span className="userShowInfoTitle">{data.currency}</span>
            </div>
            <div className="userShowInfo">
              <AttachMoney className="userShowIcon" />
              <span className="userShowInfoTitle">Amount - </span>
              <span className="userShowInfoTitle">{data.amount}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">Payment Date - </span>
              <span className="userShowInfoTitle">
                {format(data.createdDate)}
              </span>
            </div>
            {/* <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{data.description}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{data.email}</span>
              </div> */}
          </div>
        </div>
        {/* <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm" onSubmit={updateUser}>
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      name="username"
                      id="username"
                      type="text"
                      placeholder={data.name}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      name="email"
                      id="email"
                      type="text"
                      placeholder={data.email}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      name="phoneNo"
                      id="phoneNo"
                      type="text"
                      placeholder={data.telephone_no}
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton" type={"submit"}>
                    Update
                  </button>
                  <SweetAlert
                    show={show}
                    warning
                    showCancel
                    confirmBtnText="Yes, update it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={updateConfirm}
                    onCancel={updateCancel}
                    focusCancelBtn
                  >
                    You will not be able to recover this imaginary file!
                  </SweetAlert>
                </div>
              </form>
            </div> */}
      </div>
    </div>
  );
}
