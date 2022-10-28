import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const user = useSelector((state) => state.user.currentUser);
  // const navigate  = useNavigate();
  const token = useSelector((state) => state.user.token);
  let history = useHistory();

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(
          "http://localhost:5000/api/v1/user/stats",
          {
            headers: {
              "Content-Type": "application/json",
              token: `Bearer ${token}`,
              "Access-Control-Allow-Origin": "origin-list",
            },
          }
        );
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  useEffect(() => {
    if (user === null) {
      // navigate("/login");
      history.push("/login");
      // window.location.href = "https://fluffy-sopapillas-e80ba6.netlify.app/login";
    }
  }, []);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
