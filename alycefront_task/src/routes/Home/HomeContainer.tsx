import * as React from "react";
import HomePresenter from "./HomePresenter";
import { message } from "antd";
import * as api from "../../api";

interface Props {}
interface State {
  searchTerm: string;
  userId: string;
  userPassword: string;
  modalVisible: boolean;
  isUser: boolean;
  loginUser: string;
  [key: string]: string | any;
  resultData: any;
  likeData: Array<{}>;
}

class HomeContainer extends React.Component<Props, State> {
  state: State = {
    searchTerm: "",
    userId: "",
    userPassword: "",
    modalVisible: false,
    isUser: false,
    loginUser: "",
    resultData: [],
    likeData: [],
  };

  componentDidMount() {
    const checkLogin: string | null = localStorage.getItem("isUser");

    if (checkLogin === null) {
      localStorage.setItem("isUser", "false");
    } else {
      localStorage.setItem("isUser", checkLogin);
      if (checkLogin === "true") {
        const userName: any = localStorage.getItem("loginUser");
        this.setState({
          isUser: true,
          loginUser: userName,
        });
      }
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name: string = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleShowModal = (): void => {
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

  handleSearch = async (value: string): Promise<any> => {
    const { handleSortData } = this;
    const response = await api.apiList.getNews(value);
    if (response.status === 200) {
      const result: [] = handleSortData(response.data.articles);
      this.setState({
        resultData: result,
      });
    }
  };

  handleLikeData = (value: any) => {
    const { likeData } = this.state;
    const { handleSortData } = this;
    const checkUser = localStorage.getItem("isUser");

    const currentLikeList: any = localStorage.getItem("likeData");
    const parserData: any = JSON.parse(currentLikeList);
    console.log("currentLikeList :>> ", currentLikeList);
    console.log("parserData :>> ", parserData);
    const likeInfo: Array<{}> = [];
    if (checkUser === "true") {
      message.success("즐겨찾기 등록 완료");
      this.setState({
        likeData: [...likeData, value],
      });

      if (parserData === null) {
        likeInfo.push(value);
      } else {
        likeInfo.push(...parserData, value);
      }
      console.log("likeInfo :>> ", likeInfo);
      const sortData = handleSortData(likeInfo);
      localStorage.setItem("likeData", JSON.stringify(sortData));
    } else {
      message.error("로그인 필요");
    }
  };

  handleSortData = (value: [] | {}[]) => {
    const response: any = value.sort((a: any, b: any) => {
      let aDate: any = new Date(a.publishedAt);
      let bDate: any = new Date(b.publishedAt);
      return aDate - bDate;
    });
    return response;
  };

  render() {
    const {
      searchTerm,
      modalVisible,
      userId,
      userPassword,
      isUser,
      loginUser,
      resultData,
    } = this.state;
    const {
      handleChange,
      handleShowModal,
      handleCancel,
      handleSubmit,
      handleLogOut,
      handleSearch,
      handleLikeData,
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
        resultData={resultData}
        handleChange={handleChange}
        handleSearch={handleSearch}
        handleLikeData={handleLikeData}
        handleShowModal={() => handleShowModal()}
        handleCancel={() => handleCancel()}
        handleSubmit={() => handleSubmit()}
        handleLogOut={() => handleLogOut()}
      />
    );
  }
}

export default HomeContainer;
