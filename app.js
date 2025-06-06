const search = document.querySelector("#search")
const bloomStart = document.querySelector("#startDate")
// const bloomEnd = document.querySelector("#endDate")

const result = document.querySelector("#result")


const api = "http://10.69.0.17:3002/v1"

search.addEventListener("click", () => {
    const s = new Date(bloomStart.value)
    const start = s.getMonth()
    console.log(start)

    // const e = new Date(bloomEnd.value)
    // const end = e.getMonth() + 1
    searchFunction(start)
})

async function searchFunction(start) {
    const ans = await fetch(`${api}/flowers?date=${start}`, {
        method: "GET"
    })
    const data = await ans.json()
    console.log(data)

    while (result.firstChild) {
        result.firstChild.remove()
    }
    for (let i = 0; i < data.length; i++) {
        create(
            data[i].image,
            data[i].melliferous,
            data[i].name,
            data[i].startBloom,
            data[i].endBloom,
            data[i].description,
            data[i].propolis,
            data[i].nectar,
            data[i].pollen
        )
    }

}

function create(img, stars, name, start, end, desc, propolis, nectar, pollen) {
    const mainDiv = document.createElement("div")
    const createImg = document.createElement("img")

    const secondDiv = document.createElement("div")
    const createh2 = document.createElement("h2")

    const durationDiv = document.createElement("div")
    const beeimg = document.createElement("img")
    const floraison = document.createElement("p")

    const bold = document.createElement("p")

    const descr = document.createElement("p")

    const statDiv = document.createElement("div")

    const stat1 = document.createElement("div")
    const stat2 = document.createElement("div")
    const stat3 = document.createElement("div")

    const stat1p = document.createElement("p")
    const stat2p = document.createElement("p")
    const stat3p = document.createElement("p")

    const stat2n = document.createElement("p")
    const stat3n = document.createElement("p")





    const nectarProgress = document.createElement("progress")
    const pollenProgress = document.createElement("progress")

    const starDiv = document.createElement("div")

    result.appendChild(mainDiv)

    mainDiv.appendChild(createImg)
    createImg.src = img

    mainDiv.appendChild(secondDiv)

    secondDiv.appendChild(starDiv)

    for (let i = 0; i < stars; i++) {
        const starImg = document.createElement("img")
        starImg.src = "asset/star.svg"
        starDiv.appendChild(starImg)
    }

    secondDiv.appendChild(createh2)
    createh2.textContent = name

    secondDiv.appendChild(durationDiv)
    durationDiv.appendChild(beeimg)
    beeimg.src = "asset/bee.svg"

    durationDiv.appendChild(floraison)
    floraison.textContent = "Floraison"



    durationDiv.appendChild(bold)

    const month = ["Janvier", "Février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"]

    bold.textContent = `${month[start - 1]} - ${month[end - 1]}`

    secondDiv.appendChild(descr)
    descr.textContent = desc

    secondDiv.appendChild(statDiv)

    statDiv.appendChild(stat1)
    stat1.appendChild(stat1p)
    stat1p.textContent = "Propolis"
    if (propolis !== 0) {
        const yesImg = document.createElement("img")
        yesImg.src = "asset/yes.svg"
        yesImg.alt = "yes"
        stat1.appendChild(yesImg)



    } else {
        const noImg = document.createElement("img")
        noImg.src = "asset/no.svg"
        noImg.alt = "no"

        stat1.appendChild(noImg)

    }

    statDiv.appendChild(stat2)
    stat2.appendChild(stat2p)
    stat2p.textContent = "Nectar"
    if (nectar == 0) {
        const noImg = document.createElement("img")
        noImg.src = "asset/no.svg"
        noImg.alt = "no"

        stat2.appendChild(noImg)
    } else if (nectar == 1) {
        stat2.appendChild(stat2n)
        stat2n.textContent = nectar

        stat2.appendChild(nectarProgress)
        nectarProgress.setAttribute("value", 1)
        nectarProgress.setAttribute("max", 3)
    } else if (nectar == 2) {
        stat2.appendChild(stat2n)
        stat2n.textContent = nectar

        stat2.appendChild(nectarProgress)
        nectarProgress.setAttribute("value", 2)
        nectarProgress.setAttribute("max", 3)
    } else if (nectar >= 3) {
        stat2.appendChild(stat2n)
        stat2n.textContent = nectar

        stat2.appendChild(nectarProgress)
        nectarProgress.setAttribute("value", 3)
        nectarProgress.setAttribute("max", 3)
    }

    statDiv.appendChild(stat3)
    stat3.appendChild(stat3p)
    stat3p.textContent = "Pollen"
    if (pollen == 0) {
        const noImg = document.createElement("img")
        noImg.src = "asset/no.svg"
        noImg.alt = "no"

        stat3.appendChild(noImg)
    } else if (pollen == 1) {
        stat3.appendChild(stat3n)
        stat3n.textContent = pollen

        stat3.appendChild(pollenProgress)
        pollenProgress.setAttribute("value", 1)
        pollenProgress.setAttribute("max", 3)
    } else if (pollen == 2) {
        stat3.appendChild(stat3n)
        stat3n.textContent = pollen

        stat3.appendChild(pollenProgress)
        pollenProgress.setAttribute("value", 2)
        pollenProgress.setAttribute("max", 3)
    } else if (pollen >= 3) {
        stat3.appendChild(stat3n)
        stat3n.textContent = pollen

        stat3.appendChild(pollenProgress)
        pollenProgress.setAttribute("value", 3)
        pollenProgress.setAttribute("max", 3)
    }

    if (stars == 1) {
        starDiv.style.backgroundColor = "#7B1B0A"
    } else if (stars == 2) {
        starDiv.style.backgroundColor = "#0a4c7b"

    } else if (stars >= 3) {
        starDiv.style.backgroundColor = "#3f774a"

    }
    mainDiv.classList.add("mainDiv")
    secondDiv.classList.add("secondDiv")
    starDiv.classList.add("starDiv")

    statDiv.classList.add("statDiv")

    stat1.classList.add("stat")
    stat2.classList.add("stat")
    stat3.classList.add("stat")

    stat2n.classList.add("statn")
    stat3n.classList.add("statn")

    durationDiv.classList.add("duration")
    bold.classList.add("bold")
}
