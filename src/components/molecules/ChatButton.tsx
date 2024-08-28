'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ChatButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 h-[4.4375rem] w-[4.4375rem] rounded-full shadow-[0px_3px_6px_#00000029] sm:h-[3.5rem] sm:w-[3.5rem]"
    >
      <Image
        src={'/images/chatbot-button.svg'}
        alt="Chat Button"
        width={71}
        height={71}
        className="absolute inset-0"
      />
    </Link>
  );
}
