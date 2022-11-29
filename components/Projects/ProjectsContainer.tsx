const ProjectsContainer = () => {
  return (
    <div className="flex flex-row">
      <img
        className="h-72 opacity-60"
        src={`static/assets/WheresWaldo.PNG`}
        alt={`Where's Waldo Clone`}
        loading="eager"
      />
      <div className="flex flex-col w-screen relative right-52">
        <div className="h-8 relative left-8 bg-indigo-900 w-48 px-3 py-1">
          <div className="flex justify-start items-center">
            Find the Object!
          </div>
        </div>
        <div className="bg-custom-2 p-5 flex flex-col gap-3">
          <p>Description</p>
          {/* Divider */}
          <div className="border border-gray-400 w-full min-w-80"></div>
          <p className="italic">Built using</p>
          <div className="flex flex-row gap-4 justify-end">
            <div>link to live site</div>
            <div>link to github</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
