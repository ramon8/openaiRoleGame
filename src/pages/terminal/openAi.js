const OpenAI = require('openai-api');


const urlParams = new URLSearchParams(window.location.search);
const sk = urlParams.get('sk');

const OPENAI_API_KEY = sk;

export const openai = new OpenAI(OPENAI_API_KEY);