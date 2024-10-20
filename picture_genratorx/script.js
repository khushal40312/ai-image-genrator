const imagetyp = document.getElementById('inp')
let sbox1 = document.getElementById("container")
let sbox2 = document.getElementById("show-rslt")
let sbox3 = document.getElementById("h11")
let anu1btn = document.querySelector('.btn')
let shmr1 = document.getElementById("shmr")
let sbox4 = document.getElementById("shmr")
const apiKey = "JOGdTQaotIqPuuLyvA_syY5t5i4PG7VFAuyD1VsFgAY"
const url = "https://api.unsplash.com/search/photos?"


async function CW() {
    // location.reload();
    const res = await fetch(url  + `&query=${imagetyp.value}` + `&client_id=${apiKey}`);
    var dt = await res.json();
    // + `page=${page}`
    const results = dt.results;
    results.map((result) => {
        // console.log(dt)

        const img1 = document.createElement("img")
        img1.src = result.urls.regular;
        const imglink = document.createElement("a")
        imglink.href = result.links.html;
        imglink.target = "_blank"
        imglink.appendChild(img1)
        sbox2.appendChild(imglink)



    })
}

sbox1.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    CW();
    sbox4.innerHTML = `<button id="show-btn">Show more</button>`
    if(imagetyp.value!=""){
    const head1 = document.createElement("h4")
    head1.innerHTML = `showing results for :${imagetyp.value} </br>scroll down  `;
    sbox3.appendChild(head1)
    }
    else{

    }

})
// CW();

shmr1.addEventListener("click", () => {
    page++;
    CW();
})
