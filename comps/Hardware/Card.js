import Image from "next/image";

function Card({ title, para, imgs = [] }) {
  return (
    <div
      className="hardware-products df flex-col mdb:flex-row gap-5 lg:gap-12 xl:gap-16 mb-16 md:mb-20 relative"
      id={title}
    >
      <div className="hardware-products-img-wrapper dc w-full sm:w-80 xl:w-[412px] h-72 lg:h-80 p-8 xs:p-16 sm:p-8 shrink-0 rounded-t-xl mdb:rounded-b-xl">
        <img
          src={`/img/hardware/${title}.png`}
          alt=""
        />
      </div>

      <div className="flex flex-col xl:min-h-[320px]">
        <p className="mb-1.5 lg:mb-2 mt-auto text-sm md:text-base lg:text-xl xl:text-[22px] font-bold">
          {title}
        </p>

        <p className="mb-2 text-sm md:text-base lg:text-lg">
          {para}
        </p>

        <p className="mt-2 lg:mt-auto mb-2 text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
          Brands we deal
        </p>

        <p className="df gap-x-5 gap-y-2 flex-wrap mb-auto">
          {
            imgs.map((im, i) => (
              <Image
                key={i}
                {...im}
              />
            ))
          }
        </p>
      </div>

      {/* <Image
        width={120}
        height={120}
        className="hadware-placeholder-img hidden mdb:block w-24 xl:w-[120px] absolute top-full"
        src="/img/hardware/light-boxes.png"
        alt=""
      /> */}
    </div>
  )
}

export default Card