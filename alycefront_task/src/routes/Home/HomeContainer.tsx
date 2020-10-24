import * as React from "react";
import HomePresenter from "./HomePresenter";
import { message } from "antd";

interface Props {}
interface State {
  searchTerm: string;
  userId: string;
  userPassword: string;
  modalVisible: boolean;
  isUser: boolean;
  loginUser: string;
  [key: string]: string | any;
}

class HomeContainer extends React.Component<Props, State> {
  state: State = {
    searchTerm: "",
    userId: "",
    userPassword: "",
    modalVisible: false,
    isUser: false,
    loginUser: "",
  };

  componentDidMount() {
    const { isUser } = this.state;
    localStorage.setItem("isUser", `${isUser}`);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("e :>> ", e.target.value);
    console.log("e :>> ", e.target.name);
    const name: string = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleShowModal = (): void => {
    console.log("click :>> ");
    this.setState({
      modalVisible: true,
    });
  };

  handleCancel = (): void => {
    this.setState({
      modalVisible: false,
      userId: "",
      userPassword: "",
    });
  };

  handleSubmit = (): void => {
    const { userId, userPassword, isUser } = this.state;
    const adminId: string = "alyce";
    const adminPassword: string = "alyce123";
    if (adminId === userId && adminPassword === userPassword) {
      message.success("로그인 성공");
      localStorage.setItem("isUser", `${!isUser}`);
      localStorage.setItem("loginUser", `${userId}`);
      this.setState({
        modalVisible: false,
        userId: "",
        userPassword: "",
        isUser: true,
        loginUser: userId,
      });
    } else {
      message.error("회원이 아닙니다.");
      this.setState({
        modalVisible: false,
        userId: "",
        userPassword: "",
      });
    }
  };

  handleLogOut = (): void => {
    const { isUser } = this.state;
    message.success("로그아웃");
    localStorage.setItem("loginUser", "");
    localStorage.setItem("isUser", `${!isUser}`);
    this.setState({
      isUser: false,
      loginUser: "",
    });
  };
  render() {
    const {
      searchTerm,
      modalVisible,
      userId,
      userPassword,
      isUser,
      loginUser,
    } = this.state;
    const {
      handleChange,
      handleShowModal,
      handleCancel,
      handleSubmit,
      handleLogOut,
    } = this;
    console.log("this.state :>> ", this.state);
    return (
      <HomePresenter
        userId={userId}
        userPassword={userPassword}
        searchTerm={searchTerm}
        modalVisible={modalVisible}
        isUser={isUser}
        loginUser={loginUser}
        handleChange={handleChange}
        handleShowModal={() => handleShowModal()}
        handleCancel={() => handleCancel()}
        handleSubmit={() => handleSubmit()}
        handleLogOut={() => handleLogOut()}
      />
    );
  }
}

export default HomeContainer;
