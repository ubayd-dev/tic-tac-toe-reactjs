import { createContext } from "react";
import useSound from "../hooks/useSound";

export const SfxContexts = createContext({});
export function SfxContextsProvider({ children }) {
  const options = {
    volume: 0.05,
    timeout: 200,
  };

  const hoverPath = "/sounds/click.mp3";
  const clickedPath = "/sounds/spacebar-click.mp3";
  const winnerPath = "/sounds/winner.mp3";
  const drawPath = "/sounds/fart.mp3";
  const completePath = "/sounds/fight.mp3";

  const hoverSfx = useSound(hoverPath, options);
  const clickedSfx = useSound(clickedPath, options);
  const winnerSfx = useSound(winnerPath, { ...options, timeout: 1000 });
  const drawSfx = useSound(drawPath, { ...options, timeout: 1000 });
  const completeSfx = useSound(completePath, options);

  return (
    <SfxContexts.Provider
      value={{ hoverSfx, clickedSfx, winnerSfx, completeSfx, drawSfx }}
    >
      {children}
    </SfxContexts.Provider>
  );
}
