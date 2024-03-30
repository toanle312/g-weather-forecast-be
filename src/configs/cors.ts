import { WHITELIST_DOMAINS } from '@/utils/contant';
import { env } from '@/configs/environment';

export const corsOptions = {
  origin: function (origin, callback) {
    if (env.BUILD_MODE === 'dev') {
      return callback(null, true);
    } else if (WHITELIST_DOMAINS.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`${origin} not allowed by our CORS Policy.`));
  },

  // Some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,

  // CORS sẽ cho phép nhận cookies từ request, (Nhá hàng :D | Ở khóa MERN Stack Advance nâng cao học trực tiếp mình sẽ hướng dẫn các bạn đính kèm jwt access token và refresh token vào httpOnly Cookies)
  credentials: true,
};
