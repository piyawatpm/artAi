import { canvasPreview } from "@/lib/canvasPreview";
import { useDebounceEffect } from "@/lib/useDebounceEffect";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
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
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const uploadRef = useRef(null);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
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
        canvasPreview(
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
      setAspect(16 / 9);
      setCrop(centerAspectCrop(width, height, 16 / 9));
    }
  }, [imgRef]);
  const handleRemoveImg = () => {
    setImgSrc("");
  };
  return (
    <div className=' w-full h-full flex flex-col items-center justify-center py-[10%] '>
      <input
        type='file'
        accept='image/*'
        className=' bg-red-500'
        ref={uploadRef}
        onChange={onSelectFile}
      />

      <h1 className=' text-[36px] font-black text-white'>
        Create <span className=' text-[#2DD48F]'>Sketch to Art</span>
      </h1>
      <div className=' flex flex-col w-3/4 gap-y-5'>
        <p className=' text-[24px] mr-auto font-bold text-transparent textgradient-green'>
          Upload your photo
        </p>

        <div className=' flex w-full'>
          <div className=' relative w-3/5 flex items-center justify-center mx-auto rounded-[15px] border-2 border-[#0D9488] border-dashed h-[300px] '>
            {imgSrc ? (
              <>
                <p
                  onClick={handleRemoveImg}
                  className=' text-white absolute top-2 right-2'
                >
                  X
                </p>
                <ReactCrop
                  crop={crop}
                  onChange={(_, percentCrop) => setCrop(percentCrop)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={aspect}
                >
                  <img
                    ref={imgRef}
                    alt='Crop me'
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
                      style={{
                        border: "1px solid black",
                        objectFit: "contain",
                        width: completedCrop.width,
                        height: completedCrop.height,
                      }}
                    />
                  )}
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  uploadRef.current.click();
                }}
                className='px-5 py-3 cursor-pointer gap-x-3 text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  to-[#4468C5] flex items-center justify-center mx-auto'
              >
                Choose File
                <img src='/images/upload.png' alt='' />
              </div>
            )}
          </div>
        </div>
      </div>
      <button className='w-[15%] mt-10 py-3  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  to-[#FFB100] flex items-center justify-center mx-auto'>
        Create Art
      </button>
    </div>
  );
};

export default CreateSkeychToArt;
