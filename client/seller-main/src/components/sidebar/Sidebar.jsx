import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Email
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/payments" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Payments
              </li>
            </Link>
            <Link to="/orders" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Orders
              </li>
            </Link>
            {/* <Link to="/reports" className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </Link> */}
            {/* <Link to="/email" className="link">
              <li className="sidebarListItem">
                <Email className="sidebarIcon" />
                Send Email
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
