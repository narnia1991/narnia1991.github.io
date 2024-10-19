import { FC, ReactNode } from "react";

const ListCardContent: FC<{
  contentHeader: ReactNode;
  contentItems: ReactNode;
}> = ({ contentHeader, contentItems }) => {
  return (
    <div className="flex flex-col h-full overflow-hidden  -mr-2">
      <div className="h-1/6 w-full m-auto pr-4">{contentHeader}</div>
      <div className="h-auto w-full m-auto overflow-auto pr-2">
        {contentItems}
      </div>
    </div>
  );
};

export default ListCardContent;
