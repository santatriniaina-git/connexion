import React, { Component} from "react";
import {SvgPasswordNoView,SvgPasswordView,} from "../../routes/IconeSvg";

class Input extends Component {

    render = () => {
        return (
          <form className="box-shadowd bg-white rounded px-8 pt-6 pb-8">
              <label htmlFor="email" className="text-gray-700 text-sm font-serif mb-5">
              {this.props.label}
              </label>
              <input
              type={this.props.type}
              onClick={this.props.toggleInputPasswordType}
              placeholder={this.props.text}
              name={this.props.name}
              value={this.props.value}
              className={this.props.className}
              /> 
              {
                this.props.type === "password" ? (
                  <img
                    alt="loupe"
                    onClick={this.props.clickEye}
                    className="absolute right-0 px-2 py-2 place-items-center"
                    src={this.props.src ? SvgPasswordView() : SvgPasswordNoView()}
                  />
                ):( 
                  ""
                )
              }

            </form>
        );
    };
}
export default Input;
