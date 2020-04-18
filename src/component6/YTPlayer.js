import React from 'react';
import YouTube from 'react-youtube';
import './styles.css';

function YTPlayer() {
  const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };

  const readyHandler = (e) => {
    e.target.pauseVideo()
  }


  return (
    <div className="video">
      <YouTube videoId="0dcbw4IEY5w" opts={opts} onReady={readyHandler} />
    </div>
  )
}

export default YTPlayer;


// export default class YTPlayer extends React.Component {
//   render() {
//     const opts = {
//       height: '390',
//       width: '640',
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };

//     return <YouTube videoId="0dcbw4IEY5w" opts={opts} onReady={this._onReady} />;
//   }

//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// }
