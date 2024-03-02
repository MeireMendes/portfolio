import Image from "next/image";

export default function Home() {
  return (
    <main>

      <Image
          src="/vercel.srg"
          alt="vercel logo"
          width={100}
          height={24}
          priority
      />
    </main>
  );
}
