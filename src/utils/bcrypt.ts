import * as bcrypt from 'bcrypt';

export const encodeEmail = (email: string) => {
  try {
    return bcrypt.hashSync(email, 10);
  } catch (error) {
    console.log(error);
  }
};
