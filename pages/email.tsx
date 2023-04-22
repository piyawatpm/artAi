import { useRouter } from 'next/router';

/* eslint-disable react/no-unescaped-entities */
const Email = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full min-h-full pt-[53px]  gap-y-5 text-justify">
      <h1 className=" text-[36px] font-bold text-white mb-[57px]">Email</h1>
      <div className="w-[878px] p-10   email flex flex-col items-center justify-center">
        <p>
          For any queries or concerns related to our game, please do not
          hesitate to contact us via email at{' '}
          <span className=" font-bold text-green-400">Artsaiaus@gmail.com</span>{' '}
          We would like to express our appreciation for your consideration.
          Thank you. 
        </p>

        <p className=" font-bold my-5 text-transparent textgradient-sea">
        We invite you to follow us on our official social media
          platforms to stay updated with our latest news and updates.
        </p>
        <div className=" w-full text-left">
          <div className=" flex">
            <p className=" w-[120px] text-start"> Website  :</p>
            <p
              onClick={() => {
                router.push('https://www.artsai.io');
              }}
              className=" underline cursor-pointer text-blue-700"
            >
             https://www.artsai.io
            </p>
          </div>
          <div className=" flex">
            <p className=" w-[120px] text-start"> Twitter  :</p>
            <p
              onClick={() => {
                router.push('https://twitter.com/artsaiaus ');
              }}
              className=" underline cursor-pointer text-blue-700"
            >
              https://twitter.com/artsaiaus 
            </p>
            <p>(@artsaiaus)</p>
          </div>
          <div className=" flex">
            <p className=" w-[120px] text-start"> Instagram  :</p>
            <p
              onClick={() => {
                router.push('https://www.instagram.com/artsaiaus/');
              }}
              className=" underline cursor-pointer text-blue-700"
            >
              https://www.instagram.com/artsaiaus/ 
            </p>
            <p>(@artsaiaus)</p>
          </div>
          <div className=" flex">
            <p className=" w-[120px] text-start"> Facebook  :</p>
            <p
              onClick={() => {
                router.push('https://www.facebook.com/artsaiaus');
              }}
              className=" underline cursor-pointer text-blue-700"
            >
             https://www.facebook.com/artsaiaus /
            </p>
            <p>(@ArtsaiNFT)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Email;
