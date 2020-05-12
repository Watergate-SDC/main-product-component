import React from 'react';
import AddToBag from './AddToBag';

class RenderProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: this.props.product.color1, // color name chosen
      color1: true, // changes if diff color is chosen
      color2: false,
      currentSize: ''
    };
    this.handleNewColorInfo = this.handleNewColorInfo.bind(this);
    this.handleSizeClick = this.handleSizeClick.bind(this);
  }

  renderSizes() {
    if (this.props.product.sex === 'Womens') {
      return (
        <div className='pdp-size-selector-button-tile-group' role='radiogroup'>
          <div className='buttonTileGroupWrapper'>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick(0)} className={`${this.state.currentSize === 0 ? 'is-active' : 'not-active'} sizeTile`}>0</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick(2)} className={`${this.state.currentSize === 2 ? 'is-active' : 'not-active'} sizeTile`}>2</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick(4)} className={`${this.state.currentSize === 4 ? 'is-active' : 'not-active'} sizeTile`}>4</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick(6)} className={`${this.state.currentSize === 6 ? 'is-active' : 'not-active'} sizeTile`}>6</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick(8)} className={`${this.state.currentSize === 8 ? 'is-active' : 'not-active'} sizeTile`}>8</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick(10)} className={`${this.state.currentSize === 10 ? 'is-active' : 'not-active'} sizeTile`}>10</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick(12)} className={`${this.state.currentSize === 12 ? 'is-active' : 'not-active'} sizeTile`}>12</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='pdp-size-selector-button-tile-group' role='radiogroup'>
          <div className='buttonTileGroupWrapper'>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick('XS')} className={`${this.state.currentSize === 'XS' ? 'is-active' : 'not-active'} sizeTile`}>XS</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick('S')} className={`${this.state.currentSize === 'S' ? 'is-active' : 'not-active'} sizeTile`}>S</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick('M')} className={`${this.state.currentSize === 'M' ? 'is-active' : 'not-active'} sizeTile`}>M</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick('L')} className={`${this.state.currentSize === 'L' ? 'is-active' : 'not-active'} sizeTile`}>L</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick('XL')} className={`${this.state.currentSize === 'XL' ? 'is-active' : 'not-active'} sizeTile`}>XL</span>
            </div>
            <div role='radio' className='buttonTile size-selector__button-tile'>
              <span onClick={() => this.handleSizeClick('XXL')} className={`${this.state.currentSize === 'XXL' ? 'is-active' : 'not-active'} sizeTile`}>XXL</span>
            </div>
          </div>
        </div>
      )
    }
  }

  handleSizeClick(size) {
    if (size !== this.state.currentSize) {
      this.setState({
        currentSize: size
      })
    } else {
      return;
    }
  }

  handleNewColorInfo(color) {
    if (color === this.state.currentColor) {
      this.setState({
        currentColor: color
      })
    }
    if (color !== this.state.currentColor) {
      this.setState({
        currentColor: color,
        color1: !this.state.color1,
        color2: !this.state.color2
      });
      // add another function that checks if toggle is true or false, then render border
      this.props.handleNewColor(color)
    }
  }

  render() {
    return (
      <div className='pdp-summary-offset'>
        <div className='pdp-summary-wrapper'>
          <ul className='pdp-breadcrumbs'>
            <li className='pdp-breadcrumb'>
              <span className='pdp-breadcrumb--item-info'>{this.props.product.sex} Clothes</span>
            </li>
            <li className='pdp-breadcrumb'>
              <span className='pdp-breadcrumb--item-info'>{this.props.product.type}</span>
            </li>
          </ul>
          <div className='product-description'>
            <div className='pdp-product-description-wrapper'>
              <div className='col-xs-12'>
                <h1 className='pdp-title'>
                  <div>{this.props.product.name}</div>
                  <div>
                    <span className='pill-new-box pillSecondary'>New</span>
                  </div>
                </h1>
              </div>
            </div>
            <div>
              <span className='pdp-product-price'>${this.props.product.price}.00
                <abbr className='currency-code'>
                  {/* '&nbsp;' */}
                                USD
                </abbr>
              </span>
            </div>
          </div>
          <div className='purchase-attributes'>
            <div className='purchase-attributes__selections'>
              <div className='purchase-attributes__select-color'>
                <div className='purchase-attributes__color-details'>
                  <p className='purchase-attributes__color-details__name'>{this.state.currentColor === undefined ? this.props.product.color1 : this.state.currentColor}</p>
                </div>
                <div className='purchase-attributes__color-selector'>
                  <div className='select-swatches'>
                    <div className='swatches-container'>
                      <div className='swatch available colorSwatch' tabIndex='0' aria-checked='true' aria-label={this.props.product.color1}>
                        <span onClick={() => this.handleNewColorInfo(this.props.product.color1)} className={`${this.state.color1 ? 'is-active' : 'not-active'} colorSwatch`}>
                          <picture>
                            <img alt={this.props.product.color1} className='colorSwatchImage' sizes='34px' src={this.props.product.colorId1} title={this.props.product.color1}></img>
                          </picture>
                        </span>
                      </div>
                      <div className='swatch'>
                        <span onClick={() => this.handleNewColorInfo(this.props.product.color2) } className={`${this.state.color2 ? 'is-active' : 'not-active'} colorSwatch`}>
                          <picture>
                            <img alt={this.props.product.color2} className='colorSwatchImage' sizes='34px' src={this.props.product.colorId2} title={this.props.product.color2}></img>
                          </picture>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='purchase-attributes__notification'>
                <div role='alert'></div>
              </div>
              <div className='purchase-attributes__select-size'>
                <div className='size-selector'>
                  <div className='purchase-attribute-carousel-counter'>
                    <div className='purchase-attribute-carousel-counter__heading-group'>
                      <span className='purchase-attribute-carousel-counter__label'>Select Size</span>
                    </div>
                  </div>
                  {this.renderSizes()}
                </div>
              </div>
            </div>
            <div className='purchase-attributes__size-meta'>
              <div className='purchase-attributes__model-info'>{this.props.product.sex === 'Mens' ? 'Tristan is 6\'0 and wears a size M' : 'Jessica is 5\'8 and wears a size 6'}</div>
              <a className='link purchase-attributes__size-guide-link' rel='noopener' target='_blank' href='https://info.lululemon.com/help/size-chart'>
                                Size guide
              </a>
            </div>
            {/* <div className='purchase-method__buttons'>
                            <button className='add-to-bag' onClick={this.addToBag} type='button'>Add to Bag</button>
                            <div className='free-shipping-and-free-returns'>
                                <p className='lll-text-body-1'>Free Shipping and Free Returns</p>
                            </div>
                        </div> */}
            <AddToBag firstcolor={this.props.firstcolor} currentColor={this.state.currentColor === undefined ? this.props.product.color1 : this.state.currentColor} currentSize={this.state.currentSize} product={this.props.product}/>
            <div className='customer-engagement-extensions'>
              <button type='button' className='customer-engagement-extensions__button'>
                <svg width='24px' height='24px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='icon reviews-icon' focusable='false'>
                  <title>Reviews</title>
                  <path fill='currentColor' d='M22.4,11.4c0.4-0.4,0.6-1,0.6-1.5c0-0.5-0.2-1-0.5-1.4c-0.3-0.4-0.8-0.7-1.3-0.8l-4.8-0.7c-0.2,0-0.3-0.2-0.4-0.3l-2.1-4.5 C13.5,1.4,12.7,1,12,1c-0.8,0-1.5,0.4-1.9,1.2L8,6.7C7.9,6.9,7.7,7,7.6,7.1L2.8,7.8c-0.6,0.1-1,0.4-1.3,0.8C1.2,8.9,1,9.4,1,9.9 c0,0.5,0.2,1.1,0.6,1.5l3.4,3.5c0.1,0.1,0.2,0.3,0.2,0.5v0.1l-0.8,4.9c0,0.1,0,0.2,0,0.4c0,1.2,1,2.1,2.1,2.1c0.3,0,0.7-0.1,1-0.3 l4.3-2.3l0.3-0.1l0.3,0.1l4.3,2.3c0.3,0.2,0.7,0.3,1,0.3c1.1,0,2.1-0.9,2.1-2.1c0-0.1,0-0.2,0-0.4l-0.8-4.9v0l0-0.1 c0-0.2,0.1-0.4,0.2-0.5L22.4,11.4z M17.3,15.8l0.8,4.9l0,0.1c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0-0.2,0-0.3-0.1 L13,19.1c-0.3-0.2-0.6-0.2-1-0.2c-0.3,0-0.7,0.1-1,0.2l-4.3,2.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.3-0.1-0.4-0.2 c-0.1-0.1-0.2-0.3-0.2-0.5l0-0.1v0l0.8-4.9c0-0.1,0-0.2,0-0.4c0-0.6-0.2-1.1-0.6-1.5l-3.5-3.5c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.2,0.1-0.3,0.2-0.4C2.7,9.4,2.9,9.3,3,9.3l4.8-0.7C8.5,8.4,9.1,8,9.4,7.4l2.1-4.5c0.1-0.3,0.3-0.3,0.5-0.3 c0.2,0,0.4,0.1,0.5,0.3l2.1,4.5C15,8,15.5,8.4,16.2,8.5L21,9.3c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.1,0.3,0.1,0.4 c0,0.2-0.1,0.3-0.2,0.5l-3.4,3.5c-0.4,0.4-0.6,1-0.6,1.5C17.2,15.5,17.3,15.7,17.3,15.8z'></path>
                </svg>
                <span className='lll-link-primary'>
                                    Reviews
                  <span className='reviews-link__count'>
                                        ({this.props.product.reviews})
                  </span>
                </span>
              </button>
              <button type='button' className='customer-engagement-extensions__button' tabIndex='0'>
                <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' className='icon chat-icon' focusable='false'>
                  <title>Live Chat</title>
                  <path fill='currentColor' d='M20.3900001,7.52000003 C20.0813028,7.38925488 19.7276284,7.42189268 19.4480715,7.60692315 C19.1685146,7.79195361 19.0002732,8.10475645 19.0000001,8.44000004 L19.0000001,8.75000001 C20.2426408,8.75000001 21.2500001,9.75735935 21.2500001,11 L21.2500001,20.1900001 L19.4100001,18.3500001 C18.706793,17.6474652 17.7540079,17.2519695 16.7600001,17.25 L12,17.25 C10.7573594,17.25 9.75000004,16.2426408 9.75000004,15.0000001 L9.75000004,14.75 L14.0000001,14.75 C16.0710679,14.75 17.7500001,13.0710679 17.7500001,11 L17.7500001,5.00000002 C17.7500001,2.9289322 16.0710679,1.25000001 14.0000001,1.25000001 L5.00000002,1.25000001 C2.9289322,1.25000001 1.24998291,2.9289322 1.24998291,5.00000002 L1.24998291,18.0000001 C1.24795221,18.3023827 1.43008997,18.5755893 1.71000001,18.6900001 C1.99018003,18.8108202 2.31579193,18.7472862 2.53000001,18.5300001 L5.65000002,15.4100001 C6.07278282,14.9897654 6.64390005,14.7526979 7.24000003,14.75 L8.24000003,14.75 L8.24000003,15.0000001 C8.23999649,15.9962969 8.63645706,16.9516427 9.34188278,17.6551923 C10.0473085,18.3587419 11.0037067,18.7526569 12,18.75 L16.7600001,18.75 C17.3561001,18.7526979 17.9272173,18.9897654 18.3500001,19.4100001 L21.4700001,22.5300001 C21.6842082,22.7472862 22.0098201,22.8108202 22.2900001,22.6900001 C22.5699101,22.5755894 22.7520479,22.3023827 22.7500172,22.0000001 L22.7500172,11 C22.7488254,9.46658928 21.8141804,8.088384 20.3900001,7.52000003 Z M4.59000002,14.3500001 L2.75000001,16.1900001 L2.75000001,5.00000002 C2.75000001,3.75735933 3.75735933,2.75000001 5.00000002,2.75000001 L14.0000001,2.75000001 C15.2426408,2.75000001 16.25,3.75735933 16.25,5.00000002 L16.25,11 C16.25,12.2426407 15.2426408,13.25 14.0000001,13.25 L7.24000003,13.25 C6.24599216,13.2519695 5.29320714,13.6474652 4.59000002,14.3500001 Z'></path>
                </svg>
                <span className='lll-link-primary'>Live Chat</span>
              </button>
            </div>
          </div>
          <div className='product-education-accordion-links'>
            <p className='product-education-accordion-links__details'>Details</p>
            <ul>
              <li className='designed-for'>
                <svg className='designed-for__icon'>
                  <title></title>
                  <use xlinkHref='#icon-icon_yoga'>
                                        #shadow-root (closed)
                    <svg viewBox='0 0 24 24' id='icon-icon_yoga'>
                      <path d='M14 8c1.9-.3 3-2.8 2.7-4.6-.3-1.9-2.1-3.1-4-2.8-.9.2-1.7.7-2.2 1.4s-.7 1.7-.6 2.6c.2.9.7 1.8 1.4 2.5.7.6 1.5 1 2.2 1 .2-.1.4-.1.5-.1zm1.2-4.3c.2 1.1-.5 2.7-1.4 2.9-.4.1-.9-.1-1.4-.6-.5-.4-.8-1.1-.9-1.6-.1-.5 0-1 .3-1.4.2-.5.7-.8 1.2-.9h.3c.9 0 1.7.6 1.9 1.6zM4.7 22.4s3.2-4.7 9.3-4.7h2.2v4.2c0 .4.3.8.8.8h2.7c.4 0 .7-.3.7-.6 0 0 .2-1 .2-1.4.5-3.1.2-5.7-.8-6.6-.9-.9-2.6-1.3-3.7-1.4.3-.8.5-1.8.5-2.7 0-.6.6-1.2 1.2-1.2h5c.6 0 1-.4 1-1v-.6h-6c-1.5 0-2.7 1.2-2.7 2.7 0 1.2-.4 2.3-.8 2.9-.2.2-.2.5 0 .8s.4.4.7.4c1.1 0 3.2.4 3.9 1.1.3.3.8 2.1.3 5.3 0 .2-.1.5-.1.7h-1.3V17c0-.4-.3-.8-.8-.8h-3c-6 0-9.4 3.8-10.3 5H2.4c.6-1.2 2.5-3.8 8.3-6.6.1-.1.3-.2.3-.3l.1-.1c.4-.7.9-1.7.6-3.5-.2-.8-.7-3.4-4-3.4H1v.5c0 .6.4 1 1 1h5.7c1.5 0 2.2.6 2.5 2.2.2 1.2-.1 1.9-.4 2.5C1 17.7.6 21.5.6 22c0 .2.1.4.2.6s.3.2.5.2H4c.3 0 .5-.2.7-.4z'></path>
                    </svg>
                  </use>
                </svg>
                <button tabIndex='0' className='lll-link-primary designed-for__activity-text' type='button'>Designed for {this.props.product.design}</button>
              </li>
              <li className='designed-for'>
                <svg className='designed-for__icon' >
                  <title></title>
                  <use xlinkHref='#icon-fabric_soft'>
                                        #shadow-root (closed)
                    <svg viewBox='0 0 16 16' id='icon-fabric_soft'>
                      <path d='M5.62 2.214a4.16 4.16 0 0 1 4.633 2.726c.243-.069.494-.105.747-.107a2.84 2.84 0 0 1 2.833 2.834c0 .172-.018.344-.053.513h.153c.626.09 1.182.444 1.527.973a2.12 2.12 0 0 1-.127 2.54c-1.046 1.42-3.52 2.14-7.333 2.14-3.387 0-5.54-.666-7-2.16a2.86 2.86 0 0 1-.453-3.44c.226-.406.555-.746.953-.986.226-.125.465-.223.713-.294a4.667 4.667 0 0 1-.046-.62 4.16 4.16 0 0 1 3.453-4.12zm.713.953a3.14 3.14 0 0 0-3.12 3.68c.155.012.309.034.46.066a.667.667 0 0 1 .394.994l-.12.193A1.813 1.813 0 0 0 3 7.833a1.827 1.827 0 0 0-1.28 3.14c1.247 1.287 3.187 1.86 6.28 1.86 3.433 0 5.7-.606 6.553-1.746.177-.212.275-.478.28-.754a1.173 1.173 0 0 0-1.166-1.166 1.16 1.16 0 0 0-.827.34l-.12-.12a.667.667 0 0 1-.113-.84l.08-.166A1.833 1.833 0 0 0 11 5.833c-.29 0-.576.07-.832.207a1.94 1.94 0 0 0-.44.313.667.667 0 0 1-.82.134l-.374-.214c.199-.354.472-.661.8-.9a3.16 3.16 0 0 0-3-2.206zM5.96 9c.268 0 .509.16.613.407a1.167 1.167 0 0 0 2.187 0A.667.667 0 0 1 9.373 9h.46A2.167 2.167 0 0 1 5.5 9z' fillRule='evenodd'></path>
                    </svg>
                  </use>
                </svg>
                <button className='designed-for__activity-text lll-link-primary designed-for__activity-text--link' tabIndex='0' type='button'>{this.props.product.fabric}</button>
              </li>
              <li className='designed-for'>
                <svg className='designed-for__icon'>
                  <title></title>
                  <use xlinkHref='#icon-icon_size_default'>
                                        #shadow-root (closed)
                    <svg viewBox='0 0 16 16' id='icon-icon_size_default'>
                      <path d='M15.447 7.6l-2.06-4.807a.667.667 0 0 1 .38-.96l-.06-.12a.7.7 0 0 0-1.22 0 1.52 1.52 0 0 0 0 1.467l.366.847c.547 1.28-1.18 3.646-4.626 5.126-3.447 1.48-6.367 1.107-6.894-.173-.526-1.28 1.154-3.647 4.6-5.127A8.493 8.493 0 0 1 9.147 3.1c.78 0 1.333.207 1.466.533.134.327-.06.86-.613 1.427a8.433 8.433 0 0 1-2.787 1.833 4.593 4.593 0 0 1-1.726.44c-.434 0-.62-.113-.667-.173-.047-.06 0-.267.32-.58.436-.44.955-.79 1.527-1.027l-.4-.886a5.52 5.52 0 0 0-1.854 1.2c-.733.78-.666 1.373-.513 1.66.153.286.493.773 1.56.78a5.647 5.647 0 0 0 2.147-.494 9.533 9.533 0 0 0 3.113-2.066c.84-.9 1.133-1.787.82-2.514-.313-.726-1.153-1.12-2.38-1.133a9.233 9.233 0 0 0-3.62.833C1.793 4.547-.467 7.373.387 9.373c.033.067 1.7 3.96 1.7 3.96.493 1.14 1.873 1.727 3.666 1.727a11.793 11.793 0 0 0 4.547-1.027 11.46 11.46 0 0 0 4.193-2.933c1.054-1.247 1.394-2.487.954-3.5zM14 10.113l-.287-.613a.667.667 0 0 0-.873-.36l-.307.127.734 1.68a9.6 9.6 0 0 1-1.614 1.26l-.613-1.494a.667.667 0 0 0-.873-.36l-.307.127.92 2.22c-.28.147-.567.287-.867.413-.3.127-.666.267-.993.38l-.5-1.166A.667.667 0 0 0 7.54 12l-.307.133.714 1.674a9.333 9.333 0 0 1-2.06.286l-.727-1.726A.667.667 0 0 0 4.28 12l-.307.133L4.76 14a2.187 2.187 0 0 1-1.753-1.047l-.914-2.133a6 6 0 0 0 1.96.3A11.76 11.76 0 0 0 8.6 10.087c2.487-1.067 4.313-2.667 5.013-4.22L14.527 8c.246.553.046 1.333-.527 2.113z' fillRule='evenodd'></path>
                    </svg>
                  </use>
                </svg>
                <span className='designed-for__activity-text lll-link-primary'>{this.props.product.fit}</span>
              </li>
              <li className='designed-for'>
                <svg className='designed-for__icon'>
                  <title></title>
                  <use xlinkHref='#icon-feature_pockets'>
                                        #shadow-root (closed)
                    <svg viewBox='0 0 16 16' id='icon-feature_pockets'>
                      <path d='M14.193 1.54a.493.493 0 0 0-.546.107c-.591.588-1.226 1.13-1.9 1.62l-.3-1.08A2.5 2.5 0 0 0 8.52.307l-3.927.713a2.467 2.467 0 0 0-1.626 1.053 2.253 2.253 0 0 0-.3 1.747l.72 3.333c-.874.24-1.42.347-1.44.347a.507.507 0 0 0-.414.493v5.334A2.5 2.5 0 0 0 4 15.833h8a2.5 2.5 0 0 0 2.5-2.5V2a.493.493 0 0 0-.307-.46zM3.607 3.607a1.253 1.253 0 0 1 .186-.94c.22-.35.575-.591.98-.667L8.7 1.287c.8-.167 1.588.332 1.78 1.126l.393 1.454A26.667 26.667 0 0 1 4.32 6.873zM12 14.833H4a1.5 1.5 0 0 1-1.5-1.5V8.407c1.527-.334 6.92-1.707 11-5.26v1.28a23.027 23.027 0 0 1-10.167 4.82l.067.313a.667.667 0 0 0 .807.513A23.7 23.7 0 0 0 13.54 5.7v7.633a1.5 1.5 0 0 1-1.54 1.5z' fillRule='evenodd'></path>
                    </svg>
                  </use>
                </svg>
                <span className='designed-for__activity-text lll-link-primary'>Product Features</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RenderProductInfo;