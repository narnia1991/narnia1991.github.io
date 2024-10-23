import { CSSProperties, FC, ReactNode } from "react";

const Container: FC<{
  customStyles?: CSSProperties;
  children: ReactNode;
}> = ({ customStyles, children }) => {
  return (
    <div
      className={`flex flex-col w-full m-4 md:m-0 justify-center rounded-lg p-4`}
      style={{ ...customStyles }}
    >
      {children}
    </div>
  );
};

export default Container;
