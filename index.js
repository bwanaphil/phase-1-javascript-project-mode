document.addEventListener("DOMContentLoaded", () =>{
    let url = "https://dog.ceo/api/breeds/image/random"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let imgDiv = document.createElement("div")
        let image = document.createElement("img")
        image.src = data.message
        let btn = document.createElement("button")
        btn.textContent = "Get another dog"
        imgDiv.appendChild(image)
         
        document.querySelector("body").appendChild(imgDiv)
        document.querySelector("body").appendChild(btn)

        btn.addEventListener("click", () => {
           window.location.reload()
        })
    })
})