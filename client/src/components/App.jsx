import React from 'react';
import axios from 'axios';
import RenderImages from './RenderImages';
import RenderProductInfo from './RenderProductInfo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            colorPicked: '',
            currentColors: {
                image1: '',
                image2: '',
            },
        }
        this.getOneProduct = this.getOneProduct.bind(this);
        this.handleNewColor = this.handleNewColor.bind(this);
    }

    componentDidMount() {
        this.getOneProduct();
    }
   
    getOneProduct() {
        axios
            .get(`/products/${Math.floor(Math.random() * 100)}`)
            .then((item) => {
                this.setState({
                    product: item.data[0],
                    currentColors: {
                        image1: item.data[0].img1,
                        image2: item.data[0].img2
                    },
                })
            })
            .catch(err => console.error(err));
    }
    
    handleNewColor(color) {
        color === this.state.product.color1 ?
            this.setState({
                colorPicked: color,
                currentColors: {
                    image1: this.state.product.img1,
                    image2: this.state.product.img2
                }
            }) : 
            this.setState({
                colorPicked: color,
                currentColors: {
                    image1: this.state.product.img3,
                    image2: this.state.product.img4
                }
            })
    }

    render() {
        return (
            <div className="pdp">
                <section className="pdp-wrapper-container">
            <div className="main-content-container">
                <div className="pdp-components-wrapper">
                <div className="carousel-images-box-1">
                    <RenderImages currentColors={this.state.currentColors}/>
                </div>
                <div className="product-information-box-2">
                    <RenderProductInfo product={this.state.product} currentColor={this.state.currentColor} handleNewColor={this.handleNewColor}/>
                </div>
                </div>
            </div>
            </section>
            </div>
        )
    }
}

export default App;