import { FC, ReactNode } from "react";

const CardHeader: FC<{ leftActions?: ReactNode; rightActions?: ReactNode }> = ({
  leftActions = <div></div>,
  rightActions,
}) => {
  return (
    <div className="flex justify-between h-8 w-full p-1">
      <div className="flex justify-start">{leftActions}</div>
      <div className="flex justify-end">{rightActions}</div>
    </div>
  );
};

export default CardHeader;
