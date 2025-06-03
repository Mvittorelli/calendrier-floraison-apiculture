const search = document.querySelector("#search")
const bloomStart = document.querySelector("#startDate")
const bloomEnd = document.querySelector("#endDate")

const result = document.querySelector("#result")


const api = "http://10.69.0.17:3002/v1"

search.addEventListener("click", () => {
    const s = new Date(bloomStart.value)
    const start = s.getMonth() + 1
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





    result.appendChild(mainDiv)

    mainDiv.appendChild(createImg)
    createImg.src = img

    mainDiv.appendChild(secondDiv)

    secondDiv.appendChild(createh2)
    createh2.innerText = name

    secondDiv.appendChild(durationDiv)
    durationDiv.appendChild(beeimg)
    beeimg.src = "/asset/bee.svg"

    durationDiv.appendChild(floraison)
    floraison.innerText = "Floraison"

    durationDiv.appendChild(bold)
    floraison.innerText = `${start} - ${end}`

    secondDiv.appendChild(descr)
    descr.innerText = desc

    secondDiv.appendChild(statDiv)

    statDiv.appendChild(stat1)
    statDiv.appendChild(stat2)
    statDiv.appendChild(stat3)

    stat1.appendChild(stat1p)
    stat1p.innerHTML("")
    stat2.appendChild(stat2p)
    stat3.appendChild(stat3p)







}
