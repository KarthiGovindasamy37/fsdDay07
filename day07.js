document.addEventListener("DOMContentLoaded",getdata)
async function getdata(){
    let res = await fetch("https://restcountries.com/v3.1/all")
   let data =await res.json()
    console.log(data);
    let asian=data.filter((ele)=>{
        return ele.region=="Asia"
    })
    let ul1=document.querySelector(".ul1")
    asian.forEach(ele => {
        let li=document.createElement("li")
        li.innerText=ele.name.common
        ul1.appendChild(li)
    });
    let pop=data.filter(ele=>ele.population<200000)
    let ul2=document.querySelector(".ul2")
    pop.forEach(ele=>{
        let li=document.createElement("li")
        li.innerText=ele.name.common
        ul2.appendChild(li)
    })
    let population=[]
    data.forEach(ele=>population.push(ele.population))
    
    let totalPopulation=population.reduce((pre,cur)=>pre+cur)
    document.querySelector(".pop").innerText=`Total Population of all Countries = ${totalPopulation}`
    
    let flexbox=document.querySelector(".flex")
    
    data.forEach(ele=>{

        let boxdiv=document.createElement("div")
        boxdiv.classList.add("box")

        let countrydiv=document.createElement("div")
        countrydiv.classList.add("name")
        countrydiv.innerText=ele.name.common
        boxdiv.appendChild(countrydiv)

        let flagimg=document.createElement("img")
       
        flagimg.setAttribute("height","150 px")
        flagimg.setAttribute("width","100 px")
        flagimg.setAttribute("src",`${ele.flags.png}`)
        boxdiv.appendChild(flagimg)

        let capitaldiv=document.createElement("div")
        capitaldiv.classList.add("cap")
        capitaldiv.innerText=ele.capital[0]
        boxdiv.appendChild(capitaldiv)

        flexbox.append(boxdiv)

    })
    
}