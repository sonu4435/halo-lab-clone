import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const BoxContainer = () => {
  return (
    <div className="boxContainer group rounded-2xl w-full h-[280px] relative z-20 cursor-pointer bg-slate-100 hover:bg-slate-200">
      <div className="w-auto p-8 flex items-start justify-start h-full">
        <div className="box h-20 w-20 rounded-full" />
        <div className="box h-16 w-16 rounded-full border border-black group-hover:bg-black group-hover:text-white flex items-center justify-center">
          <motion.div
            className="flex items-center justify-center"
            initial={{ y: 0, opacity: 1 }}
            whileHover={{ y: -10, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <MdOutlineArrowOutward className="h-full w-full p-4" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
