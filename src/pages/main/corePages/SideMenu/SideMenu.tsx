import React, { useRef, useState } from "react";
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

  const CYCLES_PER_LETTER = 4;
  const SHUFFLE_TIME = 30;

  const CHARS = "DFUKC98745KHI97345";

  const intervalRef = useRef<any>(null);
  const [text, setText] = useState('');
  const [index, setIndex] = useState<number | null>(null);

  const scramble = (txt: string, index: number) => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = txt.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");

      setText(scrambled);
      setIndex(index);
      pos++;

      if (pos >= txt.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setIndex(null);
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
                    <motion.div className='text-primary text-4xl font-[Titillium] italic'
                    >Małgorzata</motion.div>
                    <motion.div className='text-white font-normal text-3xl font-[Poppins] not-italic ml-20'
                    > Staszewska </motion.div>
                </header>
                <main className="text-neutral-400">
                    <nav className=''>
                        <ul className=" h-full w-full uppercase text-sm flex flex-col items-start">
                          {hashLinksArray.map((link, idx) => {
                            return <motion.li className='sideMenu'
                            onMouseEnter={() => scramble(link.name, idx)}
                            onMouseLeave={() => stopScramble()}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.45,
                              delay: idx / 10,
                            }}
                            >
                                <HashLink 
                                className="sideMenuItem"
                                    smooth to={link.hash} 
                                    onClick={() => handleClose()} 
                                    >{idx === index ? text : link.name}</HashLink>
                              </motion.li> 
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