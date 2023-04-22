import type { NextPage } from 'next';
import { useState } from 'react';

const CreateTextToArt = () => {
  const context = [
    {
      header: 'Fantasphere',
      hightlight:
        '"Generating an image in a fantashere style from a written text description"',
      content:
        'refers to the process of using digital tools and techniques to create a visual representation of a fantasy genre, based on a written description. This process can involve using a text-to-image generator, manually creating the image, or a combination of both. The image created will typically feature elements associated with fantasy, such as mythical creatures, enchanted landscapes, or magical objects. By translating a written text description into a visual representation, the viewer can be transported to a world beyond our own, evoking feelings of awe and wonder.',
      image: '/images/docs/fantasphere.png',
    },
    {
      header: 'Cyberverse',
      hightlight:
        '“Generating a Cyberverse-style image from a written text description”',
      content:
        'means creating a visual representation of a fictional world that blends elements of the cyberpunk genre with other imaginative elements, based on a written description or prompt. This involves using digital tools and techniques such as illustration software or photo manipulation to create an image that typically features elements like advanced machinery, neon lighting, and a dystopian or otherworldly setting. The resulting image conveys the futuristic, technology-focused, and surreal elements of the Cyberverse genre.',
      image: '/images/docs/cyberverse.png',
    },
    {
      header: 'Dreamlike',
      hightlight:
        '“Generating a dreamlike-style image from a written text description”',
      content:
        'means creating a computer-generated image that depicts a scene or object described in a way that is ethereal, otherworldly, or evocative of a dream. It involves incorporating unexpected or unusual elements to create a visually striking and conceptually intriguing image. This process uses machine learning algorithms and other advanced computational techniques to translate the textual description into a visually dreamlike representation.',
      image: '/images/docs/dreamlike.png',
    },
    {
      header: 'Comics',
      hightlight:
        '“Generating a cosmics-style image from a written text description”',
      content:
        'means creating a visual representation of a fictional universe that incorporates elements of science fiction, fantasy, and cosmic horror, based on a written description or prompt. This involves using digital tools and techniques such as 3D modeling software or digital painting to create an image that typically features elements like cosmic landscapes, alien creatures, supernatural entities, and advanced technology. The resulting image conveys the vastness, mystery, and awe-inspiring nature of the cosmos and the potential for both wonder and terror that comes with exploring it.',
      image: '/images/docs/comics.png',
    },
    {
      header: 'Modernity',
      hightlight:
        '"Generating a Modernity-style image from a written text description"',
      content:
        'means creating a visual representation of a hypothetical building or urban environment that embodies the principles of modern design and technology, based on a written description or prompt. This involves using digital tools and techniques such as 3D modeling software or architectural visualization software to create an image that typically features elements like sleek lines, minimalist design, high-quality materials, and advanced technology.',
      image: '/images/docs/modernity.png',
    },
    {
      header: 'Graffiti art',
      hightlight:
        '"Generating a Graffiti Art-style image from a written text description"',
      content:
        'means creating a visually striking and edgy representation of a hypothetical graffiti art scene or mural using digital tools and techniques. The resulting image conveys a sense of creativity, urban culture, and social commentary through bold lines, vibrant colors, and a rebellious aesthetic.',
      image: '/images/docs/graffiti-art.png',
    },
    {
      header: '3D Origami',
      hightlight:
        '"Generating a 3D Origami-style image from a written text description"',
      content:
        'means creating a digital representation of a three-dimensional origami-inspired object or scene using 3D modeling software or CAD. The resulting image showcases the intricate folds and shapes of origami while adding depth and dimensionality to the design, conveying a sense of artistry and creativity.',
      image: '/images/docs/3d-origami.png',
    },
    {
      header: '3D Hologram',
      hightlight:
        '"Generating a 3D Hologram-style image from a written text description"',
      content:
        'means creating a visually stunning and futuristic representation of a hypothetical holographic image using 3D modeling software or CAD. The resulting image conveys a sense of innovation, technology, and sophistication, with a focus on creating a realistic and visually appealing design.',
      image: '/images/docs/3d-hologram.png',
    },
    {
      header: 'Retro-Innovation',
      hightlight:
        '"Generating a Retro-Innovation-style image from a written text description"',
      content:
        'means creating a visually striking representation of a hypothetical object, scene, or character inspired by the fusion of vintage aesthetics with modern design and technology. The resulting image conveys a sense of nostalgia, innovation, and functionality, with a focus on creating.',
      image: '/images/docs/retro.png',
    },
    {
      header: 'PopSonic',
      hightlight: '',
      content:
        'To generate PopSonic style images from text descriptions, one approach is to use a GAN trained on PopSonic images. The generator creates new images based on the text input, considering features like bold colors, sound waves, and patterns, while incorporating details from the text. The discriminator assesses image quality and gives feedback for generator improvement. While there are existing tools, this remains an active area of AI research.',
      image: '/images/docs/pop.png',
    },
  ];
  return (
    <div className=" w-full h-full flex flex-col items-center py-[53px] px-[200px] justify-center  ">
      <h1 className=" text-[36px] font-bold text-white mb-[28px]">
        AI Image Style
      </h1>
      {/* fantasphere */}
      <div className=" flex flex-col gap-y-7 ">
        {context.map((info, index) => {
          return (
            <div
              key={index}
              className={` docs-container flex gap-x-[15px] ${
                index % 2 != 0 && 'flex-row-reverse'
              }`}
            >
              <img src={info.image} className="w-[345px] h-[345px]" alt="" />

              <div className="  flex flex-col text-justify max-w-[435px]">
                <h1 className=" text-[24px] font-bold text-[#0D9488] mb-5">
                  {info.header}
                </h1>
                <p className=" text-[14px] font-medium">
                  <span className=" text-[#6ED1D7] font-bold">{info.hightlight}</span>
                  {info.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* cyberverse */}
    </div>
  );
};

export default CreateTextToArt;
