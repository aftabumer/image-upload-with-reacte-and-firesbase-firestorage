import React, { Component } from "react";

export default class UploadImage extends Component {
  handleOnChange = event => {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function() {
      var dataURL = reader.result;
      var output = document.getElementById("output");
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };
  render() {
    return (
      <div>
        <input
          type="file"
          accept='image/*'
          onChange={e => {
            this.handleOnChange(e);
          }}
        />
      </div>
    );
  }
}
