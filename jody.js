const main = document.querySelector("#main")


create()

function create() {
    for (let i = 1; i < 39; i++) {
        const jodyImg = document.createElement("img")

        main.appendChild(jodyImg)
        jodyImg.src = `./jody/jody${i}.jpeg`
        console.log(i)
    }

}



