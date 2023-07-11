import "./style.css"
import typescriptLogo from "./typescript.svg"
import viteLogo from "/vite.svg"
import { animate, setupCovers } from "./covers.ts"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="covers">
  </div>
`

const container = document.querySelector<HTMLDivElement>("#covers")!
setupCovers(container)

let middle = 7
animate(container, middle)
document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") {
    animate(container, --middle)
  } else if (event.key === "ArrowLeft") {
    animate(container, ++middle)
  }
})

animate(container, 8)
