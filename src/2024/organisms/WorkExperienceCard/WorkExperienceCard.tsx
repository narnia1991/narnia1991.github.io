import { getRandom } from "../../utils/styleUtils";
import { FC, useCallback, useMemo, useState } from "react";
import CardFlipper from "../../molecules/CardFlipper";
import WorkExperienceBack from "./WorkExperienceBack";
import WorkExperienceFront from "./WorkExperienceFront";

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
    <CardFlipper
      BackComponent={
        <WorkExperienceBack pallette={pallette} backHeader="Work History" />
      }
      FrontComponent={
        <WorkExperienceFront
          pallette={pallette}
          frontHeader="Work Experiences"
        />
      }
      height={height}
      isMainActive={isMainActive}
      pallette={pallette}
      handleCardFlip={handleCardFlip}
    />
  );
};

export default WorkExperienceCard;
