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
          <div className="w-[600px] h-[470px] bg-gradient-to-r from-[#0377FB] to-[#2106C7] rounded-full blur-xl opacity-40"></div>
        </div>
        
        <div className="z-20 relative p-20 flex flex-col w-full gap-8">
          <div className="w-full flex justify-between items-center">
            <div className="w-[79%]">
              <AddForm />
            </div>
            <div className="w-[20%]">
              <img src="src/assets/logo2.png" alt="" />
            </div>
          </div>

          <div className="flex gap-4">

          {/* lado 1 */}
            <div className="w-4/5 flex flex-col gap-4" >

              <div className="flex-col justify-center py-10 px-4 blurred-background">
                <div className="flex justify-between">
                <HomeCard name="Ganho" value="$20,000" />
                <HomeCard name="Gasto" value="$1,500" />
                <HomeCard name="Porcentagem" value="+ 872,6%"/>
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


      </div>
  )
}

