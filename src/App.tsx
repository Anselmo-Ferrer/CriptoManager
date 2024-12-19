import AddForm from "./components/AddForm";
import CryptoPrice from "./components/CryptoPrice";
import HomeCard from "./components/HomeCard";
import MainChart from "./components/MainChart";
import Maintable from "./components/MainTable";
import TotalWallet from "./components/TotalWallet";

export default function App() {

  return (
      <div className="relative w-full h-fit bg-black">
        <div className="flex absolute z-10 w-[1525px] h-[635px] top-0 right-[-500px] gap-60" id="background">
          <div className="w-[600px] h-[470px] bg-gradient-to-r from-[#0377FB] to-[#2106C7] rounded-full blur-xl opacity-20"></div>
          <div className="w-[600px] h-[470px] bg-gradient-to-r from-[#0377FB] to-[#2106C7] rounded-full blur-xl opacity-60"></div>
        </div>
        {/* <CryptoPrice name="BTCUSDT" />
          <CryptoPrice name="ETHSUDT" /> */}
        
        <div className="z-20 relative p-20 flex w-full gap-8">

          {/* lado 1 */}
          <div className="w-4/5 flex flex-col gap-4" >

            <AddForm />
            <div className="flex-col justify-center py-10 px-4 blurred-background">
              <div className="flex justify-between">
                <HomeCard />
                <HomeCard />
                <HomeCard />
              </div>
              <MainChart />
            </div>
            <Maintable />

          </div>

          {/* lado 2 */}
          <div className="w-1/5">
            <TotalWallet />
          </div>
        </div>


      </div>
  )
}

