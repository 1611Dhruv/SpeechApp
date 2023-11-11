import ProgressChart from "@/components/ProgressChart";
import StatisticsBoard from "@/components/StatisticsBoard";
import { faFileLines, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  const userName = "Josh";
  return (
    <div className="bg-[rgba(255,255,255,1)]	 w-[90%] rounded-2xl relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  py-[50px]">
      <h1 className="text-6xl text-center font-bold mb-10 backdrop:blur-lg">
        {" "}
        Welcome Back {userName}
      </h1>
      <div className="flex justify-between">
        <div className="mx-24">
          <ProgressChart />
        </div>
        <div className="flex flex-col h-full items-center justify-evenly mr-32 w-full">
          <div className="flex flex-row  w-full justify-evenly mb-10">
            <Link href={"/record"}>
              <div className=" rounded-full border-[1px] p-5 items-center border-black">
                <FontAwesomeIcon width={30} height={30} icon={faPlay} />
              </div>
            </Link>
            <Link href={"/recordings"}>
              <div className=" rounded-full border-[1px] p-5 items-center border-black">
                <FontAwesomeIcon width={30} height={30} icon={faFileLines} />
              </div>
            </Link>
          </div>
          <StatisticsBoard />
        </div>
      </div>
    </div>
  );
}
