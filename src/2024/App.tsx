import { PlusIcon } from "@heroicons/react/16/solid";
import CircularButton from "./atoms/CircularButton";
import Container from "./atoms/Container";
import CardHeader from "./molecules/CardHeader";
import MainCardContent from "./molecules/MainCardContent";
import NameCard from "./organisms/NameCard";
import WorkExperienceCard from "./organisms/WorkExperienceCard/WorkExperienceCard";
import { getRandom } from "./utils/styleUtils";
import lightTheme from "./atoms/colors";
import MiniGamesCard from "./organisms/MiniGames/MiniGamesCard";

export type CardProps = {
  pallette: Record<string, string>;
  frontHeader?: string;
  backHeader?: string;
};

function App() {
  const cardList = ["Professional Links", "Arts", "Music", "Food"];

  const shuffledPallete = Object.values(lightTheme)
    .slice(1)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="flex m-auto content-center flex-wrap overflow-auto p-8 xl:flex-col xl:max-h-screen xl:overflow-hidden">
      <NameCard />
      <WorkExperienceCard pallette={shuffledPallete[2]} />
      <MiniGamesCard pallette={shuffledPallete[3]} />
      {cardList.map((card, index) => {
        const pallette = shuffledPallete[index];
        return (
          <Container
            customStyles={{
              backgroundColor: pallette.backgroundColor,
              height: getRandom({ min: 400, max: 600 }),
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
              key={card}
              contentImage={<div>Image Here</div>}
              contentLabel={
                <div
                  className="font-antiqua text-4xl"
                  style={{ color: pallette.color }}
                >
                  {card}
                </div>
              }
            />
          </Container>
        );
      })}
    </div>
  );
}

export default App;
