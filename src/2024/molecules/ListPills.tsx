import { CSSProperties, FC, ReactNode, useState } from "react";

const ListPills: FC<{
  item: any; //TODO: populate with correct types
  customStyles?: CSSProperties;
  children: ReactNode;
  DetailsComponent: FC<any>;
}> = ({ item, children, customStyles, DetailsComponent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button
      style={customStyles}
      onClick={handleClick}
      className="flex w-full flex-1 p-4 my-4 rounded-lg"
    >
      {!isExpanded ? (
        children
      ) : (
        <DetailsComponent customStyles={{ customStyles }} {...item} />
      )}
    </button>
  );
};

export default ListPills;
