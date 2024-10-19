import { FC } from "react";
import Card from "../molecules/Card";

import { getPallette, getRandom } from "../utils/styleUtils";
import Container from "../atoms/Container";

const NameCard: FC = () => {
    const pallette = getPallette({})

    return (
        <Container customStyles={{
            backgroundColor: pallette.backgroundColor,
            flexDirection: "row",
        }} >
            <img alt="logo" src="/Narnia Icon.png" className="h-8 w-8 my-auto" />
            <div className="p-4 font-marcellus text-4xl" style={{ color: pallette.color }}>NARNIA</div>
        </Container>
    );
};

export default NameCard;
