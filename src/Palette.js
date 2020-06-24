import React, { Component } from 'react';
import ColorBox from './ColorBox';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => {
      <ColorBox background={color} />;
    });
    return (
      <div className='Palette'>
        {/* Navbar goes here */}
        <div classname='Palette-colors'>{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}

export default Palette;
