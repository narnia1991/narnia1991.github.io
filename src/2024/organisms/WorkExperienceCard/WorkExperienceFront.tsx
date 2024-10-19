import { FC } from "react";
import MainCardContent from "../../molecules/MainCardContent";
import { CardProps } from "../../App";

const WorkExperienceFront: FC<CardProps> = ({ pallette, frontHeader }) => {
  return (
    <MainCardContent
      contentImage={<div>Click +</div>}
      contentLabel={
        <div
          className="flex font-antiqua text-3xl flex-shrink"
          style={{ color: pallette.color }}
        >
          {frontHeader}
        </div>
      }
    />
  );
};

export default WorkExperienceFront;
