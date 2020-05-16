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
    };
    this.getOneProduct = this.getOneProduct.bind(this);
    this.handleNewColor = this.handleNewColor.bind(this);
    this.deleteCartUponRefresh = this.deleteCartUponRefresh.bind(this);
  }

  componentDidMount() {
    this.getOneProduct();
    this.deleteCartUponRefresh();
  }

  deleteCartUponRefresh() {
    axios
      .delete('http://localhost:3000/cart')
      .catch(err => console.error(err));
  }


  getOneProduct() {
    axios
      .get(`http://localhost:3000/${Math.floor(Math.random() * 100) + 1}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
      .then((item) => {
        this.setState({
          product: item.data[0],
          currentColors: {
            image1: item.data[0].img1,
            image2: item.data[0].img2
          },
        });
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
      });
  }

  render() {
    return (
      <div className="wrapper container-fluid">
        <div className="row between-md pdp-components-wrapper animated fadeIn">
          <div className="col-md-6 col-lg-6 odo-carousel0images-offset ">
            <RenderImages currentColors={this.state.currentColors} />
          </div>
          <div className="col-md-6 col-lg-5 pdp-summary-offset">
            <RenderProductInfo product={this.state.product} currentColor={this.state.currentColor} handleNewColor={this.handleNewColor} firstcolor={this.state.currentColors.image1} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;