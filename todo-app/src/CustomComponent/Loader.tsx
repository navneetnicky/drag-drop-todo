
import Img from "../assets/wip.gif";
export const Loader = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center ">
           <div className="text-sm text-gray-500"><img src={Img}/></div>
      </div>
  );
};
