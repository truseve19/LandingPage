import Image from "next/image";

function Services() {
  return (
    <section className="bg-primary text-white relative overflow-x-hidden">
      <img
        className="absolute top-0 inset-x-0"
        src="/img/home/shape.png"
        alt=""
      />

      <h2 className="theme-h2 mt-2 md:mt-6 lg:mt-12 mb-4 md:mb-8 lg:mb-12">
        Our key services
      </h2>

      <div className="service-grid grid gap-4 sm:gap-6 w-fit mx-auto p-6 sm:p-12 rounded-2xl md:rounded-[35px] border border-[#98F9FF]">
        <div className="dc p-2 bg-white rounded-md md:rounded-xl">
          <Image
            src="/img/home/service/google-workspace.webp"
            alt=""
            width={130}
            height={82}
          />
        </div>

        <div className="dc p-2 col-span-2 bg-white rounded-md md:rounded-xl">
          <Image
            src="/img/home/service/microsoft.webp"
            alt=""
            width={300}
            height={125}
          />
        </div>

        <div className="dc p-2 bg-white rounded-md md:rounded-xl">
          <Image
            src="/img/home/service/aws.webp"
            alt=""
            width={90}
            height={54}
            className="max-sm:w-12"
          />
        </div>

        <div className="flex xs:flex-col justify-between items-center gap-2 xs:gap-6 py-2 px-4 xs:py-6 xl:py-12 max-xs:col-span-3 xs:row-span-2 bg-white rounded-md md:rounded-xl">
          <Image
            src="/img/home/service/hp.webp"
            alt=""
            width={100}
            height={100}
            className="max-xs:w-12"
          />

          <Image
            src="/img/home/service/dell.webp"
            alt=""
            width={100}
            height={100}
            className="max-xs:w-12"
          />

          <Image
            src="/img/home/service/apple.webp"
            alt=""
            width={42}
            height={42}
            className="xs:hidden"
          />
        </div>

        <div className="dc p-2 bg-white rounded-md md:rounded-xl">
          <Image
            src="/img/home/service/matlab.webp"
            alt=""
            width={186}
            height={136}
          />
        </div>

        <div className="dc p-2 bg-white rounded-md md:rounded-xl">
          <Image
            src="/img/home/service/Googlecloud.webp"
            alt=""
            width={160}
            height={160}
          />
        </div>

        <div className="dc xs:hidden p-2 bg-white rounded-md md:rounded-xl">
          <Image
            src="/img/home/service/azure.webp"
            alt=""
            width={260}
            height={40}
          />
        </div>

        <div className="dc p-2 col-span-2 bg-white rounded-md md:rounded-xl">
          <Image
            src="/img/home/service/Freshworks.webp"
            alt=""
            width={260}
            height={40}
            className="max-sm:w-32"
          />
        </div>
      </div>
    </section>
  )
}

export default Services