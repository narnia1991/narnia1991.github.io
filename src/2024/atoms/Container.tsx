import { CSSProperties, FC, ReactNode } from "react";

const Container: FC<{
  fullWidth?: boolean;
  customStyles?: CSSProperties;
  children: ReactNode;
}> = ({ customStyles, children, fullWidth }) => {
  return (
    <div
      className={`flex flex-col ${
        !!fullWidth ? "w-full" : "w-80"
      } shrink rounded-lg min-h-50 p-4 m-4`}
      style={{ ...customStyles }}
    >
      {children}
    </div>
  );
};

export default Container;
