import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const skills = [
  {
    name: 'react',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'nextjs',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
  },
  {
    name: 'git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'webpack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'
  },
  {
    name: 'jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
  },
  {
    name: 'npm',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
  },
  {
    name: 'aws',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  },
  {
    name: 'mongodb',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
  }
];

interface Skills {
  name: string;
  icon: string;
}

const Skill = ({ name, icon }: Skills) => {
  return (
    <div className="flex flex-col mr-10">
      <img className="h-full w-full" src={icon}></img>
      <p className="uppercase">{name}</p>
    </div>
  );
};

const Technologies = () => {
  const options = { delay: 2000 };
  const autoplayRoot = (emblaRoot: any) => emblaRoot.parentElement;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay(options, autoplayRoot)]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full py-16">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex select-none cursor-grab active:cusor-grabbing flex">
          {skills.map((skill) => (
            <Skill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <button
        className="cursor-pointer w-2 h-2"
        aria-label="previous"
        onClick={scrollPrev}
      >
        <svg
          className="embla__button__svg"
          viewBox="137.718 -1.001 366.563 644"
        >
          <path
            fill="currentColor"
            d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
          />
        </svg>
      </button>
      <button
        className="cursor-pointer w-2 h-2"
        aria-label="next"
        onClick={scrollNext}
      >
        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
          <path
            fill="currentColor"
            d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Technologies;
