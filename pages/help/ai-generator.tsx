/* eslint-disable react/no-unescaped-entities */
const AiGenerator = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          What is the AI Art Generator, and how does it work?
        </h1>
        <p>
          The AI Art Generator is a feature on the Artsai platform that allows
          users to create unique digital artworks using artificial intelligence.
          It works by using an algorithm that analyzes a user's selected image
          and then generates a new artwork based on various style and content
          parameters.
        </p>
        <p className=" mt-3">
          To use the AI Art Generator, users can upload their own image or
          select one from the platform's library. They can then adjust the style
          and content parameters using sliders to customize the final result.
          Once satisfied with the artwork, users can save it to their collection
          or purchase it on the platform.
        </p>
      </div>
    </div>
  );
};
export default AiGenerator;
