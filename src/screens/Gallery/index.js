import React from 'react';
import {connect} from 'react-redux';
import {fetchImagesGet} from '../../redux/gallery/actions';

import Gallery from './Gallery';

function mapStateToProps(state) {
  return {
    data: state.gallery.data,
    isLoading: state.gallery.isLoading,
  };
}

const mapDispatchToProps = {
  fetchImagesGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
