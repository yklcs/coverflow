import "./style.css"
import { coverflow } from "./covers.ts"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="covers">
  </div>
`
const container = document.querySelector<HTMLDivElement>("#covers")!

const covers = [
  {
    src: "https://coverartarchive.org/release-group/b1392450-e666-3926-a536-22c65f834433/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/e75c0549-ad55-39e3-8025-c72c5d4a3c5d/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/5c14fd50-a2f1-3672-9537-b0dad91bea2f/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/6e335887-60ba-38f0-95af-fae7774336bf/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/899b6d09-807e-4c18-a6d4-3642e00d6a3d/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/bbce0087-d386-4246-a51d-dbcdfdbe8fb2/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/05affa96-5959-32da-8d75-1c9eb985ca59/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/08aa7a6c-3e43-4459-87b2-e47faf3a088a/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/48140466-cff6-3222-bd55-63c27e43190d/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/fdd6c833-3c96-33cb-9917-72e15bcd34bc/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
  {
    src: "https://coverartarchive.org/release-group/6f9f6899-c0d3-311d-ae87-a10ae6bc53a9/front-1200",
    title: "OK Computer OKNOTOK 1997 2017",
    artist: "Radiohead",
  },
]

coverflow(container, covers, window.innerWidth > window.innerHeight ? "x" : "y")
