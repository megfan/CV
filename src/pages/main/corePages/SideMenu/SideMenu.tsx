import React, { useRef } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router";
import { hashLinksArray } from "./hashLinks";
import '../../../../styles/sideMenu.css';


interface SideMenuProps {
    open: boolean;
    setOpen: (e: boolean) => void;
}
export const SideMenu = ({ open, setOpen }: SideMenuProps) => {

    const [scope, animate] = useAnimate();
  
    const handleClose = async () => {
      animate(scope.current, {
        opacity: [1, 0],
      });
      await animate("#drawer", {
        x: [0, "-10%"],
      });
  
      setOpen(false);
    };

  
    return (
      <>
        {open && (
          <motion.div
            ref={scope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleClose}
            className="fixed inset-0 z-40 bg-neutral-950/70"
          >
            <motion.div
              id="drawer"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "-10%" }}
              animate={{ x: "0%" }}
              transition={{
                ease: "easeInOut",
              }}
              className="absolute top-0 left-24 h-[100vh] w-[30vw] overflow-hidden bg-neutral-900 flex items-center justify-center"
            >
              <div className="p-5">
                <header className='w-full h-40 no-wrap flex flex-col'>
                    <div className=' text-primary text-4xl font-[Titillium] italic'>Małgorzata</div>
                    <div className='text-white font-normal text-3xl font-[Poppins] not-italic ml-20'> Staszewska </div>
                </header>
                <main className="text-neutral-400">
                    <nav className=''>
                        <ul className="text-gray-500 h-full w-full uppercase text-xs flex flex-col items-start">
                          {hashLinksArray.map(l => {
                            return <li className='menuBarItem'>
                                <HashLink 
                                    smooth to={l.hash} 
                                    onClick={() => setOpen(false)} 
                                    className="mb-5"
                                    >{l.name}</HashLink>
                              </li>
                          })}
                        </ul>
                      </nav>
                </main>
                   
                </div>
            </motion.div>
          </motion.div>
        )}
      </>
    );
  };