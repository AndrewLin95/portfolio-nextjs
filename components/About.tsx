const About = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl sm:text-5xl py-6 text-blue-400"> About </div>
      <p className="text-sm sm:text-base">
        Hey there! I am a <span className="text-blue-300">passionate</span>{' '}
        self-taught software developer with a high affinity for learning new
        technologies and applying them to new projects and environments.
      </p>
      <p className="text-sm sm:text-base">
        I have{' '}
        <span className="font-bold">
          full-stack software development work experience
        </span>{' '}
        at Milano Software coding in{' '}
        <span className="text-blue-300">React</span>,{' '}
        <span className="text-blue-300">ASP.NET-C#</span>,{' '}
        <span className="text-blue-300"> MongoDB </span>,{' '}
        <span className="text-blue-300">MySQL</span> and more
      </p>
      <p className="italic text-sm sm:text-base">
        Being able to see the <span className="text-blue-300"> outcome </span>{' '}
        of my work and the <span className="text-blue-300">impact</span> it has
        to my users is one of the things I enjoy most.
      </p>
      <p className="text-sm sm:text-base">
        I find the problem solving and challenging nature of software
        development exciting. I am entralled by coming up with new software
        project ideas, applying new technologies and{' '}
        <span className="text-blue-300"> discovering how things work.</span>
      </p>
    </div>
  );
};

export default About;
