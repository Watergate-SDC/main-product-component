import React from 'react';

const RenderSizes = ({sex, currentSize, handleSizeClick}) => {
  if (sex === 'Womens') {
    return (
      <div className='pdp-size-selector-button-tile-group' role='radiogroup'>
        <div className='buttonTileGroupWrapper'>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick(0)} className={`${currentSize === 0 ? 'is-active' : 'not-active'} sizeTile`}>0</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick(2)} className={`${currentSize === 2 ? 'is-active' : 'not-active'} sizeTile`}>2</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick(4)} className={`${currentSize === 4 ? 'is-active' : 'not-active'} sizeTile`}>4</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick(6)} className={`${currentSize === 6 ? 'is-active' : 'not-active'} sizeTile`}>6</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick(8)} className={`${currentSize === 8 ? 'is-active' : 'not-active'} sizeTile`}>8</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick(10)} className={`${currentSize === 10 ? 'is-active' : 'not-active'} sizeTile`}>10</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick(12)} className={`${currentSize === 12 ? 'is-active' : 'not-active'} sizeTile`}>12</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick(14)} className={`${currentSize === 14 ? 'is-active' : 'not-active'} sizeTile`}>14</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='pdp-size-selector-button-tile-group' role='radiogroup'>
        <div className='buttonTileGroupWrapper'>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick('XS')} className={`${currentSize === 'XS' ? 'is-active' : 'not-active'} sizeTile`}>XS</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick('S')} className={`${currentSize === 'S' ? 'is-active' : 'not-active'} sizeTile`}>S</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick('M')} className={`${currentSize === 'M' ? 'is-active' : 'not-active'} sizeTile`}>M</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick('L')} className={`${currentSize === 'L' ? 'is-active' : 'not-active'} sizeTile`}>L</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick('XL')} className={`${currentSize === 'XL' ? 'is-active' : 'not-active'} sizeTile`}>XL</span>
          </div>
          <div role='radio' className='buttonTile size-selector__button-tile'>
            <span onClick={() => handleSizeClick('XXL')} className={`${currentSize === 'XXL' ? 'is-active' : 'not-active'} sizeTile`}>XXL</span>
          </div>
        </div>
      </div>
    );
  }
};
export default RenderSizes;