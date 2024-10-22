import { FC } from "react";
import lightTheme from "../atoms/colors";

export type JobDetailsProps = {
  id?: number;
  jobTitle?: string;
  company?: string;
  workFrom?: string;
  workTo?: string;
  workType?: number;
  skills?: string[];
  jobResponsibilities?: string[];
};

const JobDetailsCard: FC<JobDetailsProps> = ({
  jobTitle = "",
  company = "",
  workFrom = "",
  workTo = "",
  skills = [],
  jobResponsibilities = [],
}) => {
  return (
    <div
      className="flex flex-col w-full p-4 my-4 rounded-lg"
      style={{ backgroundColor: lightTheme[0].backgroundColor }}
    >
      <div className="text-lg">{jobTitle}</div>
      <div className="flex">
        <span className="text-sm">{company}</span>
        <span className="text-sm">{`${workFrom}-${workTo}`}</span>
      </div>
      <div className="flex">
        <div className="flex-auto w-16">Skills:</div>
        <div className="flex-auto w-64">
          {skills.map((skill) => `${skill}, `).toString()}
        </div>
      </div>
      <div className="flex">
        <div className="">Job Responsibilities:</div>
        <div className="flex flex-col">
          {jobResponsibilities.map((jr) => (
            <div key={jr}>-{jr}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;
