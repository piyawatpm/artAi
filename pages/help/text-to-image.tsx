/* eslint-disable react/no-unescaped-entities */
const TextToImage = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          What is ARTsAi's Text to Image technology?
        </h1>
        <p>
          ARTsAi's Text to Image technology uses natural language processing
          (NLP) and computer vision algorithms to create images from textual
          descriptions. The AI model is trained on a large dataset of images and
          corresponding text descriptions, allowing it to learn the visual
          features and patterns associated with different concepts and objects.
          Customers can provide their own text descriptions or use pre-written
          templates to generate images for various purposes, such as product
          listings, social media posts, or website banners.
        </p>
      </div>
    </div>
  );
};
export default TextToImage;
