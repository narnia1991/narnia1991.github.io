import { FC } from "react";

import Container from "../atoms/Container";

const NameCard: FC<{ pallette: Record<string, string> }> = ({ pallette }) => {
  let fullWidth = window.innerWidth < 1280;
  return (
    <Container
      customStyles={{
        backgroundColor: pallette.backgroundColor,
        flexDirection: "row",
        maxHeight: "4rem",
        minHeight: "unset",
        margin: fullWidth ? "0 1rem" : "0 auto",
        width: fullWidth ? "100%" : 320,
        position: "relative",
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
