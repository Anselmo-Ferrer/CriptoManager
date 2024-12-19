import { Avatar, Progress } from "@nextui-org/react";

export default function TotalWallet() {
  return (
    <div className="blurred-background w-[300px] px-2 py-4">
      <span className="text-white">Chain Allocation</span>
      {Array.from({length : 6}).map((_, i) => {
        return (
          <div className="mt-8">
            <div className="flex gap-2 mb-2">
              <Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />
              <span className="text-white font-bold">Bitcoin</span>
            </div>
            <Progress aria-label="Loading..." color="primary" value={70} />
          </div>
       )
      })}
    </div>
  )
}