import Image from "next/image";

const sliderImgs = [
  {
    key: "1",
    alt: "",
    src: "/img/home/customers/rediff.png",
    width: 149,
    height: 40,
  },
  {
    key: "2",
    alt: "",
    src: "/img/home/customers/agraga.png",
    width: 118,
    height: 69,
  },
  {
    key: "3",
    alt: "",
    src: "/img/home/customers/escon.png",
    width: 112,
    height: 48,
  },
  {
    key: "4",
    alt: "",
    src: "/img/home/customers/sanvir.png",
    width: 97,
    height: 78,
  },
  {
    key: "5",
    alt: "",
    src: "/img/home/customers/Easwari-Eng.png",
    width: 99,
    height: 99,
  },
]

function Trusted() {
  return (
    <div className="p-8 bg-light">
      <div className="grid grid-cols-5 items-center justify-items-center max-w-7xl mx-auto">
        {sliderImgs.map(s => <Image {...s} />)}
      </div>
    </div>
  )
}

export default Trusted