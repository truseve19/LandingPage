import Card from "./Card"

function imgData(src, width = 70, height = 20) {
  let className = "w-[60px] xl:w-[70px]"

  if (width === 130) {
    className = "w-[116px] xl:w-[130px]"
  }

  if (width === 100) {
    className = "w-20 xl:w-[100px]"
  }

  if (width === 90) {
    className = "w-[66px] xl:w-[90px]"
  }

  if (width === 80) {
    className = "w-[60px] xl:w-20"
  }

  if (width === 60) {
    className = "w-[50px] xl:w-[60px]"
  }

  if (width === 50) {
    className = "w-10 xl:w-[50px]"
  }

  if (width === 40) {
    className = "w-8 xl:w-10"
  }

  if (width === 36) {
    className = "w-7 xl:w-9"
  }

  return {
    src,
    width,
    height,
    className,
    alt: "",
  }
}

const list = [
  {
    title: "Desktop",
    para: <>
      Browse our extensive selection of desktop computers to see products from top brands like Acer, Apple, HP, Lenovo, and more. Superior performance, unbeatable reliability, and advanced features with no compromise.&nbsp;
      <a href="#" className="font-medium text-[#007BFF]">Buy Desktop Computers Online at Best Prices</a> at Truseve for the best price now!
    </>,
    imgs: [
      imgData("/img/home/service/Acer.png"),
      imgData("/img/home/service/lenovo.png", 80, 24),
      imgData("/img/home/service/hp.webp", 40, 40),
      imgData("/img/home/service/dell.webp", 40, 40),
      imgData("/img/home/service/apple.webp", 36, 36),
      imgData("/img/home/service/ASUS.png"),
      imgData("/img/home/service/MSI.png"),
    ],
  },
  {
    title: "Laptops",
    para: "Work from home made simple! Check out our enormous selection of top laptop brands, packed with cutting-edge features for you! Shop online at the most trusted store in India and Get the best laptop deals now.",
    imgs: [
      imgData("/img/home/service/Acer.png"),
      imgData("/img/home/service/lenovo.png", 80, 24),
      imgData("/img/home/service/hp.webp", 40, 40),
      imgData("/img/home/service/dell.webp", 40, 40),
      imgData("/img/home/service/apple.webp", 36, 36),
      imgData("/img/hardware/brand/Alienware.png", 50),
      imgData("/img/hardware/brand/chromebook.png", 130),
      imgData("/img/home/service/MSI.png"),
    ],
  },
  {
    title: "Workstation",
    para: "Experience superior performance and efficiency with our top-of-the-line workstations from leading brands, designed to handle intensive tasks and boost productivity in your professional environment.",
    imgs: [
      imgData("/img/home/service/apple.webp", 36, 36),
      imgData("/img/home/service/lenovo.png", 80, 24),
      imgData("/img/home/service/hp.webp", 40, 40),
      imgData("/img/home/service/dell.webp", 40, 40),
      imgData("/img/home/service/ASUS.png"),
    ],
  },
  {
    title: "Monitors",
    para: "Watch, play, live in style. Shop for Top Quality Computer Monitors Online at pocket friendly prices from truseve’s collection of Top brand Monitors. Our monitors provide a superior viewing experience for work or entertainment, thanks to crisp image quality and advanced display technologies.",
    imgs: [
      imgData("/img/home/service/ASUS.png"),
      imgData("/img/home/service/hp.webp", 40, 40),
      imgData("/img/home/service/dell.webp", 40, 40),
      imgData("/img/hardware/brand/samsung.png", 90),
      imgData("/img/home/service/lenovo.png", 80, 24),
    ],
  },
  {
    title: "Printers",
    para: "With our reliable printers with all new features, fast printing speeds, and effortless connectivity, you can now streamline document management and get prints of professional quality. Choose from our widest range of Printers like All-In-One Printers, Laser Printers, Inkjet Printers, Ink Cartridges, HP printers from the top brands like Canon, HP, Epson & more.",
    imgs: [
      imgData("/img/home/service/Brother.png", 90),
      imgData("/img/home/service/Epson.png"),
      imgData("/img/home/service/hp.webp", 40, 40),
      imgData("/img/hardware/brand/samsung.png", 90),
      imgData("/img/home/service/Canon.png", 80),
      imgData("/img/home/service/zebra.png", 80),
      imgData("/img/home/service/honeywell.png", 90),
      imgData("/img/hardware/brand/RUGTEK.png"),
      imgData("/img/home/service/deli.png", 60),
      imgData("/img/home/service/TSC.png", 60),
      imgData("/img/hardware/brand/pantum.png", 90),
      imgData("/img/hardware/brand/Xerox.png"),
      imgData("/img/hardware/brand/ricoh.png"),
      imgData("/img/hardware/brand/Kyocera.png", 80),
    ],
  },
  {
    title: "Scanners",
    para: "Shop online for document scanner machines at best price now. Digitise your documents and streamline your workflow with our adaptive scanners, that offer high-resolution scanning, fast processing, and intelligent features for efficient document management.",
    imgs: [
      imgData("/img/home/service/Brother.png", 90),
      imgData("/img/home/service/Epson.png"),
      imgData("/img/home/service/hp.webp", 40, 40),
      imgData("/img/home/service/Canon.png", 80),
      imgData("/img/home/service/zebra.png", 80),
      imgData("/img/home/service/honeywell.png", 90),
      imgData("/img/hardware/brand/RUGTEK.png"),
      imgData("/img/home/service/deli.png", 60),
      imgData("/img/home/service/TSC.png", 60),
    ],
  },
  {
    title: "Speakers",
    para: "Listening to music or watching a movie becomes more enjoyable when the audio quality is perfect. Buy Speakers online at best prices in India from top brands now. Our premium speakers will enhance your audio experience, deliver exceptional audio quality for music, movies, and presentations.",
    imgs: [
      imgData("/img/home/service/Logitech.png", 90),
      imgData("/img/hardware/brand/ahuja.png", 90),
      imgData("/img/home/service/Harman_Kardon.png", 130),
      imgData("/img/hardware/brand/zebronics.png", 130),
      imgData("/img/hardware/brand/studio-master.png", 100),
      imgData("/img/home/service/Bose.png", 100),
      imgData("/img/hardware/brand/Poly.png", 60),
      imgData("/img/hardware/brand/JBL.png", 40),
    ],
  },
  {
    title: "Television",
    para: "Immerse yourself in stunning visuals with our high-resolution monitors. Now Buy Latest LED TV, 4K TVs & Smart Televisions online at India's Best Online seller. Choose from trusted brands like LG, Panasonic, Samsung, Sony, etc.,.",
    imgs: [
      imgData("/img/home/service/lg.png"),
      imgData("/img/hardware/brand/samsung.png", 90),
      imgData("/img/hardware/brand/tcl.png", 60),
      imgData("/img/hardware/brand/Philips.png"),
      imgData("/img/hardware/brand/Xiaomi.png", 90),
      imgData("/img/hardware/brand/cropped.png"),
      imgData("/img/hardware/brand/Toshiba.png"),
    ],
  },
  {
    title: "Webcam",
    para: "Stay connected and engaged in video conferences with our high-definition webcams, designed to deliver clear visuals and crisp audio for seamless communication. Buy Webcams now online at low prices possible.",
    imgs: [
      imgData("/img/hardware/brand/hikvision.png", 100),
      imgData("/img/home/service/lg.png"),
      imgData("/img/home/service/Canon.png", 80),
      imgData("/img/home/service/Bosch.png", 100),
      imgData("/img/hardware/brand/Sony.png"),
    ],
  },
  {
    title: "UPS",
    para: "Ensure uninterrupted power supply and protect your valuable equipment with our reliable UPS solutions. Safeguard against power outages and voltage fluctuations to keep your systems running smoothly. Now shop for top-notch UPS products at an affordable price from Truseve, a 100% authentic and reliable reseller brand in India",
    imgs: [
      imgData("/img/home/service/Fuji_electric.png", 50),
      imgData("/img/home/service/Numeric.png"),
      imgData("/img/home/service/APC.png"),
      imgData("/img/home/service/luminous.jpg", 90),
      imgData("/img/hardware/brand/Schneider.png", 100),
      imgData("/img/hardware/brand/microtek.png", 80),
    ],
  },
  {
    title: "Paper Shredder",
    para: "Explore a huge range of paper shredders from top trusted brands in India. Safeguard your sensitive information with our efficient paper shredders. Dispose of confidential documents securely, preventing unauthorized access and maintaining data privacy. Get exciting deals now with fast delivery.",
    imgs: [
      imgData("/img/home/service/deli.png", 60),
    ],
  },
  {
    title: "Mobiles",
    para: "Find the best mobile phones online in India at the lowest prices and great discounts from popular brands like Samsung, OnePlus, Apple, Motorola, and others.",
    imgs: [
      imgData("/img/hardware/brand/samsung.png", 90),
      imgData("/img/home/service/apple.webp", 36, 36),
      imgData("/img/home/service/OnePlus.png", 100),
      imgData("/img/home/service/Nokia.png", 90),
      imgData("/img/home/service/lenovo.png", 80, 24),
      imgData("/img/hardware/brand/Huawei.png", 40),
      imgData("/img/hardware/brand/vivo.png"),
      imgData("/img/hardware/brand/OPPO.png"),
    ],
  },
]

function Products() {
  return (
    <section className="hardware-products-p-x mb-12 mdb:mb-20">
      <h2 className="mb-8 md:mb-12 lg:-mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-center text-[#070707]">
        Products
      </h2>

      {
        list.map(l => (
          <Card key={l.title} {...l} />
        ))
      }
    </section>
  )
}

export default Products