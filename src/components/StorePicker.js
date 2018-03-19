import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers.js";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    // 1. Stop the form from submitting.
    event.preventDefault();
    // 2. Get the text from the input
    const storeName = this.myInput.value.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <Fragment>
        <p>Fish!</p>
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* comment */}
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store →</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
