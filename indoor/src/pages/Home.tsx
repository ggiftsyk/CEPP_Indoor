import frameRoom from "../assets/frameRoom.svg";
import meeting from "../assets/meetingRoom.svg";
import table from "../assets/table.svg";
import shelf from "../assets/shelf.svg";

const Home = () => {
  return (
    <div className=" h-screen w-screen bg-bg-BlackBlue relative">
      <div className=" w-full text-center flex flex-col gap-y-4  text-white pt-24 absolute">
        <h1 className=" font-semibold text-4xl"> ECC HCRL</h1>
        <p className=" text-3xl">602</p>
      </div>

      <div className=" w-screen h-screen flex justify-center items-center">
        <div className="w-[347px] h-[325px] relative">
          <img src={frameRoom} className=""></img>

          <div className="absolute top-4 left-3 flex flex-col gap-y-10">
            <div className="flex gap-x-2">
              <img src={meeting} className=""></img>
              <div className=" flex flex-col items-center justify-center gap-y-6">
                <img src={table}></img>
                <img src={table}></img>
                <img src={table}></img>
              </div>
            </div>

            <div className=" flex gap-x-6">
              <img src={table}></img>
              <div className=" flex flex-col  gap-y-10">
                <img src={shelf}></img>
                <img src={shelf}></img>
                <img src={shelf}></img>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
