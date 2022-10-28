import React from "react";
import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

const Error = () => {
  const [show, setShow] = useState(true);
  const onConfirmResult = () => {
    setShow(false);
    window.location.href = "http://localhost:3000/login";
  } 
  return (
    <div>
      <SweetAlert
        show={show}
        error
        title="Please log in first!"
        // text="SweetAlert in React"
        onConfirm={onConfirmResult}
      ></SweetAlert>
    </div>
  );
};

export default Error;
