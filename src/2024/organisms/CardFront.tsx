import { FC } from "react";
import { CardProps } from "../App";
import MainCardContent from "../molecules/MainCardContent";

const CardFront: FC<CardProps> = ({ pallette, frontHeader, FrontImage }) => {
  return (
    <MainCardContent
      contentImage={<div>{FrontImage}</div>}
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

export default CardFront;
