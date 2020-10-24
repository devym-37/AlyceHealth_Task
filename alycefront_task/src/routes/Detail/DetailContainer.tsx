import React from "react";
import DetailPresenter from "./DetailPresenter";

interface State {}

class DetailContainer extends React.Component<State> {
  state: State = {};
  render() {
    <DetailPresenter />;
  }
}

export default DetailContainer;
