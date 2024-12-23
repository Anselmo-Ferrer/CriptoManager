import { Bitcoin } from "lucide-react";
import { ElementType } from "react";

interface HomeCardProps {
  name: string;
  value: string;
}

export default function HomeCard({ name, value }: HomeCardProps) {
  return (
    <div className="w-[170px] h-[60px] flex gap-2">
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-[rgba(176,176,176,0.1)] rounded-xl">
        <Bitcoin className="w-[32px] h-[32px] text-white" />
      </div>
      <div className="w-[100px] h-[60px] flex justify-center flex-col">
        <h2 className="font-normal text-sm text-white">{name}</h2>
        <h1 className="font-bold text-xl text-white">{value}</h1>
      </div>
    </div>
  );
}