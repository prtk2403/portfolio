// components/CustomFontText.tsx
import { JetBrains_Mono } from 'next/font/google';
import { CodeIcon } from 'lucide-react';

const jetbrains_mono = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const CustomFontText = () => {
  return (
    <a className={`${jetbrains_mono.className} text-xl flex justify-between gap-2 items-center`} href='/'>
      <CodeIcon /> prtk
    </a>
  );
};

export default CustomFontText;
