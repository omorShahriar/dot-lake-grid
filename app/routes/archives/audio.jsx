import { Player, links as playerStyles } from "~/components/AudioPlayer";

import { Container } from "~/components/Container";
export const links = () => [...playerStyles()];
const audio = () => {
  return (
    <div>
      <Container>
        <div className=" flex flex-col gap-y-10">
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
        </div>
      </Container>
    </div>
  );
};

export default audio;
