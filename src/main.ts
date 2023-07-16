import "./style.css"
import { coverflow } from "./coverflow.ts"
import covers from "./covers.json"

const $root = document.querySelector<HTMLDivElement>("#app")!

coverflow($root, covers, window.innerWidth > window.innerHeight ? "x" : "y")
