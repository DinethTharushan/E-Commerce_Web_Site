import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import SweetAlert from "react-bootstrap-sweetalert";
import { useHistory } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.currentUser);
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState("");
  const [deleteTrigger, setDeleteTrigger] = useState([]);
  const [allShow, setAllShow] = useState(false);
  let history = useHistory();

  useEffect(()=>{
    if(user === null){
      history.push('/login');
      // window.location.href = "https://fluffy-sopapillas-e80ba6.netlify.app/login";
    }
  },[]);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch, deleteTrigger]);

  const URL = `https://apibuy.herokuapp.com/api/v1/products/${productId}`;

  const deleteConfirm = async () => {
    setShow(false);
    try {
      let response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "origin-list",
        },
      });
      let json = await response.json();
      setDeleteTrigger(json);
      console.log(json);
      setAllShow(true);
      // handleDelete();
      // setLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  const deleteCancel = () => {
    setShow(false);
  };

  const handleDelete = (id) => {
    setProductId(id);
    // setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <Link to={"/newproduct"}>
              <button
                className="productListEdit"
                style={{ backgroundColor: "darkblue" }}
              >
                Create
              </button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => {
                handleDelete(params.row._id);
                setShow(true);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
      <SweetAlert
        show={show}
        warning
        showCancel
        confirmBtnText="Yes, Delete it!"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={deleteConfirm}
        onCancel={deleteCancel}
        focusCancelBtn
      >
        You will not be able to recover this imaginary file!
      </SweetAlert>
      <SweetAlert
        show={allShow}
        success
        title="Successfully delete!"
        // text="SweetAlert in React"
        onConfirm={() => setAllShow(false)}
      ></SweetAlert>
    </div>
  );
}
