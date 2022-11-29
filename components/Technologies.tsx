import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { SKILLS } from '../util/skills';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay(options)]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full py-16 flex flex-row items-center">
      <button
        className="cursor-pointer w-2 h-2 relative right-10"
        aria-label="previous"
        onClick={scrollPrev}
      >
        <ChevronLeftIcon fontSize="large" />
      </button>

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex select-none cursor-grab active:cusor-grabbing flex">
          {SKILLS.map((SKILLS) => (
            <Skill key={SKILLS.name} name={SKILLS.name} icon={SKILLS.icon} />
          ))}
        </div>
      </div>

      <button
        className="cursor-pointer w-2 h-2 relative left-5"
        aria-label="next"
        onClick={scrollNext}
      >
        <ChevronRightIcon fontSize="large" />
      </button>
    </div>
  );
};

export default Technologies;
