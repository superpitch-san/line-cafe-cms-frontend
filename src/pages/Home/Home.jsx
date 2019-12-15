import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FileBase64 from 'react-file-base64';

import './Home.scss';

import {
  fetchGetProducts,
  fetchGetOrders,
  fetchServeOrders,
  fetchCreateProducts,
  clearCreateProducts,
  clearServeOrders,
  deleteProducts,
  clearDeleteProducts,
} from '../../actions';

import { messaging } from '../../init-fcm';

import commonConstant from '../../common/commonConstant';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'addRemove': false,
      'addProducts': false,
      'productTitle': '',
      'productPrice': 0,
      'productImage': null,
      'duplicateProduct': false,
      'createSuccess': false,
    };
    props.dispatch(fetchGetProducts());
    props.dispatch(fetchGetOrders());
  }

  componentDidMount() {
    messaging.requestPermission()
      .then(async () => {
        const token = await messaging.getToken();
      })
      .catch((err) => {
        console.error('Unable to get permission to notify.', err);
      });
    navigator.serviceWorker.addEventListener('message', (message) => {
      if (message) {
        this.props.dispatch(fetchGetOrders());
      }
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { createProducts, serveOrders, getProducts } = nextProps;
    if (createProducts && createProducts.createProduct === 'success') {
      this.props.dispatch(clearCreateProducts());
      this.props.dispatch(fetchGetProducts());
      this.setState({ 'createSuccess': true });
    } else if (createProducts && createProducts.createProduct === 'duplicate') {
      this.setState({ 'duplicateProduct': true });
    }
    if (serveOrders && serveOrders.orderStatus === 'served') {
      this.props.dispatch(clearServeOrders());
      this.props.dispatch(fetchGetOrders());
    }
    if (getProducts && getProducts.deleteProductStatus === 'success') {
      this.props.dispatch(clearDeleteProducts());
      this.props.dispatch(fetchGetProducts());
    }
  }

  handleAddRemoveProducts = addRemove => {
    this.setState({ addRemove, 'addProducts': false });
  };

  handleAddProductsBox = addProducts => {
    this.setState({ addProducts, 'productTitle': '', 'productPrice': 0, 'productImage': null, 'createSuccess': false });
  }

  handleServeToCustomer = (lineId, orderId, productName) => {
    if (lineId && orderId && productName) {
      this.props.dispatch(fetchServeOrders(lineId, orderId, productName));
    }
  }

  handleProductTitleChange = (e) => this.setState({ 'productTitle': e.target.value });

  handleProductPriceChange = (e) => this.setState({ 'productPrice': e.target.value });

  handleGetProductImage = productImage => this.setState({ productImage });

  handleCreateProduct = (productName, productPrice, productImage) => {
    if (productName && productPrice && productImage) {
      this.props.dispatch(fetchCreateProducts(productName, productPrice, productImage));
      return this.setState({ 'duplicateProduct': false, 'createSuccess': false });
    }
  }

  handleDeleteProduct = productId => {
    if (productId) {
      this.props.dispatch(deleteProducts(productId));
    }
  }

  render() {
    const { addRemove, addProducts, productTitle, productPrice, productImage, duplicateProduct, createSuccess } = this.state;
    const { getProducts, getOrders } = this.props;

    return (
      <div className="Home">
        <div className="container">
          <div className="col-lg-4 btn-add-remove-align">
            <button
              className="btn btn-color-brown add-remove-box"
              onClick={() => this.handleAddRemoveProducts(!addRemove)}
            >
              Add/Remove Products
            </button>
          </div>
        </div>
        <div className="container">
          {
            addRemove ?
              <div className="home-box">
                <h4 className="home-header">Add/Remove Products</h4>
                <div className="card-group scrolling-wrapper-flexbox">
                  {
                    getProducts && getProducts.length > 0 ?
                      getProducts.map(item => 
                        <div className="card" key={Math.random()} >
                          <img
                            className="close-btn"
                            src={commonConstant.closeImage}
                            onClick={() => this.handleDeleteProduct(item.product_id)}
                            alt="close"
                          />
                          <img className="card-img-top card-images" src={item.product_image} alt="card" />
                          <div className="card-body">
                            <h5 className="card-title">{item.product_name}</h5>
                            <div className="card-title">Price {item.product_price} Baht</div>
                          </div>
                        </div>
                      )
                      : <div className="no-data-message">Nothing product</div>
                  }
                </div>
                <div className="edit-box">
                  <div className="row edit-sub-box">
                    {
                      addProducts ?
                        <div className="col-lg-6 add-product-box">
                          <h5>Product create box</h5>
                          <div className="form-group">
                            <label>Image</label>
                            <div className="warning-message">* please choose image file not over 50kb</div>
                            <FileBase64
                              multiple={false}
                              onDone={this.handleGetProductImage}
                            />
                          </div>
                          <div className="form-group">
                            <label>Name</label>
                            {
                              duplicateProduct ?
                                <div className="warning-message">* product name is duplicate</div>
                                : null
                            }
                            <input
                              type="text"
                              className="form-control"
                              value={productTitle}
                              onChange={this.handleProductTitleChange}
                              placeholder="Product Title"
                            />
                          </div>
                          <div className="form-group">
                            <label>Price</label>
                            <input
                              type="number"
                              className="form-control"
                              value={productPrice}
                              onChange={this.handleProductPriceChange}
                              placeholder="Product Price"
                            />
                          </div>
                          <button 
                            type="submit" 
                            className="btn btn-color-brown"
                            onClick={() => this.handleCreateProduct(
                              productTitle,
                              productPrice,
                              productImage && productImage.base64 ? productImage.base64 : null
                            )}
                          >
                              Submit
                          </button>
                          {
                            createSuccess ?
                              <div className="success-message">* product created success</div>
                              : null
                          }
                        </div>
                        : null
                    }
                    <div className="col-lg-6">
                      {
                        productImage && productImage.base64 ?
                          <>
                            <h4>Preview Image</h4>
                            <img className="img-preview" src={productImage.base64} alt="example" />
                          </>
                          : null
                      }
                    </div>
                  </div>
                  <button
                    className="btn btn-color-brown"
                    onClick={() => this.handleAddProductsBox(!addProducts)}
                  >
                    {addProducts ? 'Cancel' : 'Add Product'}
                  </button>
                </div>
              </div>
              : <div className="home-box">
                {/* PRODUCT CONTAINER */}
                <h4 className="home-header">Line Cafe Products</h4>
                <div className="card-group scrolling-wrapper-flexbox">
                  {
                    getProducts && getProducts.length > 0 ?
                      getProducts.map(item => 
                        <div className="card" key={Math.random()} >
                          <img className="card-img-top card-images" src={item.product_image} alt="card" />
                          <div className="card-body">
                            <h5 className="card-title">{item.product_name}</h5>
                            <div className="card-title">Price {item.product_price} Baht</div>
                          </div>
                        </div>
                      )
                      : <div className="no-data-message">Nothing product</div>
                  }
                </div>
              </div>
          }
        </div>
        <div className="container">
          <div className="home-box">
            <h4 className="home-header">Customer Orders</h4>
            <div className="card-group scrolling-wrapper-flexbox">
              {
                getOrders && getOrders.length > 0 ?
                  getOrders.map(item =>
                    <div className="card" key={Math.random()}>
                      <img className="card-img-top card-images" src={item.product_image} alt="card" />
                      <div className="card-body">
                        <h5 className="card-title">{item.product_name}</h5>
                        <div className="card-title">Price {item.product_price} Baht</div> 
                        <div className="card-title card-username">customer: {item.line_id}</div> 
                        <button 
                          className="btn btn-color-brown"
                          onClick={() => this.handleServeToCustomer(item.line_id, item.order_id, item.product_name)}
                        >
                          Serve
                        </button>
                      </div>
                    </div>
                  )
                  : <div className="no-data-message">nothing order</div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  'dispatch': PropTypes.func,
  'createProducts': PropTypes.object,
  'getOrders': PropTypes.array,
  'getProducts': PropTypes.any,
  'serveOrders': PropTypes.shape({
    'orderStatus': PropTypes.string,
  }),
};

const mapStateToProps = ({ getProducts, getOrders, createProducts, serveOrders }) => ({
  'getProducts': getProducts.data,
  'getOrders': getOrders.data,
  'createProducts': createProducts.data,
  'serveOrders': serveOrders.data,
});

export default connect(mapStateToProps)(Home);
