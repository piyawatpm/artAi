import axios from 'axios';
import type { NextPage } from 'next';
import { useState } from 'react';
import { FacebookShareButton } from 'react-share';
import { PacmanLoader, RingLoader } from 'react-spinners';
import deepai from 'deepai';
import { useRouter } from 'next/router';
deepai.setApiKey('7a674fc4-34fc-4801-a27e-c34049e322f4');

const CreateTextToArt = () => {
  const [letter, setLetter] = useState('');
  const [previewImage, setPreviewImage] = useState<string>(
    'https://api.deepai.org/job-view-file/832bd25d-6c38-49af-9aba-183286d43aff/outputs/output.jpg'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const clearText = () => {
    setLetter('');
  };
  const router = useRouter();
  const imageStyle = [
    { name: 'Art', api: 'text2img' },
    { name: 'Cute', api: 'cute-creature-generator' },
    { name: 'Fantasphere', api: 'fantasy-portrait-generator' },
    { name: 'Cyberverse', api: 'cyberpunk-portrait-generator' },
    { name: 'Dreamlike', api: 'surreal-portrait-generator' },
    { name: 'Comics', api: 'comics-portrait-generator' },
    { name: 'Modernity', api: 'future-architecture-generator' },
    { name: 'Graffiti-art', api: 'street-art-generator' },
    { name: '3D-Origami', api: 'origami-3d-generator' },
    { name: '3D-Hologram', api: 'hologram-3d-generator' },
    { name: 'Retro-Innovation', api: 'steampunk-generator' },
    { name: 'Pop-Art', api: 'pop-art-generator' },
  ];

  const onSubmit = () => {
    if (selectedStyle) {
      setIsLoading(true);
      deepai
        // @ts-ignore
        .callStandardApi(selectedStyle, {
          text: letter,
          // @ts-ignore
          grid_size: '1',
        })
        .then((resp) => {
          setPreviewImage(resp.output_url);
          setIsComplete(true);
          setIsLoading(false);
        });
    }

    // try {
    //   const response = await axios.post('/api/textToArt', { text: letter });
    //   const image1 = await response.data.image;
    //   // console.log(image1);
    //   const image2 = await response.data.image2;
    //   const image3 = await response.data.image3;
    //   const image4 = await response.data.image4;
    //   setPreviewImage([image1, image2, image3, image4]);
    //   console.log(response);
    //   setIsLoading(false);
    //   setIsComplete(true);
    // } catch {
    //   setIsLoading(false);
    //   setIsComplete(false);
    // }
  };
  function downloadImage() {
    // const link = document.createElement('a');
    // console.log(previewImage);
    // // @ts-ignore
    // link.href = URL.createObjectURL(b64toBlob(previewImage, 'image/png'));
    // link.download = 'image.png';
    // link.click();
  }
  const [selectedStyle, setSelectedStyle] = useState('');
  const Complete = () => {
    return (
      <div className=" flex flex-col items-center justify-center h-full  w-fit">
        <div className=" w-full mx-auto h-[300px] xl:w-[580px] xl:h-[580px]">
          {isComplete ? (
            previewImage && (
              <img className=" w-full h-full" src={`${previewImage}`} alt="" />
            )
          ) : (
            <div className=" w-full h-full flex items-center justify-center black">
              {' '}
              {isLoading && (
                <RingLoader
                  size={301}
                  
                  color="white"
                  className=" mx-auto my-auto  hidden"
                />
              )}
          
            </div>
          )}
        </div>
        <div className=" flex flex-col mt-auto  text-white text-[18px] font-bold items-center justify-center ">
          <p className=" mb-5">{isComplete && letter}</p>
          <div className=" flex items-center justify-center gap-x-3">
            <a href={previewImage} download>
              <button
                onClick={downloadImage}
                className="w-[150px] xl:w-[200px] h-[40px] xl:h-[51px] py-3  flex items-center justify-center text-[12px] xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC]  p-[20%] gap-x-3 mx-auto"
              >
                <img src="/images/download.png" className='xl:w-auto w-[24px] xl:h-auto h-[25px]' alt="" />
                Download
              </button>
            </a>
            <button
              onClick={() => {
                router.push('https://oceansky.io/create-single');
              }}
              className="w-[150px] xl:w-[200px] py-3 h-[40px] xl:h-[51px]  justify-center text-[12px] xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center p-[20%] gap-x-3 mx-auto"
            >
              <img src="/images/mint.png" className='xl:w-auto w-[24px] xl:h-auto h-[25px]' alt="" />
              Mint
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className=" w-full flex   items-center  py-[40px]  px-[38px] xl:px-[130px]  text-black   ">
      <div className=" w-full  flex  xl:flex-row flex-col  ">
        <div className=" xl:w-[50%] flex flex-col  p-[20px] xl:p-[45px] gradient-black rounded-[40px]">
          <h1 className=" text-[21px] xl:text-[36px] font-black text-white xl:mb-8">
            Create <span className=" text-[#2DD48F]">Text to Art</span>
          </h1>

          <div className=" flex flex-col xl:mt-0 mt-4 gap-y-2 xl:gap-y-5">
            <div className=" flex items-center justify-between ">
              <p className=" text-[12px] xl:text-[24px] font-bold text-transparent textgradient">
                Enter Text Prompt
              </p>
              <p
                onClick={clearText}
                className=" cursor-pointer text-[10px] xl:text-[18px] font-bold text-white underline"
              >
                Clear text
              </p>
            </div>
            <div className=" relative w-full xl:h-[93px]">
              <textarea
                name=""
                value={letter}
                onChange={(e) => {
                  setLetter(e.target.value);
                }}
                placeholder="Describe the image you want to create"
                id=""
                maxLength={600}
                className=" rounded-[15px] bg-white w-full h-[93px] xl:px-[32px] p-4 xl:py-[25px] relative"
              ></textarea>
              <p className=" text-[#B0AAAA] text-[16px] font-medium hidden xl:absolute bottom-[2%] right-[1%]">
                {letter.length}/600
              </p>
          
            </div>
            <p className=" text-[16px] xl:text-[24px] font-bold text-transparent textgradient xl:text-left text-center xl:ml-8 mt-3">
                Choose the image style
              </p>
              <div className=" grid grid-cols-3 xl:grid-cols-5 mt-2 w-full items-center  justify-center gap-3 xl:gap-[25px] text-[11px] text-white">
                {imageStyle.map((style) => {
                  return (
                    <div
                      key={style.name}
                      onClick={() => {
                        setSelectedStyle(style.api);
                      }}
                      className={` flex flex-col gap-y-2 cursor-pointer whitespace-nowrap items-center justify-center `}
                    >
                      <img
                        src={`/images/image_style/${style.name}.png`}
                        alt=""
                        className={`${
                          selectedStyle === style.api && ' scale-125'
                        }  w-[60px] xl:w-[80px] h-[60px] xl:h-[80px]`}
                      />
                      <p className=" xl:text-[16px] text-[10px]">
                        {style.name}
                      </p>
                    </div>
                  );
                })}
              </div>
          </div>
          <button
            // disabled={!isLoading}
            onClick={onSubmit}
            className="xl:w-[200px] xl:px-0 px-5 py-2 xl:py-3 mt-5 xl:mt-10 text-[12px] xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto"
          >
             Generate Art
          </button>
        </div>
        <div className=" xl:w-[50%] h-full py-[20px] xl:p-[45px] flex flex-col items-center">
          <Complete />
        </div>
      </div>
    </div>
  );
};
export function b64toBlob(
  b64Data: string,
  contentType = '',
  sliceSize = 512
): Blob {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}
export default CreateTextToArt;
