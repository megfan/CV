import React, { useEffect, useRef, useState } from "react";
import {
  useAnimate,
  motion,
} from "framer-motion";
import { Link } from "react-scroll";
import { mainLinksArray } from "../../../helpers/hashLinks";
import '../../../styles/sideMenu.css';
import { scramble, stopScramble } from "../../../helpers/scrambleFunction";
import { ContactBar } from "../Contact/ContactBar";

const CYCLES_PER_LETTER = 4;
const SHUFFLE_TIME = 30;

const CHARS = "DFUKC98745KHI97345";

interface SideMenuProps {
  open: boolean;
  setOpen: (e: boolean) => void;
}
export const SideMenu = ({ open, setOpen }: SideMenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scope, animate] = useAnimate();
  const hasMounted = useRef(false);
  const intervalRef = useRef<any>(null);
  const [text, setText] = useState('');
  const [index, setIndex] = useState<number | null>(null);
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    open
      ? setOpenMenu(open)
      : handleClose()

  }, [open]);

  const handleClose = async () => {
    if (!scope.current) return;

    animate(scope.current, {
      opacity: [1, 0],
    });

    await animate("#drawer", {
      x: ["0%", "20%"],
    });

    setOpenMenu(false)
    setOpen(false);
  };

  return (
    <>
      {openMenu && (
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
            initial={{ x: "20%" }}
            animate={{ x: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute top-0 lg:right-0 right-0 h-[100vh] lg:w-[30vw] w-full overflow-hidden bg-neutral-900 flex items-center justify-center"
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
                    {mainLinksArray.map((link, idx) => {
                      return <motion.li className='sideMenu'
                        onMouseEnter={() => scramble(link, idx, intervalRef, setText, setIndex)}
                        onMouseLeave={() => stopScramble(intervalRef, setIndex)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.45,
                          delay: idx / 10,
                        }}
                      >
                        <Link
                          className="sideMenuItem"
                          to={link}
                          spy
                          onClick={handleClose}
                        >{idx === index ? text : link}</Link>
                      </motion.li>
                    })}
                  </ul>
                </nav>
              </main>
              <motion.button
                initial={{ opacity: 0 , x: '15px'}}
                animate={{ opacity: 1 , x: '0px'}}
                transition={{
                  duration: 0.55,
                  delay: 7 / 10,
                }}
                 onClick={() => setOpenContact(true)}
                className=' text-white font-normal text-2xl mt-32'>Ready to talk about
                <span className='text-primary text-4xl font-[Titillium] lowercase italic'> your </span> project?</motion.button>
              <ContactBar open={openContact} setOpen={setOpenContact} />

            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};