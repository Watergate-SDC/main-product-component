import React from 'react';
import Axios from 'axios';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import CartInfo from './CartInfo';
import "bootstrap/dist/css/bootstrap.min.css";

class AddToBag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: 0,
            subtotal: 0,
            showModal: false
        }
        this.handleModal = this.handleModal.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart() {
        if (this.props.currentColor && this.props.currentSize) {
            Axios
                .post('/products/cart', { price: this.props.product.price })
                .then(() => {
                    Axios
                        .get('/products/cart')
                        .then((cartInfo) => {
                            this.setState({
                                totalItems: cartInfo.data.totalItems,
                                subtotal: cartInfo.data.subtotal
                            })
                            console.log(cartInfo)
                            console.log(this.state.totalItems, this.state.subtotal)
                        })
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        }
    }

    handleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <div className="purchase-method__buttons">
                <ButtonToolbar>
                <Button variant="primary" id="add-to-bag" onClick={() => {this.addToCart(); this.handleModal()}} >Add to Bag</Button>
                <CartInfo firstcolor={this.props.firstcolor} currentcolor={this.props.currentColor} currentsize={this.props.currentSize} product={this.props.product} show={this.state.showModal} onHide={this.handleModal} totalItems={this.state.totalItems} subtotal={this.state.subtotal}/> 
                </ButtonToolbar>
                <div className="free-shipping-and-free-returns">
                    <p className="lll-text-body-1">Free Shipping and Free Returns</p>
                </div>
            </div>
        )
    }
}

export default AddToBag;
