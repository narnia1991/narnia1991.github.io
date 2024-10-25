import lightTheme from "./atoms/colors";
import { CSSProperties, FC, ReactNode } from "react";
import CardFront from "./organisms/CardFront";
import CardBack from "./organisms/CardBack";
import { dummyWork } from "./dummywork";
import JobDetailsCard from "./organisms/JobDetailsCard";
import CardComponent from "./organisms/CardComponent";
import NameCard from "./organisms/NameCard";

export type CardProps = {
  pallette: Record<string, string>;
  frontHeader?: string;
  FrontImage?: ReactNode;
  backHeader?: string;
  items?: any[];
  mainTextKey?: string;
  DetailsComponent?: FC<any>;
};

function App() {
  const shuffledPallete = Object.values(lightTheme)
    .slice(1)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const listKeys = [
    {
      title: "Work Experience",
      items: dummyWork,
      mainTextKey: "jobTitle",
      DetailsComponent: JobDetailsCard,
    },
    {
      title: "Mini Games",
      items: Array.from(
        new Array(10).fill({ gameTitle: `Mini Games${Math.random()}` })
      ),
      mainTextKey: "gameTitle",
      DetailsComponent: ({
        gameTitle,
        customStyles,
      }: {
        gameTitle: string;
        customStyles: CSSProperties;
      }) => (
        <div style={customStyles}>
          {gameTitle}
          {"\n"}
          {Math.random()}
        </div>
      ),
    },
    {
      title: "Professional Links",
      items: Array.from(new Array(10).fill({ pl: `Link${Math.random()}` })),
      mainTextKey: "pl",
      DetailsComponent: ({
        pl,
        customStyles,
      }: {
        pl: string;
        customStyles: CSSProperties;
      }) => (
        <div style={customStyles}>
          {pl}
          {"\n"}
          {Math.random()}
        </div>
      ),
    },
    {
      title: "Arts",
      items: Array.from(
        new Array(10).fill({ artTitle: `Art${Math.random()}` })
      ),
      mainTextKey: "artTitle",
      DetailsComponent: ({
        artTitle,
        customStyles,
      }: {
        artTitle: string;
        customStyles: CSSProperties;
      }) => (
        <div style={customStyles}>
          {artTitle}
          {"\n"}
          {Math.random()}
        </div>
      ),
    },
    {
      title: "Music",
      items: Array.from(
        new Array(10).fill({ musicTitle: `Music${Math.random()}` })
      ),
      mainTextKey: "musicTitle",
      DetailsComponent: ({
        musicTitle,
        customStyles,
      }: {
        musicTitle: string;
        customStyles: CSSProperties;
      }) => (
        <div style={customStyles}>
          {musicTitle}
          {"\n"}
          {Math.random()}
        </div>
      ),
    },
    {
      title: "Food",
      items: Array.from(new Array(10).fill({ food: `Food${Math.random()}` })),
      mainTextKey: "food",
      DetailsComponent: ({
        food,
        customStyles,
      }: {
        food: string;
        customStyles: CSSProperties;
      }) => (
        <div style={customStyles}>
          {food}
          {"\n"}
          {Math.random()}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-row h-screen w-screen flex-wrap overflow-auto xl:flex-col xl:justify-start xl:h-11/12">
        <NameCard pallette={shuffledPallete[0]} />
        {listKeys.map((listItem, index) => {
          const pallette =
            shuffledPallete[(index + 1) % shuffledPallete.length];

          return (
            <CardComponent
              key={listItem.title}
              pallette={pallette}
              FrontComponent={
                <CardFront
                  pallette={pallette}
                  frontHeader={listItem.title}
                  FrontImage={<>{listItem.title} Image</>}
                />
              }
              BackComponent={
                <CardBack
                  pallette={pallette}
                  backHeader={listItem.title}
                  items={listItem.items}
                  mainTextKey={listItem.mainTextKey}
                  DetailsComponent={listItem.DetailsComponent}
                />
              }
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
