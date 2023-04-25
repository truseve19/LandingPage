import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-6 sm:p-8 md:py-12 text-[15px] bg-[#E6E8ED] text-[#525A62]">
      <div className="flex flex-wrap justify-between gap-4 md:gap-8 max-w-6xl mx-auto">
        <div>
          <p className="mb-2 cursor-pointer">
            Software
          </p>
          <p className="mb-2 cursor-pointer">
            Hardware
          </p>
          <p className="mb-2 cursor-pointer">
            Storage & data center
          </p>
          <p className="mb-2 cursor-pointer">
            Productivity
          </p>
        </div>

        <div>
          <p className="mb-2 cursor-pointer">
            Networking
          </p>
          <p className="mb-2 cursor-pointer">
            Security
          </p>
          <p className="mb-2 cursor-pointer">
            Other products
          </p>
        </div>

        <div>
          <Link href="/" className="block mb-2">About us</Link>
          <Link href="/" className="block mb-2">Privacy policy</Link>
        </div>

        <div>
          <div className="mb-4">
            <strong>Truseve Enterprises Private limited,</strong> <br />
            No. 5, 2nd Floor, Reach It Asia, 1st Street, <br />
            Cenotaph Road, Teynampet, Chennai - 600018
          </div>
          <div className="df gap-4 flex-wrap">
            <Image
              src="/img/home/footer/fb.png"
              alt=""
              width={24}
              height={24}
            />
            <Image
              src="/img/home/footer/insta.png"
              alt=""
              width={24}
              height={24}
            />
            <Image
              src="/img/home/footer/twitter.png"
              alt=""
              width={24}
              height={24}
            />
            <Image
              src="/img/home/footer/watsapp.png"
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer