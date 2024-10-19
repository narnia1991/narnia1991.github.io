import { FC } from "react";
import ListCardContent from "../../molecules/ListCardContent";
import ListPills from "../../molecules/ListPills";
import lightTheme from "../../atoms/colors";
import { CardProps } from "../../App";

const WorkExperienceBack: FC<CardProps> = ({ pallette, backHeader }) => {
  return (
    <ListCardContent
      contentItems={
        <>
          {[
            "Game",
            "Game",
            "Game",
            "Game",
            "Game",
            "Game",
            "Game",
            "Game",
            "Game",
            "Game",
            "Game",
            "Game",
            "Game",
          ].map((item, index) => {
            return (
              <ListPills
                customStyles={{
                  backgroundColor: lightTheme[0].backgroundColor,
                }}
              >
                <div
                  style={{ color: pallette.cardTextColor }}
                >{`${item}${index}`}</div>
              </ListPills>
            );
          })}
        </>
      }
      contentHeader={
        <div
          className="font-antiqua text-2xl"
          style={{ color: pallette.color }}
        >
          {backHeader}
        </div>
      }
    />
  );
};

export default WorkExperienceBack;
