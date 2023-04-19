import React, {Component} from "react";


class ButtonConnexion extends Component {
  render = () => {
    return(
      <button
        type={this.props.type}
        className={"" + this.props.class}
        onClick={this.props.events}
        value={this.props.value}
        name={this.props.name}
      >
        {
          this.props.signOther && 
          <div className={this.props.classLogo}>
            {this.props.logo}
          </div>
        }
        <span>
          {this.state.title}
        </span>
      </button>
    );
  }
}
export default ButtonConnexion;