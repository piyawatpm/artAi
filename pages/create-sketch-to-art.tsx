import { canvasPreview } from '@/lib/canvasPreview';
import { useDebounceEffect } from '@/lib/useDebounceEffect';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { b64toBlob } from './create-text-to-art';
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}
const CreateSkeychToArt = () => {
  const [imgSrc, setImgSrc] = useState('');
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(1);
  const uploadRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');
  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        await canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );
  useEffect(() => {
    if (aspect) {
      setAspect(undefined);
    } else if (imgRef.current) {
      const { width, height } = imgRef.current;
      setAspect(1);
      setCrop(centerAspectCrop(width, height, 1));
    }
  }, [imgRef]);
  const handleRemoveImg = () => {
    setImgSrc('');
  };
  // @ts-ignore
  function base64ToImage(base64Data, imageName) {
    let byteCharacters = atob(base64Data.split(',')[1]);
    let byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    let blob = new Blob([byteArray], { type: 'image/png' });
    let file = new File([blob], imageName, { type: 'image/png' });
    return file;
  }
  const [previewImage, setPreviewImage] = useState([]);
  const onSubmit = async () => {
    const croppedBinary = previewCanvasRef.current?.toDataURL();
    const img = base64ToImage(croppedBinary, 'test');
    // console.log(previewCanvasRef.current?.toDataURL());
    console.log(img);
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('init_image', img);
      formData.append('init_image_mode', 'IMAGE_STRENGTH');
      formData.append('image_strength', '0.35');
      formData.append('text_prompts[0][text]', text);
      formData.append('cfg_scale', '7');
      formData.append('clip_guidance_preset', 'FAST_BLUE');
      formData.append('samples', '4');
      formData.append('steps', '30');

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      const response = await axios.post(
        'https://api.stability.ai/v1/generation/stable-diffusion-v1-5/image-to-image',
        formData,
        config
      );

      const image1 = await response.data.image;
      const image2 = await response.data.image2;
      const image3 = await response.data.image3;
      const image4 = await response.data.image4;
      // @ts-ignore
      setPreviewImage([image1, image2, image3, image4]);
      console.log(response);
      setIsLoading(false);
      setIsComplete(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsComplete(false);
    }
  };
  function downloadImage() {
    const link = document.createElement('a');
    // @ts-ignore
    previewImage?.forEach((e) => {
      link.href = URL.createObjectURL(b64toBlob(e, 'image/png'));
      link.download = 'image.png';
      link.click();
    });
  }

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center py-[7%] ">
      <input
        type="file"
        accept="image/*"
        className=" bg-red-500 hidden"
        ref={uploadRef}
        onChange={onSelectFile}
      />

      <h1 className=" text-[36px] font-black text-white">
        Create <span className=" text-[#2DD48F]">Sketch to Art</span>
      </h1>

      <div className=" flex flex-col w-1/2 gap-y-5">
        <div className=" flex w-full">
          <div className=" relative w-3/5 flex items-center justify-center mx-auto rounded-[15px] border-2 border-[#0D9488] border-dashed h-[300px] ">
            {imgSrc ? (
              <>
                <p
                  onClick={handleRemoveImg}
                  className=" text-white absolute top-2 right-2"
                >
                  X
                </p>
                <ReactCrop
                  crop={crop}
                  onChange={(_, percentCrop) => setCrop(percentCrop)}
                  onComplete={(c) => {
                    console.log(c);
                    setCompletedCrop(c);
                  }}
                  maxWidth={64}
                  maxHeight={64}
                  aspect={aspect}
                >
                  <img
                    ref={imgRef}
                    alt="Crop me"
                    src={imgSrc}
                    style={{
                      transform: `scale(${scale}) rotate(${rotate}deg)`,
                    }}
                    onLoad={onImageLoad}
                  />
                </ReactCrop>

                <div>
                  {!!completedCrop && (
                    <canvas
                      ref={previewCanvasRef}
                      className=""
                      style={{
                        border: '1px solid black',
                        objectFit: 'contain',
                        width: 64,
                        height: 64,
                      }}
                    />
                  )}
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  // @ts-ignore
                  uploadRef.current.click();
                }}
                className="px-5 py-3 cursor-pointer gap-x-3 text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  to-[#4468C5] flex items-center justify-center mx-auto"
              >
                Choose File
                <img src="/images/upload.png" alt="" />
              </div>
            )}
          </div>
        </div>
        <div className=" flex flex-col gap-y-1">
          <p className=" text-[16px]font-bold text-white">image Details</p>
          <textarea
            name=""
            id=""
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className=" flex-1 p-2 rounded-[15px]"
            rows={3}
          ></textarea>
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="w-[200px] mt-10 py-3  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  to-[#FFB100] flex items-center justify-center mx-auto"
      >
        Create Art
      </button>
    </div>
  );
};

export default CreateSkeychToArt;
