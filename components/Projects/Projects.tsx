import ProjectsContainer from './ProjectsContainer';

import { PROJECTS } from '../../util/projects';

const Projects = () => {
  return (
    <div className="pb-36">
      <div className="text-3xl text-blue-400 py-6">Projects</div>
      <div className="flex flex-col gap-36 w-full relative lg:left-28 sm:left-8">
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
