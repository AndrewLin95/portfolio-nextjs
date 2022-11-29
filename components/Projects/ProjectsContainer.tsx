import { projectsInterface } from '../../util/models';
import { FC } from 'react';

interface Props {
  data: projectsInterface;
}

const ProjectsContainer: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-row">
      <img
        className="h-80 opacity-60"
        src={`static/assets/${data.image}`}
        alt={data.altDescription}
        loading="eager"
      />
      <div className="flex flex-col w-screen relative right-52 top-4">
        <div className="h-8 relative left-8 bg-indigo-900 w-48 px-3 py-1">
          <div className="flex justify-start items-center">
            {data.projectName}
          </div>
        </div>
        {/* Description */}
        <div className="bg-custom-2 p-5 flex flex-col gap-3 text-sm">
          <p>{data.paragraph1}</p>
          <p>{data.paragraph2}</p>

          {/* Divider */}
          <div className="border border-gray-400 w-full min-w-80"></div>

          {/* Built Using */}
          <p className="italic">{data.builtUsing}</p>

          {/* Links */}
          <div className="flex flex-row gap-4 justify-end text-base">
            <a href={data.liveLink} target={`_blank`}>
              <div>Live Site</div>
            </a>
            <a href={data.githubLink} target={`_blank`}>
              <div>Github</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
