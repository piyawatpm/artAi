import { useRouter } from 'next/router';

/* eslint-disable react/no-unescaped-entities */
const SignIn = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col text-white py-[10%] items-center justify-center gap-y-5 text-center">
      <h1 className=" text-[36px] font-black">Help Centre</h1>
      <div className=" flex items-center justify-center gap-x-5 ">
        <div
          onClick={() => {
            router.push('/help/what-is-artsai');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          What is ARTsAi, and what is its mission?
        </div>
        <div
          onClick={() => {
            router.push('/help/how-to-create-account');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          How do I create an account on ArtsAi?
        </div>
        <div
          onClick={() => {
            router.push('/help/system-requirements');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          What are the system requirements for using ArtsAi?
        </div>
        <div
          onClick={() => {
            router.push('/help/how-ai-generate-images');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          How does ARTsAi's AI-generated images, art, and animations work?
        </div>
        <div
          onClick={() => {
            router.push('/help/how-does-ai-use-blockchain');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          How does ARTsAi use blockchain technology and Web4 in its platform?
        </div>
        <div
          onClick={() => {
            router.push('/help/payment-method');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          What payment methods does ARTsAi offer?
        </div>
        <div
          onClick={() => {
            router.push('/help/package-options');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          What are ARTsAi's package credit options, and how do they work?
        </div>
        <div
          onClick={() => {
            router.push('/help/package-valid');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          How long are the package credits valid for?
        </div>
      </div>
      <div className=" flex items-center justify-center gap-x-5">
        <div
          onClick={() => {
            router.push('/help/connect-metamask');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          How do I connect my metamark wallet to the platform?
        </div>
        <div
          onClick={() => {
            router.push('/help/what-is-sando');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          What is Sandotoken, and how do I get it?
        </div>
        <div
          onClick={() => {
            router.push('/help/buy-and-sell');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          How to buy and sell Ai Arts artwork on a marketplace?
        </div>
        <div
          onClick={() => {
            router.push('/help/ai-generator');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          What is the AI Art Generator, and how does it work?
        </div>
        <div
          onClick={() => {
            router.push('/help/ai-sketch-to-art');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          How does ARTsAi's Sketch to Art technology work?
        </div>
        <div
          onClick={() => {
            router.push('/help/ai-sketch-to-animation');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          What is ARTsAi's Sketch to Animation technology?
        </div>
        <div
          onClick={() => {
            router.push('/help/issue');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          I'm experiencing issues with the platform, what do I do?
        </div>
        <div
          onClick={() => {
            router.push('/help/guidelines');
          }}
          className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center"
        >
          What are the guidelines for using copyrighted material on Artsai?
        </div>
      </div>
      <h1 className=" text-[36px] font-black">Get more help</h1>
      <div className=" flex items-center justify-center gap-x-5">
        <div className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center">
          <img src="/images/help/doc.png" alt="" />
          <p>
            Docs and <br />
            Resources
          </p>
        </div>
        <div className=" w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] px-[14px] font-bold cursor-pointer help_box flex flex-col items-center justify-center">
          <img src="/images/help/email.png" alt="" />
          <p>Email</p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
