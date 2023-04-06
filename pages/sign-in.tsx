import { useRouter } from 'next/router';

const SignIn = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col text-white py-[10%] items-center justify-center gap-y-5">
      <h1 className=" text-[36px] font-black">Log in or Sign up</h1>
      <p className=" text-[16px] font-bold">
        Connect using Google, Facebook or your Email address.
      </p>
      <div className=" flex flex-col gap-y-2 w-full items-center">
        <div className=" w-[45%] bg-[#143B8B]  rounded-[10px] flex items-center justify-center gap-x-5  cursor-pointer font-bold py-5">
          <img src="/images/social/facebook.png" alt="" />{' '}
          <p>CONNECT WITH FACEBOOK</p>
        </div>
        <div className=" w-[45%] bg-[#FA2A2A]  rounded-[10px] flex items-center justify-center gap-x-5  cursor-pointer font-bold py-5">
          <img src="/images/social/google.png" alt="" />{' '}
          <p>CONNECT WITH GOOGLE</p>
        </div>
        <div className=" w-[45%] bg-[#0098FF]  rounded-[10px] flex items-center justify-center gap-x-5  cursor-pointer font-bold py-5">
          <img src="/images/social/twitter.png" alt="" />{' '}
          <p>CONNECT WITH TWITTER</p>
        </div>
      </div>
      <button
        onClick={() => {
          router.push('/sign-up');
        }}
        className="w-[15%] mt-10 py-3  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto"
      >
        SIGN UP
      </button>
    </div>
  );
};
export default SignIn;
