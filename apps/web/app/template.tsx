import { Motion } from '@/components/motion';

interface RootTemplateProps {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: RootTemplateProps) {
  return (
    <>
      <Motion
        initial="hidden"
        className="flex flex-1 flex-col"
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
