import { useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

const useNavToggle = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [leaved, setLeaved] = useState(false);

  const update = () => {
    if (scrollY.get() > 300) setLeaved(true);
    else setLeaved(false);
    if (scrollY.get() > (scrollY.getPrevious() || 0) && leaved) {
      return setHidden(true);
    }

    setHidden(false);
  };

  useMotionValueEvent(scrollY, 'change', update);
  return { leaved, hidden };
};

export default useNavToggle;
