import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
const deepai = require('deepai')
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //  mode: 'no-cors', // no-cors, *cors, same-origin
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_BACKEND_APIKEY as string,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  deepai.setApiKey('7a674fc4-34fc-4801-a27e-c34049e322f4');
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Obly POST requests are allowed' });
  }

  const text = req.body.text;
  const engine_id = 'stable-diffusion-v1-5';
  const data = {
    body: JSON.stringify({
      text_prompts: [
        {
          text: text,
        },
      ],
      cfg_scale: 7,
      clip_guidance_preset: 'FAST_BLUE',
      height: 512,
      width: 512,
      samples: 4,
      steps: 30,
    }),
  };

  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    // samples: 4,
  };
  try {
    const response = await axios.post(
      `https://api.stability.ai/v1/generation/${engine_id}/text-to-image`,
      data.body,
      header
    );
    // console.log(response)
    const image = await response.data.artifacts[0].base64;
    const image2 = await response.data.artifacts[1].base64;
    const image3 = await response.data.artifacts[2].base64;

    const image4 = await response.data.artifacts[3].base64;

    return res.status(200).json({
      image,
      image2,
      image3,
      image4,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: 'Something went wrong.' });
  }
}
