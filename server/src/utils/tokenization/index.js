import { signPayload, verifyAndDecodeToken } from '../helpers/jwtHelper';
import config from './config';

const tokenizeObject = (object) => {
  const signingOptions = {
    expiresIn: config.expireTokenIn,
    algorithm: config.signingAlgorithm,
  };
  Object.freeze(signingOptions);

  return signPayload(
    object,
    config.secret,
    signingOptions,
  );
};

const decodeToken = (token) => {
  const decodingOptions = {
    algorithms: [config.signingAlgorithm],
  };
  return verifyAndDecodeToken(
    token,
    config.secret,
    decodingOptions,
  );
};

export {
  tokenizeObject,
  decodeToken,
};
