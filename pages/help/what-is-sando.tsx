import Link from 'next/link';

/* eslint-disable react/no-unescaped-entities */
const ConnectMetamask = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          What is Sandotoken, and how do I get it?
        </h1>
        <p>
          Sandotoken is the native utility token of the ArtsAi platform, and it
          is used to enable transactions and interactions on the platform. To
          acquire Sando token, you can purchase it on supported cryptocurrency
          exchanges such as Uniswap, Sushiswap, or PancakeSwap. You can also buy
          Sandotoken directly from the official Sandotoken website at
          <Link href={'http://sandotoken.io/'} className=" underline ml-2">
            www.sandotoken.io
          </Link>
          . once you have acquired Sandotoken, you can use it to purchase
          package credits on the ArtsAi platform. These package credits can be
          used to generate AI-generated images, art, and animations at a
          discounted price.
        </p>
      </div>
    </div>
  );
};
export default ConnectMetamask;
