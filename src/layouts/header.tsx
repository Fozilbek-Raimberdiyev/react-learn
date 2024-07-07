import {
  HomeTwoTone,
  EditTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("h");
  const onClick = (e: any) => {
    setCurrent(e.key);
  };
  const items = [
    {
      key: "h",
      label: (
        <Link to="/">
          <HomeTwoTone />
          <span>Home</span>
        </Link>
      ),
    },
    {
      key: "r",
      label: (
        <Link to="/products">
          <EditTwoTone />
          <span>Products</span>
        </Link>
      ),
    },
    {
      key: "l",
      label: (
        <Link to="/users">
          <CheckCircleTwoTone />
          <span>Users</span>
        </Link>
      ),
    },
  ];
  return (
    <div className="container">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      ></Menu>
      <Outlet />
    </div>
  );
};
export default Header;
