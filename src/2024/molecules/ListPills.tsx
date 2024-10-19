import { CSSProperties, FC, ReactNode } from "react";

const ListPills: FC<{
  children: ReactNode;
  customStyles?: CSSProperties;
  onClick?: VoidFunction;
}> = ({ onClick, children, customStyles }) => {
  return (
    <button
      style={customStyles}
      onClick={onClick}
      className="flex w-full p-4 my-4 rounded-lg"
    >
      {children}
    </button>
  );
};

export default ListPills;
