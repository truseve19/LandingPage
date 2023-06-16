import Card from "./Card"

const list = [
  {
    title: "Desktop",
    para: <>
      Browse our extensive selection of desktop computers to see products from top brands like Acer, Apple, HP, Lenovo, and more. Superior performance, unbeatable reliability, and advanced features with no compromise.&nbsp;
      <a href="#" className="font-medium text-[#007BFF]">Buy Desktop Computers Online at Best Prices</a> at Truseve for the best price now!
    </>,
  },
  {
    title: "Laptops",
    para: "Work from home made simple! Check out our enormous selection of top laptop brands, packed with cutting-edge features for you! Shop online at the most trusted store in India and Get the best laptop deals now.",
  },
  {
    title: "Workstation",
    para: "Experience superior performance and efficiency with our top-of-the-line workstations from leading brands, designed to handle intensive tasks and boost productivity in your professional environment.",
  },
  {
    title: "Monitors",
    para: "Watch, play, live in style. Shop for Top Quality Computer Monitors Online at pocket friendly prices from truseve’s collection of Top brand Monitors. Our monitors provide a superior viewing experience for work or entertainment, thanks to crisp image quality and advanced display technologies.",
  },
  {
    title: "Printers",
    para: "With our reliable printers with all new features, fast printing speeds, and effortless connectivity, you can now streamline document management and get prints of professional quality. Choose from our widest range of Printers like All-In-One Printers, Laser Printers, Inkjet Printers, Ink Cartridges, HP printers from the top brands like Canon, HP, Epson & more.",
  },
  {
    title: "Scanners",
    para: "Shop online for document scanner machines at best price now. Digitise your documents and streamline your workflow with our adaptive scanners, that offer high-resolution scanning, fast processing, and intelligent features for efficient document management.",
  },
  {
    title: "Speakers",
    para: "Listening to music or watching a movie becomes more enjoyable when the audio quality is perfect. Buy Speakers online at best prices in India from top brands now. Our premium speakers will enhance your audio experience, deliver exceptional audio quality for music, movies, and presentations.",
  },
  {
    title: "Television",
    para: "Immerse yourself in stunning visuals with our high-resolution monitors. Now Buy Latest LED TV, 4K TVs & Smart Televisions online at India's Best Online seller. Choose from trusted brands like LG, Panasonic, Samsung, Sony, etc.,.",
  },
  {
    title: "Webcam",
    para: "Stay connected and engaged in video conferences with our high-definition webcams, designed to deliver clear visuals and crisp audio for seamless communication. Buy Webcams now online at low prices possible.",
  },
  {
    title: "UPS",
    para: "Ensure uninterrupted power supply and protect your valuable equipment with our reliable UPS solutions. Safeguard against power outages and voltage fluctuations to keep your systems running smoothly. Now shop for top-notch UPS products at an affordable price from Truseve, a 100% authentic and reliable reseller brand in India",
  },
  {
    title: "Paper Shredder",
    para: "Explore a huge range of paper shredders from top trusted brands in India. Safeguard your sensitive information with our efficient paper shredders. Dispose of confidential documents securely, preventing unauthorized access and maintaining data privacy. Get exciting deals now with fast delivery.",
  },
  {
    title: "Mobiles",
    para: "Find the best mobile phones online in India at the lowest prices and great discounts from popular brands like Samsung, OnePlus, Apple, Motorola, and others.",
  },
]

function Products() {
  return (
    <section className="hardware-products-p-x mb-12 mdb:mb-20">
      <h2 className="mb-12 lg:-mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-center text-[#070707]">
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