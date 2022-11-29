const About = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl py-6 text-blue-400"> About </div>
      <p>
        Hey there! I am a self-taught software developer with a high affinity
        for learning new technologies and applying them to new projects and
        environments.
      </p>
      <p className="italic">
        Being able to see the <span className="text-blue-300"> outcome </span>{' '}
        of my work and the <span className="text-blue-300">impact</span> it has
        to my users is one of the things I enjoy most.
      </p>
      <p>
        I find the problem solving and challenging nature of software
        development exciting. I am entralled by coming up with new software
        project ideas, applying new technologies and{' '}
        <span className="text-blue-300"> discovering how things work.</span>
      </p>
    </div>
  );
};

export default About;
