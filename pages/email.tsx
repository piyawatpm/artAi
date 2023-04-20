import { useRouter } from 'next/router';

/* eslint-disable react/no-unescaped-entities */
const Email = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full min-h-full pt-[53px]  gap-y-5 text-justify">
      <h1 className=" text-[36px] font-black text-white mb-[97px]">Email</h1>
      <div className="w-[878px] p-10   email flex flex-col items-center justify-center">
        <p>
          For any queries or concerns related to our game, please do not
          hesitate to contact us via email at{' '}
          <span className=" font-bold ">Artsaiaus@gmail.com</span> We would like
          to express our appreciation for your consideration. Thank you. We
          invite you to follow us on our official social media platforms to stay
        </p>

        <p className=" font-bold my-5 text-transparent textgradient-sea">
          updated with our latest news and updates.
        </p>
        <div className=" w-full text-left">
          <p>
            Website:{' '}
            <span
              onClick={() => {
                router.push('https://www.artsai.io');
              }}
              className=" underline cursor-pointer"
            >
              https://www.artsai.io
            </span>
          </p>
          <p>
            Twitter:{' '}
            <span
              onClick={() => {
                router.push('https://twitter.com/artsaiaus');
              }}
              className=" underline cursor-pointer"
            >
              https://twitter.com/artsaiaus
            </span>{' '}
            (@artsaiaus)
          </p>
          <p>
            Instagram:{' '}
            <span
              onClick={() => {
                router.push('https://www.instagram.com/artsaiaus/');
              }}
              className=" underline cursor-pointer"
            >
              https://www.instagram.com/artsaiaus/
            </span>{' '}
            (@artsaiaus)
          </p>
          <p>
            Facebook:{' '}
            <span
              onClick={() => {
                router.push('https://www.facebook.com/ArtsaiNFT/');
              }}
              className=" underline cursor-pointer"
            >
              https://www.facebook.com/ArtsaiNFT/
            </span>{' '}
            (@ArtsaiNFT)
          </p>
        </div>
      </div>
    </div>
  );
};
export default Email;
