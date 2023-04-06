/* eslint-disable react/no-unescaped-entities */
const PaymentMethod = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          What are ARTsAi's package credit options, and how do they work?
        </h1>
        <p>
          ARTsAi offers four different package credit options: Starter, Basic,
          Pro, and Premium. Each package credit option provides customers with a
          certain number of image generations in various image resolutions,
          ranging from 512 * 512 to 1024 * 1024 pixels. Customers can use their
          package credits to generate images in different art styles, with each
          package credit offering 100 image generations. The packages are priced
          based on the image resolution and the number of image generations
          offered. Customers can purchase package credits using PayPal or
          cryptocurrency, and they do not expire until 30 days after the date of
          purchase.
        </p>
      </div>
    </div>
  );
};
export default PaymentMethod;
