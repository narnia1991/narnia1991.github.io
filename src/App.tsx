import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const MainPage = (
    <div className="App">
      <div className="textWrap">
        Been tinkering around the web since 2015. It's just now that I had
        interest in creating my own. <br />
        <br />
        Me and{" "}
        <a
          href="https://jeanaica.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          my wife
        </a>{" "}
        also held a talk last Aug 2022 with the PLM students. Presentation{" "}
        <a
          href="https://narnia1991.github.io/weaving-webs"
          target="_blank"
          rel="noreferrer noopener"
        >
          here
        </a>
        <br />
        <br />
        <div>
          I currenty am building my tech blog using markdown.
          <br />I saw{" "}
          <a
            href="https://www.youtube.com/watch?v=Od-Uj5RSsuM"
            target="_blank"
            rel="noreferrer noopener"
          >
            this video in youtube
          </a>{" "}
          and decided to give it a try.
          <br />
          It's still a work in progress but the goal is to have this as my
          client facing blog.
          <br />
          A place to share new learnings or anything interesting in particular.
          <br />
          See the progress{" "}
          <a
            href="https://narnia1991.github.io/tech-blog"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </a>
          <br />
          <br />
          This is far underwhelming than{" "}
          <a
            href="https://demo-cms.jeanaica.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            the blog that my awesome wife made
          </a>
          😂
        </div>
        <br />
        <br />
        <div>
          I've also been creating my spin on the classic boring tic tac toe. The
          Tic Tac Shuffle!
        </div>{" "}
        <br />
        See the progress{" "}
        <a
          href="https://narnia1991.github.io/games/tic-tac-shuffle"
          target="_blank"
          rel="noreferrer noopener"
        >
          here
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={MainPage} />
      </Routes>
      <div style={{ position: "absolute", bottom: 0, margin: "0 auto" }}>
        ©2023 narnia1991
      </div>
    </>
  );
}

export default App;
