import ProjectsContainer from './ProjectsContainer';

import { PROJECTS } from '../../util/projects';

const Projects = () => {
  return (
    <div className="pb-36">
      <div className="text-5xl text-blue-400 py-6 sm:pb-32 pb-8">Projects</div>
      <div className="flex flex-col gap-[450px] w-full relative lg:left-28 sm:left-0">
        {Object.entries(PROJECTS).map(([key, data]) => {
          return (
            <div key={key}>
              <ProjectsContainer data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
