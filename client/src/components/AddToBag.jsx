import React from 'react';

class AddToBag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: 0,
            totalPrice: 0
        }
    }
    componentDidMount() {

    }

    
    render() {
        return (
            <div className="purchase-method__buttons">
                <button className="add-to-bag" onClick={this.addToBag} type="button">Add to Bag</button>
                <div className="free-shipping-and-free-returns">
                    <p className="lll-text-body-1">Free Shipping and Free Returns</p>
                </div>
            </div>
        )
    }
}

export default AddToBag;