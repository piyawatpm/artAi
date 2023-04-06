/* eslint-disable react/no-unescaped-entities */
const AiSketchToArt = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          How does ARTsAi's Sketch to Art technology work?
        </h1>
        <p>
          ARTsAi's Sketch to Art technology allows customers to create art from
          simple sketches or outlines. The AI model is trained on a large
          dataset of artworks and corresponding sketches, allowing it to learn
          the style and visual features of different artists and art genres.
          Customers can choose from a variety of art styles and themes, such as
          impressionism, abstract, or pop art, and customize the color,
          composition, and other elements of the generated artwork. The
          resulting AI-generated artworks can be used for various purposes, such
          as wall art, merchandise design, or branding materials.
        </p>
      </div>
    </div>
  );
};
export default AiSketchToArt;
