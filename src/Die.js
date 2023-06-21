import React, {Component} from "react";
import "./Die.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

class Die extends Component {
  static defaultProps = {
    numberWords: new Map([
      [1, faDiceOne],
      [2, faDiceTwo],
      [3, faDiceThree],
      [4, faDiceFour],
      [5, faDiceFive],
      [6, faDiceSix],
    ]),
    val: 6,
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const {numberWords, locked, val, disabled, rolling} = this.props;
    let classes = "Die ";
    if (locked) classes += "Die-locked";
    if (rolling) classes += "Die-rolling";
    return (
      <FontAwesomeIcon
        icon={numberWords.get(val)}
        className={classes}
        size={"5x"}
        disabled={disabled}
        onClick={this.handleClick}
      />
    );
  }
}

export default Die;
