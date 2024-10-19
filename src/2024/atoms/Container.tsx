import { CSSProperties, FC, ReactNode } from "react";

const Container: FC<{
  customStyles?: CSSProperties;
  children: ReactNode;
}> = ({ customStyles, children }) => {
  let fullWidth = window.innerWidth < 1280;

  return (
    <div
      className={`flex flex-col justify-center shrink rounded-lg min-h-50 p-4`}
      style={{ ...customStyles, width: fullWidth ? "100%" : 320 }}
    >
      {children}
    </div>
  );
};

export default Container;
