import logo from "../../public/me.webp";
import Image from "next/image"

const HeroImage = () => {



  return (
    <div className="w-[400px] h-[400px] rounded-full overflow-hidden">
      <Image
        className="object-cover w-full h-full scale-125"
        src={logo}
        alt="logo"
        loading="eager"
        priority
        width={400}
        height={400}
      />
    </div>

  )
}
export default HeroImage