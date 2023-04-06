/* eslint-disable react/no-unescaped-entities */
const PagkageValid = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          How long are the package credits valid for?
        </h1>
        <p>
          ARTsAi's package credits are valid for 30 days from the date of
          purchase. Customers can use their package credits to generate images
          in various art styles, with each package credit offering 100 image
          generations. The generated images can be used for personal or
          commercial use without any additional costs or restrictions. The
          validity of the package credits allows customers to generate their
          images at their own pace and convenience within the specified
          timeframe. After 30 days, any unused package credits will expire and
          cannot be used to generate additional images.
        </p>
      </div>
    </div>
  );
};
export default PagkageValid;
