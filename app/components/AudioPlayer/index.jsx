import AudioPlayer from "react-h5-audio-player";
import { PlayButton, PauseButton } from "./Button";
import styles from "./styles.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const Header = () => {
  return (
    <div className="flex gap-y-5 flex-col">
      <h2 className="  text-6xl font-medium transition-all duration-300  ">
        01 / Audio Title
      </h2>
      <p className="  text-xl  ">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy.
      </p>
    </div>
  );
};

export const Player = () => {
  return (
    <>
      <AudioPlayer
        src="https://ymcbammfxvergxwancnw.supabase.co/storage/v1/object/sign/audio/Doris-Charles.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdWRpby9Eb3Jpcy1DaGFybGVzLm1wMyIsImlhdCI6MTY2MDI4Nzk2NiwiZXhwIjoxOTc1NjQ3OTY2fQ.yqqWIVcRhDepItnb8By_ClkJDB-EM905diNsvoX8LqI&t=2022-08-12T07%3A05%3A57.242Z"
        showJumpControls={false}
        showDownloadProgress={false}
        header={<Header />}
        customIcons={{ play: <PlayButton />, pause: <PauseButton /> }}
        preload="none"
        // other props here
      />
    </>
  );
};
