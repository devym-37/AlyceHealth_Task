import * as React from "react";
import LikePresenter from "./LikePresenter";
import { message } from "antd";

interface Props {}
interface State {
  modalVisible: boolean;
  resultData: any;
  likeData: any;
  submit: boolean;
}

class LikeContainer extends React.Component<Props, State> {
  state: State = {
    modalVisible: false,
    resultData: [],
    likeData: [],
    submit: false,
  };

  componentDidMount() {
    const { handleSortData } = this;

    const data: any = localStorage.getItem("likeData");

    const parseData: [] = JSON.parse(data);
    const sortData: any = handleSortData(parseData);

    if (data === null) {
      this.setState({
        likeData: [],
      });
    } else {
      this.setState({
        likeData: sortData,
      });
    }
  }

  handleSortData = (value: []) => {
    const response: any = value.sort((a: any, b: any) => {
      let aDate: any = new Date(a.publishedAt);
      let bDate: any = new Date(b.publishedAt);
      return aDate - bDate;
    });
    return response;
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { resultData } = this.state;

    this.setState({
      resultData: [{ ...resultData[0], description: e.target.value }],
    });
  };

  handleShowModal = (value: any) => {
    this.setState({
      modalVisible: true,
      resultData: [value],
    });
  };

  handleCancel = (): void => {
    this.setState({
      modalVisible: false,
      resultData: [],
    });
  };

  handleSubmit = (): void => {
    const { resultData } = this.state;

    const data: any = localStorage.getItem("likeData");
    const parseData: [] = JSON.parse(data);
    const changeData: {}[] = [];

    const filterData: any = parseData.filter((exData: any): void => {
      if (exData.author !== resultData[0].author) {
        changeData.push(exData);
      } else {
        changeData.push(...resultData);
      }
    });

    this.setState({
      modalVisible: false,
      likeData: changeData,
      submit: true,
    });
    localStorage.setItem("likeData", JSON.stringify(changeData));
  };

  handleUnlikeData = (value: any) => {
    const currentLikeList: any = localStorage.getItem("likeData");
    const parserData: [] = JSON.parse(currentLikeList);

    const likeInfo: Array<{}> = [];
    const filterData: any = parserData.filter(
      (data: any) => data.author !== value.author
    );
    message.success("즐겨찾기 삭제");
    this.setState({
      likeData: filterData,
    });

    if (parserData === null) {
      likeInfo.push(value);
    } else {
      likeInfo.push(...parserData, value);
    }

    localStorage.setItem("likeData", JSON.stringify(filterData));
  };

  render() {
    const { modalVisible, resultData, likeData } = this.state;

    const {
      handleChange,
      handleShowModal,
      handleCancel,
      handleSubmit,
      handleUnlikeData,
    } = this;

    return (
      <LikePresenter
        modalVisible={modalVisible}
        likeData={likeData}
        resultData={resultData}
        handleChange={handleChange}
        handleShowModal={handleShowModal}
        handleUnlikeData={handleUnlikeData}
        handleCancel={() => handleCancel()}
        handleSubmit={() => handleSubmit()}
      />
    );
  }
}

export default LikeContainer;
