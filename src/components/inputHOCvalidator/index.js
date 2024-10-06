import React from "react";

export default function inputHOCvalidator(WrappedComponent) {
  return class extends React.Component {
    render() {
      const error = [];
      let returnComponent;
      

      this.props.validate.map(item => {
        if (item === "noEmpty") {
          if (this.props.placeholder.length === 0) {
            error.push("Ihre Telefonnummer");
          }
        }
        if (item === "maxLength50") {
          if (this.props.placeholder.length > 50) {
            error.push("max length > 50");
          }
        }
      });

      if (error.length > 0) {
        this.props.errorCheker(error);
        error.map(error => {
          returnComponent = (
            <WrappedComponent
              {...this.props}
              className={this.props.errorStyle}
              labelStyle={this.props.labelError}
              placeholder={error}
            />
          );
        });
      } else {
        this.props.errorCheker([]);
        returnComponent = <WrappedComponent {...this.props} />;
      }

      return <>{returnComponent}</>;
    }
  };
}
