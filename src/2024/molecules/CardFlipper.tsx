import { FC, ReactNode } from "react";
import Container from "../atoms/Container";
import CardHeader from "./CardHeader";
import CircularButton from "../atoms/CircularButton";
import { PlusIcon } from "@heroicons/react/16/solid";

const CardFlipper: FC<{
  isMainActive: boolean;
  FrontComponent: ReactNode;
  BackComponent: ReactNode;
  height: number;
  pallette: Record<string, string>;
  handleCardFlip: VoidFunction;
}> = ({
  pallette,
  handleCardFlip,
  isMainActive,
  FrontComponent,
  BackComponent,
  height,
}) => {
  return (
    <div className="relative mb-8 mr-8 w-80" style={{ height: height }}>
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
          {FrontComponent}
        </Container>
      </div>
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

          {BackComponent}
        </Container>
      </div>
    </div>
  );
};

export default CardFlipper;
