import React, { Component } from 'react';
import MiniPalette from '../components/MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>Palette colors home</h1>
        {palettes.map((palette) => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
