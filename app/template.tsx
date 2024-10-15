import { Motion } from '@/components/motion';

interface RootTemplateProps {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: RootTemplateProps) {
  return (
    <>
      <Motion
        initial="hidden"
        style={{ willChange: 'opacity' }}
        transition={{
          duration: 0.4,
          when: 'beforeChildren',
          ease: 'easeInOut',
        }}
      >
        {children}
      </Motion>
    </>
  );
}
