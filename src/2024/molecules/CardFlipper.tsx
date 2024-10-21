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
  let fullWidth = window.innerWidth < 1280;

  return (
    <div
      className="flex relative max-md:m-4 md:m-4 shrink justify-center"
      style={{ height: height, width: 320 }}
    >
      <div
        className={`absolute transition duration-500 ease-in-out transform flex justify-center align-middle ${
          isMainActive ? "scale-x-100  opacity-100" : "scale-x-0 opacity-0"
        }`}
        style={{ width: fullWidth ? "20rem" : 320 }}
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
        className={`absolute transition duration-500 ease-in-out transform flex justify-center align-middle  ${
          isMainActive ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
        style={{ width: fullWidth ? "20rem" : 320 }}
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
