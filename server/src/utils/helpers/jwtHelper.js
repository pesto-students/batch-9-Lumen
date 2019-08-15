
import { verify as jwtVerify, sign as jwtSign } from 'jsonwebtoken';

const verifyAndDecodeToken = (
  token,
  secretOrKey,
  options,
) => jwtVerify(
  token,
  secretOrKey,
  options,
);

const signPayload = (
  payload,
  secretOrKey,
  options,
) => jwtSign(
  payload,
  secretOrKey,
  options,
);

export {
  verifyAndDecodeToken,
  signPayload,
};
