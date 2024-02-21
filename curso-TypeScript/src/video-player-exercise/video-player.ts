//Elementos do video player
interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  controls: HTMLDivElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  rwdButton: HTMLButtonElement;
  fwdButton: HTMLButtonElement;
  timerWrapper: HTMLDivElement;
  timer: HTMLDivElement;
  timerBar: HTMLDivElement;
}

//Ações do Video Player
interface VideoPlayerProtocol {
  playMedia(): void;
  stop(): void;
  initEvents(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private controls: HTMLDivElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private rwdButton: HTMLButtonElement;
  private fwdButton: HTMLButtonElement;
  private timerWrapper: HTMLDivElement;
  private timer: HTMLDivElement;
  private timerBar: HTMLDivElement;
  private intervalFwd: NodeJS.Timeout | undefined;
  private intervalRwd: NodeJS.Timeout | undefined;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.controls = videoPlayerElements.controls;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
    this.rwdButton = videoPlayerElements.rwdButton;
    this.fwdButton = videoPlayerElements.fwdButton;
    this.timerWrapper = videoPlayerElements.timerWrapper;
    this.timer = videoPlayerElements.timer;
    this.timerBar = videoPlayerElements.timerBar;
  }

  initCustomControls(): void {
    this.videoPlayer.removeAttribute('controls');
    this.controls.style.visibility = 'visible';
  }

  initEvents(): void {
    this.playButton.addEventListener('click', () => {
      this.playMedia();
      this.removeFwdRwdActive();
    });

    this.stopButton.addEventListener('click', () => {
      this.stop();
      this.removeFwdRwdActive();
    });

    this.videoPlayer.addEventListener('ended', () => {
      this.stop();
    });

    this.rwdButton.addEventListener('click', () => {
      this.mediaBackward();
    });

    this.fwdButton.addEventListener('click', () => {
      this.mediaForward();
    });

    this.videoPlayer.addEventListener('timeupdate', () => {
      this.setTime();
    });
  }

  playMedia(): void {
    if (this.videoPlayer.paused) {
      this.playButton.setAttribute('data-icon', 'u');
      this.videoPlayer.play();
    } else {
      this.playButton.setAttribute('data-icon', 'P');
      this.videoPlayer.pause();
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.setAttribute('data-icon', 'P');
  }

  private mediaBackward(): void {
    clearInterval(this.intervalFwd);
    this.fwdButton.classList.remove('active');

    if (this.rwdButton.classList.contains('active')) {
      this.rwdButton.classList.remove('active');
      clearInterval(this.intervalRwd);
      this.videoPlayer.play();
    } else {
      this.rwdButton.classList.add('active');
      this.videoPlayer.pause();
      this.intervalRwd = setInterval(() => this.windBackward(), 200);
    }
  }

  private mediaForward(): void {
    clearInterval(this.intervalRwd);
    this.rwdButton.classList.remove('active');

    if (this.fwdButton.classList.contains('active')) {
      this.fwdButton.classList.remove('active');
      clearInterval(this.intervalFwd);
      this.videoPlayer.play();
    } else {
      this.fwdButton.classList.add('active');
      this.videoPlayer.pause();
      this.intervalFwd = setInterval(() => this.windForward(), 200);
    }
  }

  private windBackward(): void {
    if (this.videoPlayer.currentTime <= 3) {
      this.rwdButton.classList.remove('active');
      clearInterval(this.intervalRwd);
      this.stop();
    } else {
      this.videoPlayer.currentTime -= 3;
    }
  }

  private windForward(): void {
    if (this.videoPlayer.currentTime >= this.videoPlayer.duration - 3) {
      this.fwdButton.classList.remove('active');
      clearInterval(this.intervalFwd);
      this.stop();
    } else {
      this.videoPlayer.currentTime += 3;
    }
  }

  private removeFwdRwdActive(): void {
    this.fwdButton.classList.remove('active');
    this.rwdButton.classList.remove('active');
    clearInterval(this.intervalRwd);
    clearInterval(this.intervalFwd);
  }

  private setTime(): void {
    const minutes = Math.floor(this.videoPlayer.currentTime / 60);
    const seconds = Math.floor(this.videoPlayer.currentTime - minutes * 60);

    const minuteValue = minutes.toString().padStart(2, '0');
    const secondValue = seconds.toString().padStart(2, '0');

    const playerTime = `${minuteValue}:${secondValue}`;
    this.timer.textContent = playerTime;

    const barLength =
      this.timerWrapper.clientWidth *
      (this.videoPlayer.currentTime / this.videoPlayer.duration);
    this.timerBar.style.width = `${barLength}px`;
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  controls: document.querySelector('.controls') as HTMLDivElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
  rwdButton: document.querySelector('.rwd') as HTMLButtonElement,
  fwdButton: document.querySelector('.fwd') as HTMLButtonElement,
  timerWrapper: document.querySelector('.timer') as HTMLDivElement,
  timer: document.querySelector('.timer span') as HTMLDivElement,
  timerBar: document.querySelector('.timer div') as HTMLDivElement,
});

videoPlayer.initCustomControls();
videoPlayer.initEvents();
