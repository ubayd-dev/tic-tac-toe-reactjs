// import { useEffect, useState } from "react";

// const useSound = (url, options) => {
//   const [sound, setSound] = useState(false);
//   useEffect(() => {
//     const audio = new Audio(url);

//     audio.load();

//     setSound(audio);
//   }, []); //// eslint-disable-next-line react-hooks/exhaustive-deps

//   return () => {
//     if (sound) {
//       sound.play();
//     }
//     setTimeout(() => {
//       sound.pause();
//       sound.currentTime = 0;
//     }, options.timeout);
//   };
// };

// export default useSound;


import { useEffect, useState } from "react";

const useSound = (url, options = {}) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    if (!url) return;

    const audio = new Audio(url);
    audio.load();
    setSound(audio);

    // cleanup to avoid memory leaks
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [url]); // ✅ include url as dependency

  return () => {
    if (sound) {
      sound.play();
      setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
      }, options.timeout ?? 1000); // fallback timeout if not passed
    }
  };
};

export default useSound;
