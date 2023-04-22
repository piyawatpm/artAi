import { useRouter } from 'next/router';

const SocialAdsInfo = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col text-white  flex-1 px-[38px]  xl:px-[200px] xl:pb-[50px] py-[40px] xl:pt-[100px] items-center gap-y-5">
      <div className=" flex w-full flex-col items-start">
        <p className=" text-[10px] xl:text-[20px] font-medium text-[#406CC0]">
          AI Social Ads
        </p>
        <h1 className=" text-[21px] xl:text-[36px] font-bold  xl:max-w-[600px]  uppercase xl:mt-3">
          Transform Your
          <span className=" text-transparent textgradient-pp  xl:mx-2 ">
            SOCIAL ADS
          </span>{' '}
          with AI-Powered Creator!
        </h1>
        <p className="  text-[10px] xl:text-[16px] xl:mt-4">
          Create Eye-Catching Social Ads Effortlessly with our AI-Powered Tool!
          Select Ad Size, Input Brand Details & Fine-Tune Ad Options. Save Time
          & Boost Ad Effectiveness - Try Now!
        </p>
        <div className=" flex  xl:flex-row flex-col w-full mt-10">
          <div className="xl:w-1/2">
            <img
              src="/images/index/ai-ads.png"
              alt=""
              className=" xl:mb-0 mb-10 xl:w-[389px] xl:h-[432px] xl:mx-auto"
            />
          </div>
          <div className=" xl:w-1/2 container p-[20px] xl:p-[30px] flex flex-col">
            <h1 className=" text-[21px] xl:text-[28px] font-bold text-[#6ED1D7]">
              Create Social Ads
            </h1>
            <p className=" text-[18px] xl:text-[24px] font-bold text-transparent textgradient-sea">
              Features
            </p>
            <div className=" flex items-center  xl:pl-[10%] gap-x-5 text-[12px] xl:text-[18px] font-medium mt-3 xl:mt-5">
              <div className="w-[97px] h-[60px] flex items-center justify-center">
                <img
                  src="/images/text-1.png "
                  className=" xl:scale-100 scale-75"
                  alt=""
                />
              </div>

              <p>Create Ai art using prompts</p>
            </div>
            <div className=" flex items-center  xl:pl-[10%] gap-x-5 text-[12px] xl:text-[18px] font-medium mt-3 xl:mt-5">
              <div className="w-[97px] h-[60px] flex items-center justify-center">
                <img
                  src="/images/text-2.png "
                  className=" xl:scale-100 scale-75"
                  alt=""
                />
              </div>

              <p>Input text</p>
            </div>
            <div className=" flex items-center  xl:pl-[10%] gap-x-5 text-[12px] xl:text-[18px] font-medium mt-3 xl:mt-5">
              <div className="w-[97px] h-[60px] flex items-center justify-center">
                <img
                  src="/images/text-4.png "
                  className=" xl:scale-100 scale-75"
                  alt=""
                />
              </div>

              <p>Choose the image style</p>
            </div>
            <div className=" flex items-center  xl:pl-[10%] gap-x-5 text-[12px] xl:text-[18px] font-medium mt-3 xl:mt-5">
              <div className="w-[97px] h-[60px] flex items-center justify-center">
                <img
                  src="/images/text-3.png "
                  className=" xl:scale-100 scale-75"
                  alt=""
                />
              </div>

              <p>Images are Ai generated.</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            router.push('/create-ads/step1');
          }}
          className=" py-2 px-5 xl:px-9  text-[12px] xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] flex items-center justify-center mt-10 mx-auto "
        >
          Generate
        </button>
      </div>
    </div>
  );
};
export default SocialAdsInfo;
