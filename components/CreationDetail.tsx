const CreationDetail = ({ view }) => {
  return (
    <div className=' flex flex-col gap-y-10 font-bold text-[18px] ml-10 text-white'>
      <h1 className=' text-[24px] mb-auto text-transparent textgradient-pp'>
        Features
      </h1>

      <div className=' flex gap-x-5 items-center '>
        <div className=' w-[90px] items-center justify-center flex'>
          <img src='/images/text-1.png' className='' alt='' />
        </div>
        <p>Create Ai art using prompts</p>
      </div>
      <div className=' flex gap-x-5 items-center'>
        <div className=' w-[90px] items-center justify-center flex'>
          <img src='/images/text-2.png' className='' alt='' />
        </div>
        <p>Input text</p>
      </div>
      <div className=' flex gap-x-5 items-center'>
        <div className=' w-[90px] items-center justify-center flex'>
          <img src='/images/text-3.png' className='' alt='' />
        </div>
        <p>Images are Ai generated.</p>
      </div>
      <button className="className=' w-2/3 mx-auto py-3  text-[18px] font-black text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto'">
        Create Art
      </button>
    </div>
  );
};
export default CreationDetail;
