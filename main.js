let home = document.getElementById("home")
let skill = document.getElementById("skills")
let gallary = document.getElementById("gallary")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let video_1 = document.getElementById("video_1")
let video_2 = document.getElementById("video_2")
let video_3 = document.getElementById("video_3")
let video_4 = document.getElementById("video_4")


// console.log(video.style)

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
        video_1.style.transform = "translateX(0px)"
        if (document.documentElement.scrollTop >= 1428) {
            video_2.style.transform = "translateX(0px)"
        }
        if (document.documentElement.scrollTop >= 1955) {
            video_3.style.transform = "translateX(0px)"
        }
        if (document.documentElement.scrollTop >= 2333) {
            video_4.style.transform = "translateX(0px)"
        }

        // console.log(video.style)
    }
});

console.log("done")