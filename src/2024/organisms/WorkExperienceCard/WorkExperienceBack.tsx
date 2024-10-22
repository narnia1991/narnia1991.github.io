import { FC } from "react";
import ListCardContent from "../../molecules/ListCardContent";
import ListPills from "../../molecules/ListPills";
import lightTheme from "../../atoms/colors";
import { CardProps } from "../../App";
import { dummyWork } from "../../dummywork";

const WorkExperienceBack: FC<CardProps> = ({ pallette, backHeader }) => {
  return (
    <ListCardContent
      contentItems={
        <>
          {dummyWork.map((item, index) => {
            return (
              <ListPills
                key={index}
                customStyles={{
                  backgroundColor: lightTheme[0].backgroundColor,
                }}
                job={item}
              >
                <div
                  style={{ color: pallette.cardTextColor }}
                >{`${item?.jobTitle}`}</div>
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
