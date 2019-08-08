import UPNG from 'upng-js';

function getAPNG(frameContexts, canvasSize, FPS) {
  const frameDataBuffers = [];
  frameContexts.forEach((ctx) => {
    const { data: buffer } = ctx.getImageData(0, 0, canvasSize, canvasSize);
    frameDataBuffers.push(buffer);
  });
  const delay = new Array(frameDataBuffers.length).fill(1000 / FPS);
  const png = UPNG.encode(frameDataBuffers, canvasSize, canvasSize, 256, delay);

  png.download = (fileName) => {
    const blob = new Blob([new Uint8Array(png)], { type: 'image/png' });
    const url = URL.createObjectURL(blob);

    const templink = document.createElement('a');
    templink.download = fileName;
    templink.href = url;
    templink.click();
  };

  return png;
}

export default getAPNG;
