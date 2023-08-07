import Image from "next/image";
import Link from "next/link";

function SocialImg({ src, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt=""
        width={24}
        height={24}
      />
    </a>
  )
}

const socials = [
  {
    key: 1,
    src: "/img/home/footer/fb.png",
    link: "https://www.facebook.com/truseve",
  },
  {
    key: 2,
    src: "/img/home/footer/insta.png",
    link: "https://www.instagram.com/truseve_enterprises_/",
  },
  {
    key: 3,
    src: "/img/home/footer/twitter.png",
    link: "https://twitter.com/Truseve_",
  },
  {
    key: 4,
    src: "/img/home/footer/watsapp.png",
    link: "https://wa.me/message/N3B5R2A3O5HFG1",
  },
  {
    key: 5,
    src: "/img/home/footer/linkedin.png",
    link: "https://www.linkedin.com/company/truseve-enterprises/",
  },
]

function Footer() {
  return (
    <footer className="p-6 sm:p-8 md:py-12 text-[15px] bg-[#E6E8ED] text-[#525A62]">
      <div className="flex flex-wrap justify-between gap-4 md:gap-8 max-w-6xl mx-auto">
        <div>
          <p className="mb-2 cursor-pointer">
            Hardware
          </p>
          <p className="mb-2 cursor-pointer">
            Software
          </p>
          <p className="mb-2 cursor-pointer">
            Productivity
          </p>
          <p className="mb-2 cursor-pointer">
            Networking
          </p>
        </div>

        <div>
          <p className="mb-2 cursor-pointer">
            Storage & Data center
          </p>
          <p className="mb-2 cursor-pointer">
            Security
          </p>
          <p className="mb-2 cursor-pointer">
            Speciality Products
          </p>
        </div>

        <div>
          <Link href="/" className="block mb-2">About us</Link>
          <Link href="/" className="block mb-2">Privacy policy</Link>
        </div>

        <div>
          <div className="mb-4">
            <strong>Truseve Enterprises Private Limited,</strong> <br />
            Aditya Business Centre. D79, Friends Colony,  <br />
            3rd street, Anna Nagar East, Chennai 600102.
          </div>

          <div className="df gap-4 flex-wrap">
            {socials.map(a => <SocialImg {...a} />)}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer