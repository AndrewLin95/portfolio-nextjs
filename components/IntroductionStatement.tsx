import PublicIcon from '@mui/icons-material/Public';
import ComputerIcon from '@mui/icons-material/Computer';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import AdjustIcon from '@mui/icons-material/Adjust';
import PetsIcon from '@mui/icons-material/Pets';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

export default function IntroductionStatement() {
  return (
    <div className="flex flex-col p-4 w-full h-55 gap-3 justify-center items-center">
      <div className="text-5xl font-bold">
        Hello, I'm <span className="text-blue-400"> Andrew </span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>
          Toronto, Ontario <PublicIcon />
        </div>
        <div>
          Pharmaceuticals <MedicationLiquidIcon />,{' '}
          <span className="font-bold text-blue-300">Software Engineering</span>{' '}
          <PhonelinkRingIcon />, Project Management <ComputerIcon />
        </div>
        <div>
          Curious Optimist <PetsIcon />, Passionate Perfectionist <AdjustIcon />
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <a href="https://github.com/AndrewLin95" target={'_blank'}>
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-lin-87299615b/"
          target={'_blank'}
        >
          <LinkedInIcon />
        </a>
        <a className="resumePlaceholder">
          <DescriptionIcon />
        </a>
      </div>
    </div>
  );
}
