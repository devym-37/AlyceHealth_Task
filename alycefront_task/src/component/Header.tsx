import * as React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";

interface State {}

class Headers extends React.Component<{}, State> {
  state: State = {};

  render() {
    return (
      <>
        <Menu mode="horizontal">
          <Menu.Item key="mail" icon={<AppstoreOutlined />}>
            <Link to={"/"}>홈</Link>
          </Menu.Item>
          <Menu.Item key="app" icon={<MailOutlined />}>
            <Link to={"/likeNews"}>즐겨찾기</Link>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default Headers;
