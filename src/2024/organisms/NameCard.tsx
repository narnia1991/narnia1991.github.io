import { FC } from "react";

import { getPallette } from "../utils/styleUtils";
import Container from "../atoms/Container";

const NameCard: FC = () => {
  const pallette = getPallette({});

  let fullWidth = window.innerWidth < 1280;
  return (
    <Container
      customStyles={{
        backgroundColor: pallette.backgroundColor,
        flexDirection: "row",
        maxHeight: "4rem",
        margin: "auto",
        width: fullWidth ? "100%" : 320,
      }}
    >
      <img alt="logo" src="/Narnia Icon.png" className="h-8 w-8 my-auto" />
      <div
        className="pl-4 my-auto font-marcellus text-4xl"
        style={{ color: pallette.color }}
      >
        NARNIA
      </div>
    </Container>
  );
};

export default NameCard;
