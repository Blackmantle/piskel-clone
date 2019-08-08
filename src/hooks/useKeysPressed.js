import { useState, useEffect } from 'react';

function useKeysPressed() {
  const [keysPressed, setKeysPressed] = useState({});

  useEffect(() => {
    function keyDownHandler(e) {
      const keys = {
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
      };
      setKeysPressed(keys);
    }

    function keyUpHandler() {
      setKeysPressed({});
    }

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  return keysPressed;
}

export default useKeysPressed;
