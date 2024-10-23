import { FC } from "react";
import { CardProps } from "../App";
import ListCardContent from "../molecules/ListCardContent";
import ListPills from "../molecules/ListPills";
import lightTheme from "../atoms/colors";

const CardBack: FC<CardProps> = ({
  pallette,
  backHeader,
  items,
  mainTextKey,
  DetailsComponent = () => <></>,
}) => {
  return (
    <ListCardContent
      contentItems={
        <>
          {items?.map((item, index) => {
            return (
              <ListPills
                key={index}
                customStyles={{
                  backgroundColor: lightTheme[0].backgroundColor,
                  color: pallette.cardTextColor,
                }}
                item={item}
                DetailsComponent={DetailsComponent}
              >
                <div
                  className="text-start"
                  style={{ color: pallette.cardTextColor }}
                >{`${item?.[mainTextKey ?? ""]}`}</div>
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

export default CardBack;
