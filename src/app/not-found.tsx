import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import siteIcon from "@/assets/images/site-icon.png";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="p-6 bg-gray-100 rounded-lg shadow-2xl">
        <div className="flex items-center justify-around mb-6 px-16">
          <Image
            src={siteIcon}
            alt="MC Logo"
            className="h-10"
            width={40}
            height={40}
          />
        </div>
        <h1 className="text-2xl text-gray-500 uppercase">Oops!</h1>
        <p className="text-xl text-gray-700">
          We can't find the page that you are looking for..
        </p>
        <div className="mt-4">
          <Link href="/" className="text-brand underline hover:text-blue-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
