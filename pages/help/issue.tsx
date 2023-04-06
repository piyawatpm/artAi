/* eslint-disable react/no-unescaped-entities */
const AiGenerator = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          I'm experiencing issues with the platform, what do I do?
        </h1>
        <p>
          If you are experiencing issues with the Artsai platform, you can try
          the following steps:
        </p>
        <ul className=" list-disc">
          <li>
            Refresh the page: Sometimes, the issue may be temporary, and a
            simple refresh of the page can solve the problem.
          </li>
          <li>
            Clear your browser cache: Clearing your browser cache can sometimes
            resolve issues with the platform.
          </li>
          <li>
            You can do this by going to your browser's settings and selecting
            the option to clear cache and cookies.
          </li>
          <li>
            Check your internet connection: Make sure that your internet
            connection is stable and strong enough to support the platform. You
            can try resetting your router or modem to see if that helps.
          </li>
          <li>
            Contact customer support: If none of the above steps resolve your
            issue, you can contact Artsai's customer support team. They will be
            able to assist you further with any technical issues you are
            experiencing.
          </li>
          <li>
            You can contact Artsai's customer support team through their Help
            Center page or by emailing them directly at support@artsai.io.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AiGenerator;
