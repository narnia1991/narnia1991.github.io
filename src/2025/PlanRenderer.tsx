import Markdown from "markdown-to-jsx";
import { useCallback, useEffect, useState } from "react";

const PlanRenderer = () => {
  const [mdContent, setMdContent] = useState<string>("");

  const fetchMd = useCallback(async () => {
    try {
      // @ts-expect-error cannot find module
      const link = await import("./plan.md");
      // TODO: Decide if failing route should redirect to list page or to a 404 page
      if (!link) {
        throw new Error();
      }

      const content = await fetch(link.default);
      setMdContent(await content.text());
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchMd();
  }, [fetchMd]);

  return (
    <div
      style={{
        padding: "3rem",
      }}
    >
      <Markdown
        options={{
          overrides: {
            "*": {
              props: {
                style: { textAlign: "left" },
              },
            },
            h1: {
              props: {
                style: { textAlign: "left", fontSize: 30, fontWeight: 500 },
              },
            },
            h2: {
              props: {
                style: { textAlign: "left", fontSize: 24, fontWeight: 400 },
              },
            },
            p: {
              props: {
                style: {
                  textAlign: "left",
                  paddingBottom: "2rem",
                },
              },
            },
          },
        }}
      >
        {mdContent}
      </Markdown>
    </div>
  );
};

export default PlanRenderer;
