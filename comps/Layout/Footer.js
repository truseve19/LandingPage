import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-6 sm:p-8 md:py-12 text-[15px] bg-[#E6E8ED] text-[#525A62]">
      <div className="grid sm:grid-cols-3 gap-4 md:gap-8 justify-items-center max-w-6xl mx-auto">
        <div>
          <Link href="/" className="block mb-2">About us</Link>
          <Link href="/" className="block mb-2">Privacy policy</Link>
          <div className="mb-4">Truseve Private limited, No 3, Teynampet, Chennai</div>
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
      </div>
    </footer>
  )
}

export default Footer