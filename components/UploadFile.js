import React, {Component} from 'react';

class UploadFile extends Component {

  render() {
    return (
      <div className="upload-container">
        <form method="post" encType="multipart/form-data" action="http://localhost:3000/upload" >
          <input type="file" name="file" />
          <input type="submit" value="Upload" />
        </form>
      </div>
    );
  }
}

export default UploadFile;
