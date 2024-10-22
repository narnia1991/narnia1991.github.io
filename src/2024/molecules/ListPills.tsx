import { CSSProperties, FC, ReactNode, useState } from "react";
import JobDetailsCard, { JobDetailsProps } from "../organisms/JobDetailsCard";

const ListPills: FC<{
  job: JobDetailsProps;
  customStyles?: CSSProperties;
  children: ReactNode;
}> = ({ job, children, customStyles }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button
      style={customStyles}
      onClick={handleClick}
      className="flex w-full p-4 my-4 rounded-lg"
    >
      {!isExpanded ? children : <JobDetailsCard {...job} />}
    </button>
  );
};

export default ListPills;
