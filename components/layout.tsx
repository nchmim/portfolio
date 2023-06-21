import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import Image from "next/image"
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Squash as Hamburger } from "hamburger-react";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
  home?: boolean;
};

export default function Layout({ children, home }: LayoutProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      const newIsTop = window.scrollY < 10;
      if (newIsTop !== isTop) {
        setIsTop(newIsTop);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isTop]);

  const toggleDrawer =
    (open: boolean | ((prevState: boolean) => boolean)) => (event: any) => {
      setIsOpen(open);
    };

  const workLink = home ? <a href="#work">WORK</a>: <Link href="/#work">WORK</Link>

  return (
    <>
    <Head>
      <title>NCHMIM</title>
    </Head>
      <header
        className={`${isTop ? "" : "opacity-0 -translate-y-5"
          } flex py-6 px-7 bg-black text-white items-center transition-all duration-500 ease-in-out`}
      >
        <div className="mr-10 md:hidden">
          <button
            onClick={toggleDrawer((open: boolean) => !open)}
            style={{ position: "relative", zIndex: 1301 }}
          >
            <Hamburger
              toggled={isOpen}
              color={isOpen ? "black" : "white"}
              size={20}
            />
          </button>
          <Drawer open={isOpen} onClose={toggleDrawer(false)}>
            <div className="flex-col space-y-10 mx-8 text-center my-auto">
              <div>
                <Link href="/">HOME</Link>
              </div>
              <div>
                {workLink}
              </div>
              <div>
                <Link href="Playground">PLAYGROUND</Link>
              </div>
              <div>
                <Link href="AboutMe">ABOUT</Link>
              </div>
            </div>
          </Drawer>
        </div>

        <Link href="/" className="font-medium text-lg">
          NUTCHA ROMYANONT
        </Link>
        <div className="hidden md:block space-x-4 ml-auto text-sm">
          {workLink}
          <Link href="Playground">PLAYGROUND</Link>
          <Link href="AboutMe">ABOUT</Link>
        </div>
      </header>
      <main className="flex flex-col mx-[4vw] mb-7">
        {children}
      </main>

      
    </>
  );
}
