import { useRouter } from 'next/router';

const ImageToArtInformation = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col text-white  flex-1  px-[200px] pb-[50px] pt-[100px] items-center gap-y-5">
      <div className=" flex w-full flex-col items-start">
        <p className=" text-[20px] font-medium text-[#406CC0]">Image to Art</p>
        <h1 className=" text-[36px] font-bold  leading-[23px] mt-3">
          Revolutionary
          <span className=" text-transparent textgradient-pp mx-2 ">
            Image-to-Art
          </span>
          AI Technology
        </h1>
        <p className=" text-[16px] mt-4">
          Transform Your Images with AI Magic! Adjust Colors, Lighting & Add
          Effects with Ease. Perfect for Photographers, Designers & Hobbyists.
        </p>
        <div className=" flex  w-full mt-10">
          <div className=" w-1/2">
            <img src="/images/imageToArt.png" alt="" />
          </div>
          <div className=" w-1/2 container p-[30px] flex flex-col">
            <h1 className=" text-[28px] font-bold text-[#6ED1D7]">
              Create Image to Art
            </h1>
            <p className=" text-[24px] font-bold text-transparent textgradient-sea">
              Features
            </p>
            <div className=" flex items-center  pl-[10%] gap-x-5 text-[18px] font-medium mt-5">
              <div className="w-[97px] h-[60px] flex items-center justify-center">
                <img src="/images/text-1.png " className=" " alt="" />
              </div>

              <p>Create Ai art using prompts</p>
            </div>
            <div className=" flex items-center  pl-[10%] gap-x-5 text-[18px] font-medium mt-5">
              <div className="w-[97px] h-[60px] flex items-center justify-center">
                <img src="/images/text-2.png " className=" " alt="" />
              </div>

              <p>Input text</p>
            </div>
            <div className=" flex items-center  pl-[10%] gap-x-5 text-[18px] font-medium mt-5">
              <div className="w-[97px] h-[60px] flex items-center justify-center">
                <img src="/images/text-4.png " className=" " alt="" />
              </div>

              <p>Choose the image style</p>
            </div>
            <div className=" flex items-center  pl-[10%] gap-x-5 text-[18px] font-medium mt-5">
              <div className="w-[97px] h-[60px] flex items-center justify-center">
                <img src="/images/text-3.png " className=" " alt="" />
              </div>

              <p>Images are Ai generated.</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            router.push('/create-sketch-to-art');
          }}
          className=" py-2 px-9  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] flex items-center justify-center mt-10 mx-auto "
        >
          Generate
        </button>
      </div>
    </div>
  );
};
export default ImageToArtInformation;
