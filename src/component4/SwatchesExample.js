import React, { useState } from "react";
import ColorPicker from "coloreact";
import "./styles.css";

function SwatchesExample() {
  const initialState = {
    swatches: [
      "rgb(157, 41, 177)",
      "#673AB7",
      "rgba(182, 73, 98, 1)",
      "#00BCD4",
      "LightSeaGreen",
      "rgb(76, 175, 80)",
      "rgba(8, 136, 124, .7)",
      "#CDDC39",
    ],
    selected: 5,
  };

  const [state, setState] = useState(initialState);

  // Set the selected
  const selectSwatch = (selected) => {
    setState({
      ...state,
      selected
    });
  };

  // Set the selected "box" color to the selected color
  const handleChange = (color) => {
    const swatches = [...state.swatches];
    swatches[state.selected] = color.rgbString;
    setState({
      ...state,
      swatches
    });
  };

  const selectedColor = state.selected;
  const actualColor = state.swatches[selectedColor];

  return (
    <div className="example">
      <ul className="swatches">
        {state.swatches.map((col, index) => (
          <li
            key={index}
            style={{ backgroundColor: col }}
            className={selectedColor === index ? "selected" : ""}
            onClick={() => selectSwatch(index)}
          />
        ))}
      </ul>
      <code className="swatch-value" style={{ color: actualColor }}>
        {actualColor}
      </code>
      <ColorPicker
        style={{
          position: "relative",
          height: "300px",
          width: "100%",
          paddingLeft: "1.3em",
        }}
        color={actualColor}
        onChange={handleChange}
        opacity
      />
    </div>
  );
}

export default SwatchesExample;

// class SwatchesExample extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       swatches: [
//         'rgb(157, 41, 177)',
//         '#673AB7',
//         'rgba(182, 73, 98, 1)',
//         '#00BCD4',
//         'LightSeaGreen',
//         'rgb(76, 175, 80)',
//         'rgba(8, 136, 124, .7)',
//         '#CDDC39',
//       ],
//       selected: 5,
//     }
//     this.selectSwatch = this.selectSwatch.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }

//   selectSwatch(selected) {
//     this.setState({
//       selected,
//     })
//   }

//   handleChange(color) {
//     const swatches = [...this.state.swatches]
//     swatches[this.state.selected] = color.rgbString
//     this.setState({
//       swatches,
//     })
//   }

//   render() {
//     const actualColor = this.state.swatches[this.state.selected]
//     return (
//       <div className="example">
//         <ul className="swatches">
//           {this.state.swatches.map((col, i) => (
//             <li
//               style={{ backgroundColor: col }}
//               key={i}
//               className={this.state.selected === i ? 'selected' : ''}
//               onClick={() => this.selectSwatch(i)}
//             />
//           ))}
//         </ul>
//         <code className="swatch-value" style={{ color: actualColor }}>
//           {actualColor}
//         </code>
//         <ColorPicker
//           style={{
//             position: 'relative',
//             height: '300px',
//             width: '100%',
//             paddingLeft: '1.3em',
//           }}
//           color={this.state.swatches[this.state.selected]}
//           onChange={this.handleChange}
//           opacity
//         />
//       </div>
//     );
//   }
// }

// export default SwatchesExample
