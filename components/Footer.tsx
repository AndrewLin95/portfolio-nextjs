import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <a
          href="https://github.com/AndrewLin95/portfolio-nextjs"
          target={'_blank'}
          className="flex gap-2"
        >
          <GitHubIcon />
          <span className="underline">
            My Portfolio is Open Source, built on NextJS, and uses AWS Services
            like S3, Lambda and DynamoDB!
          </span>
        </a>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
