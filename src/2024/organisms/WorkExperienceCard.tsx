import { PlusIcon } from "@heroicons/react/16/solid";
import CircularButton from "../atoms/CircularButton";
import Container from "../atoms/Container";
import CardHeader from "../molecules/CardHeader";
import MainCardContent from "../molecules/MainCardContent";
import { getRandom } from "../utils/styleUtils";
import { FC, useCallback, useMemo, useState } from "react";
import ListCardContent from "../molecules/ListCardContent";
import ListPills from "../molecules/ListPills";
import lightTheme from "../atoms/colors";

const WorkExperienceCard: FC<{ pallette: Record<string, string> }> = ({
  pallette,
}) => {
  const [isMainActive, setIsMainActive] = useState(true);

  const handleCardFlip = useCallback(() => {
    setIsMainActive(!isMainActive);
  }, [isMainActive]);

  const height = useMemo(() => {
    return getRandom({ min: 450, max: 600 });
  }, []);

  return (
    <div className="relative mb-8 mr-8 w-80 shrink" style={{ height: height }}>
      <div
        className={`absolute transition duration-500 ease-in-out transform  ${
          isMainActive ? "scale-x-100  opacity-100" : "scale-x-0 opacity-0"
        }`}
      >
        <Container
          customStyles={{
            backgroundColor: pallette.backgroundColor,
            height: height,
          }}
        >
          <CardHeader
            rightActions={
              <CircularButton
                customStyles={{
                  backgroundColor: pallette.color,
                  height: "2rem",
                  width: "2rem",
                }}
                onClick={handleCardFlip}
              >
                <PlusIcon
                  className="text-lg"
                  stroke={pallette.backgroundColor}
                  fill={pallette.backgroundColor}
                />
              </CircularButton>
            }
          />

          <MainCardContent
            contentImage={<div>Click +</div>}
            contentLabel={
              <div
                className="font-antiqua text-4xl"
                style={{ color: pallette.color }}
              >
                Work Experience
              </div>
            }
          />
        </Container>
      </div>{" "}
      <div
        className={`absolute transition duration-500 ease-in-out transform  ${
          isMainActive ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      >
        <Container
          customStyles={{
            backgroundColor: pallette.backgroundColor,
            height: height,
          }}
        >
          <CardHeader
            rightActions={
              <CircularButton
                customStyles={{
                  backgroundColor: pallette.color,
                  height: "2rem",
                  width: "2rem",
                }}
                onClick={handleCardFlip}
              >
                <PlusIcon
                  className="text-lg rotate-45"
                  stroke={pallette.backgroundColor}
                  fill={pallette.backgroundColor}
                />
              </CircularButton>
            }
          />

          <ListCardContent
            contentItems={
              <>
                {[
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                  "Work",
                ].map((item) => {
                  return (
                    <ListPills
                      customStyles={{
                        backgroundColor: lightTheme[0].backgroundColor,
                      }}
                    >
                      <div style={{ color: pallette.cardTextColor }}>
                        {item}
                      </div>
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
                Work Experience List
              </div>
            }
          />
        </Container>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
