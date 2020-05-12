import React from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartInfo = (props) => {
  return (
    <div className='modal-inner-wrapper'>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='modal-inner'
      >
        <Modal.Header closeButton >
          <Modal.Title id='contained-modal-title-vcenter'>
            <h2 className='addedtoyourbag'>Added To Your Bag</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modal-product-container'>
            <div className='modal-product-info-container' >
              <div className='modal-product-info-box'>
                <div className='modal-product-image'>
                  <span className='lazy-image-container'>
                    <img className='product-container--image' src={props.firstcolor}></img>
                  </span>
                </div>
                <div className='modal-product'>
                  <h3 className='modal-product-title'>
                    {props.product.name}
                  </h3>
                  <div className='modal-product-info'>
                    <p className='modal-product-info-color'>{props.currentcolor}</p>
                    <p className='modal-product-info-size'>Size {props.currentsize}</p>
                    <p className='modal-product-info-price'>${props.product.price}.00 USD</p>
                    <div className='modal-product-info-product-flag'>Free Shipping + Free Returns</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-product-line-separation'>
              <hr />
            </div>
            <div className='modal-bag-details'>
              <div className='modal-bag'>
                <p className='modal-bag-info'>Bag
                  <span className='modal-bag-info-normal'>({props.totalitems} Items)</span>
                </p>
                <p className='modal-bag-price'>
                  <span className='modal-bag-subtotal'>Subtotal</span>
                  <span className='modal-bag-subtotal-value'>${props.subtotal}.00 USD</span>
                </p>
              </div>
              <div className='modal-view-bag-container'>
                <button className='modal-view-bag-button'>View Bag</button>
              </div>
              <div className='modal-checkout-container'>
                <button className='modal-checkout-button'>
                  <svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg' focusable='false'><path d='m10-1.5c6.348 0 11.5 5.152 11.5 11.5s-5.152 11.5-11.5 11.5-11.5-5.152-11.5-11.5 5.152-11.5 11.5-11.5zm.2395833 3.06666667h-.47916663c-1.53333334 0-2.77916667.17777777-3.78541667.48888889-.95833333.31111111-1.67708333.71111111-2.15625 1.28888888-1.00625 1.2-.76666667 2.75555556-.47916667 3.82222223.23958334 1.02222222.81458334 1.95555555 1.38958334 2.93333333 1.34166666 2.2222222 1.96458333 3.6444444.04791666 4.8444444-.33541666.2222223-.71875.3111112-1.10208333.3111112-.76666667 0-1.62916667-.3555556-2.10833333-.5777778l.09583333.1777778c.95833333 1.3333333 2.20416667 2.0444444 3.54583333 2.0444444.62291667 0 1.24583334-.1333333 1.86875-.4.67083334-.2666667 1.29375-.8 1.67708334-1.4666667.43125-.6666666.575-1.3777777.43125-2-.14375-.5777777-.47916667-1.3333333-.81458334-2.1777777-.95833333-2.31111116-2.25208333-5.42222227-1.15-6.93333338.47916667-.66666666 1.34166667-.97777778 2.63541667-.97777778s2.15625.31111112 2.6354167.97777778c1.15 1.51111111-.1916667 4.66666667-1.15 6.93333338-.3833334.8888888-.6708334 1.6444444-.8145834 2.1777777-.0958333.6222223.0479167 1.3333334.43125 2 .43125.6666667 1.00625 1.1555556 1.6770834 1.4666667.6708333.2666667 1.29375.4 1.86875.4 1.3895833 0 2.5875-.7111111 3.5458333-2.0444444l.3833333-.1777778c-.4791666.2222222-1.3416666.5777778-2.1083333.5777778-.3833333 0-.71875-.0888889-1.1020833-.3111112-1.9166667-1.2-1.29375-2.6222222.0479166-4.8444444.575-.93333333 1.15-1.91111111 1.3895834-2.93333333.2875-1.06666667.5270833-2.66666667-.4791667-3.82222223-.4791667-.57777777-1.1979167-.97777777-2.15625-1.28888888-1.00625-.31111112-2.2520833-.44444445-3.7854167-.48888889z' fill='currentColor' transform='translate(2 2)'></path>
                  </svg>
                  <span className='checkout-modal'>Checkout</span>
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CartInfo;