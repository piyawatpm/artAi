/* eslint-disable react/no-unescaped-entities */
const AiSketchToAnimation = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          What is ARTsAi's Sketch to Animation technology?
        </h1>
        <p>
          ARTsAi's Sketch to Animation technology enables customers to create
          animations from simple sketches or storyboards. The AI model is
          trained on a large dataset of animations and corresponding sketches,
          allowing it to learn the movement and pacing associated with different
          animation styles and genres. Customers can choose from a variety of
          animation styles, such as 2D, 3D, or stop-motion, and customize the
          animation elements, such as characters, backgrounds, and sound
          effects. The resulting AI-generated animations can be used for various
          purposes, such as film production, video game assets, or educational
          materials.
        </p>
      </div>
    </div>
  );
};
export default AiSketchToAnimation;
