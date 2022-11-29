import ProjectsContainer from './ProjectsContainer';

import { PROJECTS } from '../../util/projects';

const Projects = () => {
  return (
    <div>
      <div className="text-3xl text-blue-400 py-6">Projects</div>
      {Object.entries(PROJECTS).map(([key, data]) => {
        console.log(data);
        return (
          <div key={key}>
            <ProjectsContainer data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
