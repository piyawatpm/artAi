/* eslint-disable react/no-unescaped-entities */
const ConnectMetamask = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          How do I connect my metamark wallet to the platform?
        </h1>
        <p>
          To connect your MetaMask wallet to the ArtsAi platform, please follow
          these steps: <br />
          1. Go to the pricing page on the ArtsAi website and select the package
          you want to purchase. <br />
          2. Click "Get Started" and choose the MetaMask option. <br />
          3. Connect your MetaMask wallet by following the prompts on the
          screen. By connecting your MetaMask wallet to the ArtsAi platform, you
          will be able to pay for your purchases using cryptocurrency, providing
          you with greater privacy, security, and flexibility.
        </p>
      </div>
    </div>
  );
};
export default ConnectMetamask;
