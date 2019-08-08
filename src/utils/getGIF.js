import GIFEncoder from '../libs/gif/GIFEncoder';

function getGIF(frameContexts, FPS) {
  const gif = new GIFEncoder();
  gif.setRepeat(0);
  gif.setDelay(1000 / FPS);
  gif.start();
  frameContexts.map(ctx => gif.addFrame(ctx));
  gif.finish();

  gif.getUint8Array = () => new Uint8Array(gif.stream().bin);

  return gif;
}

export default getGIF;
