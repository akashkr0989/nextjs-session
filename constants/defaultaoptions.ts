const defaultOptions: any = {
  autoplay: true,
  controls: true,
  muted: false,
  playbackRates: [0.5, 1, 1.5, 2],
  responsive: true,
  // fluid: true,
  fill: true,
  preload: 'auto',
  controlBar: {
    remainingTimeDisplay: { displayNegative: false },
    fullscreenToggle: true,
    pictureInPictureToggle: false,
    playToggle: true,
    volumePanel: {
      inline: false,
    },
    currentTimeDisplay: true,
    timeDivider: true,
    durationDisplay: true,
    progressControl: {
      seekBar: {
        loadProgressBar: true,
        mouseTimeDisplay: true,
        playProgressBar: true,
      },
    },
  },
  userActions: { hotkeys: true, doubleClick: true },
  disablePictureInPicture: false,
  theatreMode: false,
  plugins: {
    seekButtons: {
      backIndex: 0,
      forward: 10,
      back: 10,
    },
    httpSourceSelector8V: {
      default: '360p',
    },
  },
  reelMode: false,
  seekForwardDisplay: true,
  seekBackwardDisplay: true,
  playlist: true,
  qualitySelector: true,
  subtitle: true
};

export default defaultOptions;
