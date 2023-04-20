import React from "react";
import { useState, useEffect } from "react";
import "../Style/global.scss";

class CountDown extends React.Component {
  state = {
    count: 5,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === 0 && prevState.count !== this.state.count) {
      if (this.timer) {
        clearInterval(this.timer);
        alert("Times up!");
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

const HookCountDown = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      alert("Times up!");
      return;
    }

    let timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <h1>00:{count}</h1>
    </div>
  );
};

export { CountDown, HookCountDown };
