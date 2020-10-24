import React from "react";
import LikePresenter from "./LikePresenter";

interface State {}

class LikeContainer extends React.Component<State> {
  state: State = {};
  render() {
    return <LikePresenter />;
  }
}

export default LikeContainer;
