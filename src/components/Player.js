import YouTube from 'react-youtube';

function Player({videoId}) {
  
    const opts = {
      height: '160',
      width: '260',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters,
        autoplay: 1,
      },
    };

    function onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
  
}

export default Player