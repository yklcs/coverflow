import anime from "animejs"

const setupCovers = (element: HTMLDivElement) => {
  const coverSrcs = [
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
    "https://i.discogs.com/xhJFQosTXp2tJ1v06R6ZF-RPOOhF6LC4XBf8KvrfNMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTY2/OTczLTE1MDAwMzI4/MjEtNjI0My5qcGVn.jpeg",
  ]

  for (const coverSrc of coverSrcs) {
    const container = document.createElement("div")
    const img = document.createElement("img")
    img.src = coverSrc
    img.className = "cover-img"
    container.className = "cover-container"
    container.appendChild(img)
    element.appendChild(container)
  }
}

const animate = (element: HTMLDivElement, middle: number) => {
  const covers = element.querySelectorAll<HTMLImageElement>(".cover-img")
  const containers =
    element.querySelectorAll<HTMLImageElement>(".cover-container")

  // let middle = Math.floor(covers.length / 2)
  console.log(middle)
  for (const [i, cover] of covers.entries()) {
    const container = containers[i]
    container.style.zIndex = `-${Math.abs(middle - i)}`

    const x =
      i === middle
        ? 0
        : i <= middle
        ? (middle - i) * 150 + 500
        : (middle - i) * 150 - 500

    anime({
      targets: container,
      translateX: x,
    })

    anime({
      targets: cover,
      // translateX: x,
      rotateY: -(middle - i) * 5 - Math.sign(middle - i) * 10,
      perspective: 1000,
      // translateZ: -Math.abs(middle - i) * 10,
    })
  }
}

export { animate, setupCovers }
