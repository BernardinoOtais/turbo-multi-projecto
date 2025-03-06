import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={"/assets/fmoda.jpg"}
          alt="Fashion"
          width={1920} // Use the actual width of your image
          height={1080} // Use the actual height of your image
          className="h-[770px] w-[1156px] object-contain"
        />
      </div>
    </>
  );
}
