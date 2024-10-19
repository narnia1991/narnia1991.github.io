import throttle from "lodash.throttle";
import lightTheme from "../atoms/colors";

export const getRandom = ({
  min = 1,
  max = 5,
  decimal = 0,
}: {
  min?: number;
  max?: number;
  decimal?: number;
}) => {
  return Number((Math.random() * (max - min) + min).toFixed(decimal));
};

export const getPallette = ({
  pallette = lightTheme,
}: {
  pallette?: Record<number, Record<string, string>>;
}) => {
  const idx = getRandom({});
  return pallette[idx];
};

export const getScreenWidth = () => {
  return throttle(() => {
    console.log(window.innerWidth);
    return window.innerWidth;
  }, 300);
};
