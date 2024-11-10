"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();


  return (
    <div className={twMerge("bg-white px-4 py-2 rounded-lg w-full h-full", className)}>
      <div className="w-full flex items-center justify-between">
        <div className="hidden rounded-full md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-gray-200 flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-black" size={50} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-gray-200 flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-black" size={50} />
          </button>
        </div>
      </div>
      <div className="flex-grow h-full">{children}</div>
    </div>
  );
};

export default Header;
