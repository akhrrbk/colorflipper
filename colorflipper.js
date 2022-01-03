const button = document.querySelector("#changecolorbutton");
const p = document.querySelector("#displaycolorcode")

button.addEventListener('click', () => {
    const r = Math.floor(Math.random()*255 +1);
    const g = Math.floor(Math.random()*255 +1);
    const b = Math.floor(Math.random()*255 +1);
    // console.log(`${r} ${g} ${b}`)

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    p.innerHTML = `rgb(${r}, ${g}, ${b})`
    const p1 = Math.floor(Math.random()*80);
    console.log(p1)
    const p2 = Math.floor(Math.random()*20);
    console.log(p2)
    p.style.paddingLeft = `${p1}%`;
    p.style.paddingTop = `${p2}%`;
})