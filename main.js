let home = document.getElementById("home")
let skill = document.getElementById("skills")
let gallary = document.getElementById("gallary")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let video = document.getElementById("video")


console.log(skill, gallary, about, contact)

function getCurrentURL(event) {
    // console.log(event.target.innerText)
    let ele = document.getElementsByTagName('span')
    for (let index = 0; index < ele.length; index++) {
        if (event.target.innerText === ele[index].innerHTML) {
            ele[index].setAttribute('class', "text-link active")
            // console.log(ele[index].innerHTML)
            // console.log(event.target.innerText)
            // console.log(ele[index].innerHTML)
        } else {
            ele[index].setAttribute('class', "text-link")
        }
    }
}


window.addEventListener('scroll', () => {
    // console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop < 390) {
        skill.setAttribute("class", "text-link ")
        home.setAttribute("class", "text-link active")
        gallary.setAttribute("class", "text-link")
        about.setAttribute("class", "text-link")
        contact.setAttribute("class", "text-link")
    }
    else if (document.documentElement.scrollTop >= 390 && document.documentElement.scrollTop < 1012) {
        skill.setAttribute("class", "text-link active")
        gallary.setAttribute("class", "text-link")
        about.setAttribute("class", "text-link")
        home.setAttribute("class", "text-link")
        contact.setAttribute("class", "text-link")
    }
    else if (document.documentElement.scrollTop >= 1012) {
        skill.setAttribute("class", "text-link")
        gallary.setAttribute("class", "text-link active")
        about.setAttribute("class", "text-link")
        home.setAttribute("class", "text-link")
        contact.setAttribute("class", "text-link")
        // video.style.transform ="translateX(0px)"
        console.log(video.style)
    }
});

console.log("done")