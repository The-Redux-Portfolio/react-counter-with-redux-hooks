/* node modules */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/* app imports */
import { soundOffIcon, soundOnIcon } from "../utils/sound-icons";
import { soundOff, soundOn } from "../../redux-store/actions/sound";
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";
import getSound from "../../redux-store/selectors/get-sound";

/**
 * @returns - the respective sound icon and an event handler that helps to send the required actions
 * to the redux store
 */
function useSoundHook() {
  const sound = useSelector(getSound);
  const reduxDispatch = useDispatch();
  const [soundIcon, setSoundIcon] =
    useState<Record<string, any>>(sound ? soundOnIcon : soundOffIcon);

  /* event handler */
  function handleOnSound() {
    if (sound) {
      reduxDispatch(soundOff());
      setSoundIcon(soundOffIcon);
    }
    else {
      reduxDispatch(soundOn());
      setSoundIcon(soundOnIcon);
    }
  }

  return {
    handleOnSound,
    soundIcon
  }
}

/* exports */
export default useSoundHook;
