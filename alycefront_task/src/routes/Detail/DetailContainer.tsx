import React from "react";
import DetailPresenter from "./DetailPresenter";

interface State {}

class DetailContainer extends React.Component<State> {
  state: State = {};
  render() {
    return <DetailPresenter />;
  }
}

export default DetailContainer;
