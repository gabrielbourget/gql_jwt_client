// -> Beyond Codebase
import { toast, Slide, ToastOptions } from "react-toastify";
// -> Within Codebase
import { ThemeInfo } from "../Components/UI_InfoProvider/UI_InfoProvider";
import { DEFAULT_ALERT_HANG_TIME } from "../constants";

// - TODO: -> Figure out how to include custom transition animations, default slide animation isn't quite right.
export const useCustomAlert = (
  message: string, themeInfo: ThemeInfo, configOptions?: ToastOptions
) => {
  const defaultConfig = {
    position: "bottom-left",
    hideProgressBar: true,
    pauseOnHover: true,
    autoClose: DEFAULT_ALERT_HANG_TIME,
    transition: Slide,
    style: {
      minHeight: 75,
      height: "auto",
      width: 300,
      margin: 0,
      borderRadius: themeInfo.borderRadii.one,
      backgroundColor: themeInfo.palette.white,
      color: themeInfo.palette.primary,
      boxShadow: themeInfo.shadows.one,
      fontFamily: themeInfo.fonts.primary,
      fontSize: "1.3rem",
    }
  }

  return toast(message, Object.assign(defaultConfig, configOptions));
}
