import Link from "next/link";
import Image from "next/image";
import profileImage from "@/assets/images/profile.jpg";

export default function Header() {
  return (
    <div className="p-10">
      <Link href="/">
        <Image
          src={profileImage}
          alt="Mischa Colley"
          className="w-32 mx-auto rounded-full"
          width={128}
          height={128}
        />
      </Link>
    </div>
  );
}
