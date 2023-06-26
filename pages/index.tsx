import React from "react";
import Drawer from "@mui/material/Drawer";
import Image from "next/image"
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Squash as Hamburger } from "hamburger-react";
import Layout from '../components/layout';

export default function MyApp() {
  return (<Layout home>
    <div className="font-light flex flex-col justify-center md:flex-row md:inline-flex md:items-center md:mt-56 md:mb-64">
      <div className="md:w-1/2 md:ml-24">
        <p className="text-white my-7 text-3xl  leading-relaxed">Hello, I am <span className="font-bold">NUTCHA</span></p>
        <div className="hidden md:block"> {/* Big Version Only */}
          <p className="text-white my-7 text-xl md:text-2xl lg:text-3xl">
            <span className="leading-10">
              A <span className="font-bold">product designer</span> with a <span className="font-bold">visual design</span> background aiming to create a valuable experience for everyone.
            </span>
          </p>
          <p className="text-white my-7 text-xl md:text-2xl lg:text-3xl leading-relaxed">
            <span className="leading-10">
              I am currently pursuing a <span className="font-bold">Master’s degree in Interaction and UX/UI Design.</span>
            </span>
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src="/images/nchlogo.gif" className="mx-auto md:w-150" alt="GIF" />
      </div>
      <div className="md:hidden"> {/* Mobile Version Only */}
        <p className="text-white my-7 text-xl leading-relaxed">
          A <span className="font-bold">product designer</span> with a <span className="font-bold">visual design</span> background aiming to create a valuable experience for everyone.
        </p>
        <p className="text-white my-7 text-xl leading-relaxed">I am currently pursuing a<span className="font-bold"> Master’s degree in Interaction and UX/UI Design.</span></p>
      </div>
    </div>


    <section id="work">
      <div className="flex items-center my-7">
        <h2 className="text-white text-xl mr-4">My Projects</h2>
        <div className="flex-grow border-b-2 border-gray-400 " />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-4">
        <div>
          <Link href="/CinemAR">
            <img src="/images/CinemARCover.gif" alt="CinemAR" className="w-full h-auto" />
          </Link>
          <p className="mt-4 text-white lg:text-xl font-bold">CinemAR</p>
          <p className="text-white lg:text-l">AR | UX / UI</p>
        </div>
        <div>
          <Link href="/HealthPath">
            <img src="/images/healthpath_cover.png" alt="HealthPath" className="w-full h-auto" />
          </Link>
          <p className="mt-4 text-white font-bold lg:text-xl">HealthPath</p>
          <p className="text-white lg:text-l">UX / UI</p>
        </div>
        <div>
          <Link href="/Lingumate">
            <img src="/images/lingumate-imgfinal.png" alt="Lingumate" className="w-full h-auto" />
          </Link>
          <p className="mt-4 text-white lg:text-xl font-bold">Lingumate</p>
          <p className="text-white lg:text-l">UX / UI</p>
        </div>
        <div>
          <Link href="/VRWorkspace">
            <img src="/images/VR_wsp_01.gif" alt="VRWorkspace" className="w-full h-auto" />
          </Link>
          <p className="mt-4 text-white lg:text-xl font-bold">VR Workspace</p>
          <p className="text-white lg:text-l">Spatial UX / UI</p>
        </div>
        <div>
          <Link href="/NAYA">
            <img src="/images/NAYA.gif" alt="NAYA" className="w-full h-auto" />
          </Link>
          <p className="mt-4 text-white lg:text-xl font-bold">NAYA Re-design</p>
          <p className="text-white lg:text-l">Rebranding</p>
        </div>
      </div></section>

  </Layout>
  );
}
