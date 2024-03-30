import 'dotenv/config';

export const env = {
  API_KEY: process.env.API_KEY,
  LOCAL_DEV_HOSTNAME: process.env.LOCAL_DEV_HOSTNAME,
  LOCAL_DEV_PORT: process.env.LOCAL_DEV_PORT,
  BUILD_MODE: process.env.BUILD_MODE,
  AUTHOR: process.env.AUTHOR,
  APP_URL: process.env.APP_URL,
  CLIENT_URL: process.env.CLIENT_URL,
};
