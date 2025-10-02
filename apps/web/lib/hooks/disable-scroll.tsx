import * as React from 'react';

const useDisableScroll = () => {
  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => e.preventDefault();

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};

export default useDisableScroll;
