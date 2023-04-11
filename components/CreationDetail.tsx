import { CreationView } from '../pages/create-arts';
import Link from 'next/link';
type CreationDetailType = {
  view: CreationView;
};
const CreationDetail = ({ view }: CreationDetailType) => {
  if (view === CreationView.TextToArt)
    return (
      <div className=" flex flex-col gap-y-10 font-bold text-[18px] ml-10 text-white">
        <h1 className=" text-[24px] mb-auto text-transparent textgradient-pp">
          Features
        </h1>

        <div className=" flex gap-x-5 items-center ">
          <div className=" w-[90px] items-center justify-center flex">
            <img src="/images/text-1.png" className="" alt="" />
          </div>
          <p>Create Ai art using prompts</p>
        </div>
        <div className=" flex gap-x-5 items-center">
          <div className=" w-[90px] items-center justify-center flex">
            <img src="/images/text-2.png" className="" alt="" />
          </div>
          <p>Input text</p>
        </div>
        <div className=" flex gap-x-5 items-center">
          <div className=" w-[90px] items-center justify-center flex">
            <img src="/images/text-3.png" className="" alt="" />
          </div>
          <p>Images are Ai generated</p>
        </div>
        <Link
          href={'/create-text-to-art'}
          className="className=' hover:scale-125 duration-300 w-2/3 mx-auto py-3  text-[18px] font-medium text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto'"
        >
          Create Art
        </Link>
      </div>
    );
  if (view === CreationView.SketchToArt)
    return (
      <div className=" flex flex-col gap-y-10 font-bold text-[18px] ml-10 text-white">
        <h1 className=" text-[24px] mb-auto text-transparent textgradient-pp">
          Features
        </h1>

        <div className=" flex gap-x-5 items-center ">
          <div className=" w-[90px] items-center justify-center flex">
            <img src="/images/sketch-1.png" className="" alt="" />
          </div>
          <p>Transform your sketch into art</p>
        </div>
        <div className=" flex gap-x-5 items-center">
          <div className=" w-[90px] items-center justify-center flex">
            <img src="/images/sketch-2.png" className="" alt="" />
          </div>
          <p>Draw a sketch</p>
        </div>
        <div className=" flex gap-x-5 items-center">
          <div className=" w-[90px] items-center justify-center flex">
            <img src="/images/sketch-3.png" className="" alt="" />
          </div>
          <p>Images are Ai generated</p>
        </div>
        <Link
          href={'/create-sketch-to-art'}
          className="className=' w-2/3 mx-auto py-3  text-[18px] font-medium text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  to-[#FFB100] flex items-center justify-center mx-auto'"
        >
          Create Art
        </Link>
      </div>
    );

  if (view === CreationView.DrawingToAnimation)
    return (
      <div className=" flex flex-col gap-y-10 font-bold text-[18px] ml-10 text-white">
        <h1 className=" text-[24px] mb-auto text-transparent textgradient-pp">
          Features
        </h1>

        <div className=" flex gap-x-5 items-center ">
          <div className=" w-[90px] items-center justify-center flex">
            <img src="/images/sketch-1.png" className="" alt="" />
          </div>
          <p>Transform your drawing into animation</p>
        </div>
        <div className=" flex gap-x-5 items-center">
          <div className=" w-[90px] items-center justify-center flex">
            <img src="/images/drawing-2.png" className="" alt="" />
          </div>
          <p>Upload drawing</p>
        </div>
        <div className=" flex gap-x-5 items-center">
          <div className=" w-[90px] items-center justify-center flex">
            <img src="/images/sketch-3.png" className="" alt="" />
          </div>
          <p>Images are Ai generated</p>
        </div>
        <Link
          href={'/drawing-to-animation'}
          className="className=' w-2/3 mx-auto py-3  text-[18px] font-medium text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto'"
        >
          Create Art
        </Link>
      </div>
    );
  return <div></div>;
};
export default CreationDetail;
