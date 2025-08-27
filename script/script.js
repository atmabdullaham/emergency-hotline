

// heart count
const hearts =  document.getElementsByClassName("heart");
for(heart of hearts){
    heart.addEventListener("click", function(){
        const heartCounter = document.getElementById("heart-counter");
        console.log(heartCounter.innerText);
        let count = parseInt(heartCounter.innerText);
        console.log(count);
        count += 1;
        heartCounter.innerText = count; 
    })
}

// copy count
const copys = document.getElementsByClassName("copy");
for(copy of copys){
    copy.addEventListener("click", function(e){
    const parent = e.target.parentElement.parentElement;
    const title = parent.querySelector(".card-title").innerText;
    const number = parent.querySelector(".number").innerText;
    navigator.clipboard.writeText(number)
    alert(`You clickd on ${title}`)
    console.log(parent);
    const copyCounter = document.getElementById("copy-counter");
    let count = parseInt(copyCounter.innerText);
    count += 1;
    copyCounter.innerText = count;
    })
}


// call button
const calls = document.getElementsByClassName("call");
for(call of calls){
    call.addEventListener("click", function(e){
    
    const balance = document.getElementById("balance");
    let intBalance = parseInt(balance.innerText);
    const cost = 20;
    
    if(intBalance>=cost){
        intBalance -= 20;
        balance.innerText = intBalance;
        const parent = e.target.parentElement.parentElement;
        const serviceName = parent.querySelector(".service-name").innerText;
        const number = parent.querySelector(".number").innerText;
        alert(`You are calling to ${number} and it is a number of ${serviceName}`)
       const historyContainer = document.getElementById("history");
       const div1Div2Container = document.createElement("div");
       div1Div2Container.classList.add("grid", "grid-cols-5",  "bg-gray-100", "rounded-md", "p-2", "gap-2")
       const div1 = document.createElement("div");
       div1.classList.add("col-span-3")
       const h2 = document.createElement("h2");
       h2.classList.add("text-lg", "font-medium")
       h2.innerText= serviceName;
       const p = document.createElement("p");
       p.classList.add("text-gray-500", "font-normal")
       p.innerText = number;
       div1.appendChild(h2);
       div1.appendChild(p);
       div1Div2Container.appendChild(div1);
       const div2 = document.createElement("div");
       div2.classList.add("col-span-2",  "flex", "justify-center", "items-center" )
       const now = new Date();
       const time = now.toLocaleTimeString("en-US");
       const timecontainer = document.createElement("p")
       timecontainer.innerText = time;
       div2.appendChild(timecontainer);
       div1Div2Container.appendChild(div2);
       historyContainer.appendChild(div1Div2Container)
       


    }else{
        alert(`Insufficient Balance, Recharge Please!`)
    }
    })
}


// clear history
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function(){
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = "";
})

