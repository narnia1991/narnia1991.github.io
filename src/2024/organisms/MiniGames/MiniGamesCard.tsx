import { getRandom } from "../../utils/styleUtils";
import { FC, ReactNode, useCallback, useMemo, useState } from "react";
import CardFlipper from "../../molecules/CardFlipper";
import MiniGamesBack from "./MiniGamesBack";
import MiniGamesFront from "./MiniGamesFront";

const MiniGamesCard: FC<{
  pallette: Record<string, string>;
  FrontComponent?: ReactNode;
  BackComponent?: ReactNode;
}> = ({ pallette }) => {
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
        <MiniGamesBack pallette={pallette} backHeader="Mini-Games" />
      }
      FrontComponent={
        <MiniGamesFront pallette={pallette} frontHeader="Mini-Games" />
      }
      height={height}
      isMainActive={isMainActive}
      pallette={pallette}
      handleCardFlip={handleCardFlip}
    />
  );
};

export default MiniGamesCard;
