import SendIcon from '@mui/icons-material/Send';

const ContactInfo = () => {
  const submitToAWS = async (e: any) => {
    e.preventDefault();
    const url =
      'https://osytfglaxd.execute-api.us-east-2.amazonaws.com/prod/portfolio';
    const data = {
      name: `${e.target.fname.value}`,
      email: `${e.target.femail.value}`,
      message: `${e.target.fmessage.value}`
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(url, requestOptions);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

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
          <form
            onSubmit={(e) => {
              submitToAWS(e);
            }}
            className="flex flex-col gap-4 w-full"
          >
            <input
              className="bg-transparent border p-1"
              placeholder="Name"
              type={'text'}
              required
              name="fname"
            />
            <input
              className="bg-transparent border p-1"
              placeholder="Email"
              type={'email'}
              required
              name="femail"
            />
            <textarea
              className="bg-transparent border p-1 resize-none"
              placeholder="Message"
              required
              name="fmessage"
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
