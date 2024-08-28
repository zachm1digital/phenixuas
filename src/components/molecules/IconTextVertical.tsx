import Image from 'next/image';

type IconTextVerticalProps = {
  title: string;
  image: string;
  width: number;
  height: number;
};

export default function IconTextVertical({ title, image, width, height }: IconTextVerticalProps) {
  return (
    <div className="flex max-w-[10.125rem] flex-col justify-end gap-[1.75rem] text-[1px] lg:gap-[2.083333333333333vw] lg:text-[0.1vw] md:text-[0.55px]">
      <Image
        className="mx-auto block min-h-[3.97375rem] object-scale-down"
        src={image}
        alt="icon"
        width={width}
        height={height}
        style={{
          width: width + 'em',
          height: height + 'em'
        }}
      />
      <div className="whitespace-pre-wrap text-center text-xl font-bold lg:text-[1.953125vw] lg:leading-[1.96vw] md:text-[clamp(0.6875rem,_3.0555555555555554vw,_0.9375rem)] md:leading-[1]">
        {title}
      </div>
    </div>
  );
}
