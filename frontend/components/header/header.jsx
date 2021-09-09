import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 400) {
        if (this.state.status !== "hey") {
          this.setState({ status: "hey" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <p
        style={{
          backgroundColor: this.state.status === "top" ? "red" : "green",
          color: this.state.status === "top" ? "white" : "blue",
          position: "fixed"
        }}
      >
        Amir
      </p>
    );
  }
}

