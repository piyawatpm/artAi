import axios from 'axios';
import type { NextPage } from 'next';
import { useState } from 'react';
import { PacmanLoader } from 'react-spinners';

const CreateTextToArt = () => {
  const [letter, setLetter] = useState('');
  const [previewImage, setPreviewImage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const clearText = () => {
    setLetter('');
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/textToArt', { text: letter });
      const image = await response.data.image;
      console.log(image);
      setPreviewImage(image);
      setIsLoading(false);
      setIsComplete(true);
    } catch {
      setIsLoading(false);
      setIsComplete(false);
    }
  };
  function downloadImage() {
    const link = document.createElement('a');
    // @ts-ignore
    link.href = URL.createObjectURL(b64toBlob(previewImage, 'image/png'));
    link.download = 'image.png';
    link.click();
  }
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center px-10 ">
      <h1 className=" text-[36px] font-black text-white">
        Create <span className=" text-[#2DD48F]">Text to Art</span>
      </h1>
      {isComplete && !isLoading ? (
        <div className=" flex w-full items-center justify-center gap-x-[5%]">
          <div className=" w-[400px] h-[400px]">
            <img src={`data:image/png;base64,${previewImage}`} alt="" />
          </div>
          <div className=" flex flex-col text-white text-[36px] font-bold items-center justify-center ">
            {letter}
            <button
              onClick={downloadImage}
              className="w-[200px] py-3  mt-10 text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center p-[20%] gap-x-3 mx-auto"
            >
              <img src="/images/download.png" alt="" />
              Download
            </button>
            <button
              // onClick={onSubmit}
              className="w-[200px] mt-3 py-3  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r bg-[#0D9488] flex items-center p-[20%] gap-x-3 mx-auto"
            >
              <img src="/images/share.png" alt="" />
              Shere
            </button>
          </div>
        </div>
      ) : (
        <>
          {' '}
          <div className=" flex flex-col w-3/4 gap-y-5">
            <div className=" flex items-center justify-between px-[32px]">
              <p className=" text-[24px] font-bold text-transparent textgradient">
                Enter Text
              </p>
              <p
                onClick={clearText}
                className=" cursor-pointer text-[18px] font-bold text-white underline"
              >
                Clear text
              </p>
            </div>

            <div className=" relative w-full h-[200px]">
              <textarea
                name=""
                value={letter}
                onChange={(e) => {
                  setLetter(e.target.value);
                }}
                placeholder="Describe the image you want to create"
                id=""
                maxLength={600}
                className=" rounded-[15px] bg-white w-full h-[200px] px-[32px] py-[25px] relative"
              ></textarea>
              <p className=" text-[#B0AAAA] text-[16px] font-medium absolute bottom-[2%] right-[1%]">
                {letter.length}/600
              </p>
            </div>
          </div>
          <button
            // disabled={!isLoading}
            onClick={onSubmit}
            className="w-[200px] mt-[80px] py-3  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto"
          >
            {isLoading ? (
              <PacmanLoader color="white" size={15} />
            ) : (
              'Create Art'
            )}
          </button>
        </>
      )}
    </div>
  );
};
function b64toBlob(b64Data: string, contentType = '', sliceSize = 512): Blob {
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
