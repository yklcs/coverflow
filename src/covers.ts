import { animate, scroll } from "motion"

interface Cover {
  src: string
  title: string
  artist: string
}

type Axis = "x" | "y"

const zip = <X, Y>(xs: X[], ys: Y[]): [X, Y][] => xs.map((x, i) => [x, ys[i]])

const setup = ($container: HTMLDivElement, covers: Cover[]) => {
  for (const cover of covers) {
    const $wrapper = document.createElement("div")
    const $img = document.createElement("img")
    $img.src = cover.src
    $img.className = "cover-img"

    const $meta = document.createElement("div")
    const $title = document.createElement("span")
    const $artist = document.createElement("span")

    $title.innerText = cover.title
    $artist.innerText = cover.artist
    $meta.className = "cover-meta"
    $meta.appendChild($title)
    $meta.appendChild($artist)

    $wrapper.className = "cover-container"
    $wrapper.appendChild($img)
    $wrapper.appendChild($meta)
    $container.appendChild($wrapper)
  }
}

const logistic = (midpoint: number, steepness: number) => (x: number) =>
  -1 + 2 / (1 + Math.exp(-steepness * (x - midpoint)))

const bell = (midpoint: number, steepness: number) => (x: number) =>
  Math.exp(-steepness * (x - midpoint) ** 2)

const coverflow = ($container: HTMLDivElement, covers: Cover[], axis: Axis) => {
  setup($container, covers)

  const width = axis === "x" ? window.innerWidth / 4 : window.innerHeight / 3

  $container.style.overflow = axis === "x" ? "scroll hidden" : "hidden scroll"
  $container.style.scrollSnapType = `${axis} mandatory`
  $container.style.flexDirection = axis === "x" ? "row" : "column"
  $container.style.padding = axis === "x" ? `0 50%` : "100% 0"

  const $images = $container.querySelectorAll<HTMLImageElement>(".cover-img")
  const $wrappers =
    $container.querySelectorAll<HTMLDivElement>(".cover-container")

  const $covers = zip(Array.from($images), Array.from($wrappers))

  for (const [i, [$image, $wrapper]] of $covers.entries()) {
    $image.width = width
    $image.height = width
    $image.style.width = `${width}px`

    $wrapper.style.margin =
      axis === "x" ? `0 ${-0.25 * width}px` : `${-0.25 * width}px 0`

    scroll(
      animate($wrapper, {
        zIndex: ["1", "1000", "1"],
      }),
      {
        container: document.querySelector<HTMLDivElement>("#covers")!,
        target: $wrapper,
        offset: [0, 1],
        axis,
      }
    )

    scroll(
      ({ x, y }) => {
        const progress = axis === "x" ? x.progress : y.progress
        const rotate =
          60 * -logistic(0.5, 10)(progress) * (axis === "x" ? 1 : -1)
        const t = 200 * bell(0.5, 1000)(progress)
        const translate = 0.5 * width * logistic(0.5, 20)(progress)

        $image.style.transform = `translateZ(${t}px) translate${
          axis === "x" ? "X" : "Y"
        }(${translate}px) rotate${axis === "x" ? "Y" : "X"}(${rotate}deg)`
      },
      { container: $container, target: $image, axis }
    )
  }

  axis === "x"
    ? $container.scrollBy(
        $container.scrollWidth / 2 - $container.clientWidth / 2,
        0
      )
    : $container.scrollBy(
        0,
        $container.scrollHeight / 2 - $container.clientHeight / 2
      )
}

export { coverflow }
