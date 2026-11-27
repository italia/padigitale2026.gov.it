import type * as BootstrapItalia from "bootstrap-italia";

interface BootstrapVideoPlayer {
  setYouTubeVideo: (url: string) => void;
}

interface BootstrapBundle
  extends Pick<typeof BootstrapItalia, "Collapse" | "Popover" | "Tooltip"> {
  VideoPlayer: {
    getOrCreateInstance: (element: HTMLVideoElement) => BootstrapVideoPlayer;
  };
}

declare global {
  interface Window {
    bootstrap?: BootstrapBundle;
  }
}
