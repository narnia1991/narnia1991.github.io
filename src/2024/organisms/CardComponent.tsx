import { FC, ReactNode, useCallback, useMemo, useState } from "react";
import { getRandom } from "../utils/styleUtils";
import CardFlipper from "../molecules/CardFlipper";

const CardComponent: FC<{
  pallette: Record<string, string>;
  FrontComponent?: ReactNode;
  BackComponent?: ReactNode;
}> = ({ pallette, BackComponent, FrontComponent }) => {
  const [isMainActive, setIsMainActive] = useState(true);

  const handleCardFlip = useCallback(() => {
    setIsMainActive(!isMainActive);
  }, [isMainActive]);

  const height = useMemo(() => {
    return getRandom({ min: 30, max: 60 });
  }, []);

  return (
    <CardFlipper
      BackComponent={BackComponent}
      FrontComponent={FrontComponent}
      height={`${height}vh`}
      isMainActive={isMainActive}
      pallette={pallette}
      handleCardFlip={handleCardFlip}
    />
  );
};

export default CardComponent;
