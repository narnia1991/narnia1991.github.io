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
      className="flex w-full flex-col p-4 rounded-lg"
      style={{ backgroundColor: lightTheme[0].backgroundColor }}
    >
      <div className="flex text-xl justify-start mb-4">{jobTitle}</div>
      <div className="flex justify-start flex-col md:flex-row mb-4">
        <div className="flex justify-start text-sm">{company}</div>
        <div className="flex justify-start text-sm">{`${workFrom}-${workTo}`}</div>
      </div>
      <div className="flex justify-start flex-col mb-4">
        <div className="flex justify-start flex-auto mb-2">Skills:</div>
        <div className="flex justify-start text-start flex-auto text-sm">
          {skills.map((skill) => `${skill}, `).toString()}
        </div>
      </div>
      <div className="flex justify-start flex-col mb-4">
        <div className="flex justify-start text-start text-clip mb-2 text-wrap flex-auto">
          Job Responsibilities:
        </div>
        <div className="flex flex-col flex-auto text-start text-sm">
          {jobResponsibilities.map((jr) => (
            <div key={jr}>-{jr}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;
