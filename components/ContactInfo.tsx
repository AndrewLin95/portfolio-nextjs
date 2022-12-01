import SendIcon from '@mui/icons-material/Send';

const ContactInfo = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="text-5xl text-blue-400 py-6">Contact</div>
      <div className="pb-6">
        I am currently looking for{' '}
        <span className="text-blue-300">software engineering</span>{' '}
        opportunities! If you have any questions, or just want to chat, please
        either use the form below, or reach out to me via email at{' '}
        <span className="text-blue-300">andrew.lin88@hotmail.com</span> and I
        will get back to you!
      </div>
      <div className="flex w-full justify-end">
        <div className="pb-12 w-1/2">
          <form className="flex flex-col gap-4 w-full">
            <input
              className="bg-transparent border p-1"
              placeholder="Name"
              type={'text'}
              required
            />
            <input
              className="bg-transparent border p-1"
              placeholder="Email"
              type={'email'}
              required
            />
            <textarea
              className="bg-transparent border p-1 resize-none"
              placeholder="Message"
              required
            ></textarea>
            <div>
              <button className="w-12 border-transparent" type="submit">
                Send
              </button>
              <SendIcon fontSize="small" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
