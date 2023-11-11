import React from "react";

interface CorrCardProps {
  image: any
  text: string
}

const CorrCard: React.FC<CorrCardProps> = ({image, text}: CorrCardProps) =>
{
  return (
    <>
      <div className="m-1 p-3 bg-green-300 rounded">
        <img className="rounded" src={image} alt={text}/>
        <div className="flex justify-center">
        <p className="text-black">{text}</p>
        </div>
      </div>
      </>
  )
}

export default CorrCard
