import { CSSProperties, FC, ReactNode } from "react";

const CircularButton: FC<{
  customStyles?: CSSProperties;
  onClick?: VoidFunction;
  children: ReactNode;
}> = ({ customStyles, onClick, children }) => {
  return (
    <button
      className="rounded-full transition ease-out duration-150 hover:scale-125 hover:ease-in"
      style={{ ...customStyles }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CircularButton;
