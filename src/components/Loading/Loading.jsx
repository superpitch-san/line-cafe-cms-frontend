import React, { Component } from 'react';

import commonConstant from '../../common/commonConstant';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={commonConstant.loadingImage} alt="loading" />
      </div>
    );
  }
}
