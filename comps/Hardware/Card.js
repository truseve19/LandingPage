import Image from "next/image";

function Card({ title, para, }) {
  return (
    <div className="hardware-products flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mb-8 relative">
      <div className="hardware-products-img-wrapper dc max-xs:max-w-[250px] xs:w-72 sm:w-80 xl:w-[412px] xl:h-80 p-8 shrink-0 rounded-xl">
        <img
          src={`/img/hardware/${title}.png`}
          alt=""
        />
      </div>

      <div className="flex flex-col lg:h-80">
        <p className="mb-1.5 lg:mb-3 mt-auto text-sm md:text-base lg:text-xl xl:text-[22px] font-bold">
          {title}
        </p>

        <p className="text-sm md:text-base lg:text-lg">
          {para}
        </p>

        <p className="mt-2 lg:mt-auto text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
          Brands we deal
        </p>
      </div>

      <Image
        width={120}
        height={120}
        className="hadware-placeholder-img hidden mdb:block w-24 xl:w-[120px] absolute top-full"
        src="/img/hardware/light-boxes.png"
        alt=""
      />
    </div>
  )
}

export default Card