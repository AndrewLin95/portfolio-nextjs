const ProjectsContainer = () => {
  return (
    <div className="flex flex-row">
      <img
        className="h-80 opacity-60"
        src={`static/assets/WheresWaldo.PNG`}
        alt={`Where's Waldo Clone`}
        loading="eager"
      />
      <div className="flex flex-col w-screen relative right-52 top-4">
        <div className="h-8 relative left-8 bg-indigo-900 w-48 px-3 py-1">
          <div className="flex justify-start items-center">
            Find the Object!
          </div>
        </div>
        {/* Description */}
        <div className="bg-custom-2 p-5 flex flex-col gap-3 text-sm">
          <p>
            A fully responsive full stack photo tagging web application game.
          </p>
          <p>
            The data points are stored using absolute values in Googles's Cloud
            Firestore NoSQL database where the values are transformed based on
            the relative position of the browser viewport.
          </p>

          {/* Divider */}
          <div className="border border-gray-400 w-full min-w-80"></div>

          {/* Built Using */}
          <p className="italic">
            Built using Typescript, React and Google Firebase
          </p>

          {/* Links */}
          <div className="flex flex-row gap-4 justify-end text-base">
            <a
              href="https://andrewlin95.github.io/wheres_waldo/"
              target={`_blank`}
            >
              <div>Live Site</div>
            </a>
            <a
              href="https://github.com/AndrewLin95/wheres_waldo/"
              target={`_blank`}
            >
              <div>Github</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
