import Image from "next/image";

interface ProductCardProps {
  name: string;   
  image: string;
  description: string;
}

const productCard = ({ name, image, description }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-3 h-auto cursor-pointer hover:scale-105 transition-all duration-300">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-cover rounded-lg" />
      </div>
      <div className="pt-2 px-4 pb-4 flex-1">
        <p className="text-md text-black font-bold text-center">{name}</p>
        <p className="text-xs text-black/75 text-center">{description}</p>
      </div>
    </div>
  )
}

export default productCard;