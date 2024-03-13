import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center gap-16">
        <div>hello</div>
        <Image
          src={"/images/home-header-dotted.png"}
          alt="home header"
          width={400}
          height={400}
        />
      </div>
    </main>
  );
}
