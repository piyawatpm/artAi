import Link from 'next/link';

/* eslint-disable react/no-unescaped-entities */
const HowToCreateAccount = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  px-[100px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          How do I create an account on ArtsAi?
        </h1>
        <p>To create an account on Artsai, please follow these steps:</p>
        <ul className="list-disc px-[30px]">
          <li>
            Go to the Artsai website :{' '}
            <Link href="https://www.artsai.io/sign-in" className=' underline'>
              https://www.artsai.io/sign-in
            </Link>
          </li>
          <li>
            Click on the "Sign Up" button located in the top right corner of the
            homepage.
          </li>
          <li>
            Fill in the required information such as your email address and a
            secure password. You can also choose to sign up with your Google,
            Facebook or Twitter account
          </li>
          <li>Click on the "Create Account" button.</li>
          <li>
            You will receive a confirmation email. Click on the confirmation
            link in the email to activate your Artsai account.
          </li>
          <li>
            After you have created your account, you can log in and start
            exploring the platform.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HowToCreateAccount;
