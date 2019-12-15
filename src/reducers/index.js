import { combineReducers } from 'redux';
import { getPosts } from './Sample';
import { getProducts, createProducts } from './Products';
import { getOrders, serveOrders } from './Orders';

export default combineReducers({
  // sample
  getPosts,
  // products
  getProducts,
  createProducts,
  // orders
  getOrders,
  serveOrders,
});
