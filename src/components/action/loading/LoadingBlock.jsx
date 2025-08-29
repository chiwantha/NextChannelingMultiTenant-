import Image from "next/image";

const LoadingBlock = () => {
  return (
    <div className="min-h-[350px] w-full justify-center items-center flex">
      <Image
        src={`/sys/action/loading.gif`}
        alt="loading.gif"
        width={100}
        height={100}
        className="aspect-square"
      />
    </div>
  );
};

export default LoadingBlock;
