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

const coverflow = ($container: HTMLDivElement, covers: Cover[], axis: Axis) => {
  setup($container, covers)

  const width = axis === "x" ? window.innerWidth / 4 : window.innerHeight / 3.5

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

    // $wrapper.style.margin =
    // axis === "x" ? `0 ${-0.1 * width}px` : `${-0.1 * width}px 0`

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

    const transformation =
      axis === "x"
        ? [
            `translateX(${-0.1 * width}px) rotateY(40deg) `,
            `translateX(${-0.3 * width}px) rotateY(40deg) `,
            `translateX(${0 * width}px) scale(1.2)`,
            `translateX(${0.3 * width}px) rotateY(-40deg) `,
            `translateX(${0.1 * width}px) rotateY(-40deg) `,
          ]
        : [
            `translateY(${-0.1 * width}px) rotateX(-45deg) `,
            `translateY(${-0.25 * width}px) rotateX(-45deg) `,
            `translateY(${0 * width}px) scale(1.1)`,
            `translateY(${0.25 * width}px) rotateX(45deg) `,
            `translateY(${0.1 * width}px) rotateX(45deg) `,
          ]

    const $debug = document.createElement("span")
    $debug.style.zIndex = "10000"
    $debug.style.position = "absolute"
    $debug.style.left = "0"
    $debug.style.top = "-1em"
    $wrapper.appendChild($debug)

    scroll(
      ({ x }) => {
        // const translate = (0.5 - x.progress) * -0.1 * width
        const rotate = (0.5 - x.progress) * 80
        const translate =
          // -0.2 * width * Math.sin((((0.5 - x.progress) * 3) / 2) * 2 * Math.PI)
          3 * width * (0.5 - x.progress) ** 3

        $debug.innerHTML = `${x.progress}`
        $image.style.transform = `translateX(${translate}px) rotateY(${rotate}deg)`
        // if (x.progress < 0.45) {
        //   $image.style.transform = `translateX(${-0.3 * width}px) rotateY(${
        //     (x.progress - 0.5) * 40
        //   }deg)`
        // } else if (x.progress > 0.55) {
        //   $image.style.transform = `translateX(${0.3 * width}px) rotateY(${
        //     (x.progress - 0.5) * 40
        //   }deg)`
        // } else {
        //   $image.style.transform = `translateX(${0 * width}px) rotateY(0deg)`
        // }
      },
      { container: $container, target: $image, axis }
    )

    // scroll(
    //   animate($image, {
    //     transform: transformation,
    //   }),
    //   {
    //     container: document.querySelector<HTMLDivElement>("#covers")!,
    //     target: $image,
    //     axis,
    //   }
    // )
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
