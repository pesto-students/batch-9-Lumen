// eslint-disable-next-line no-bitwise
const generateRandom = (size) => [...Array(size)].map(()=>(~~(Math.random()*36)).toString(36)).join('');

export default generateRandom;
