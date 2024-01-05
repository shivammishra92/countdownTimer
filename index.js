let endDate = "25 August, 2024 10:00 AM";
document.getElementById("end-Date").innerText = endDate;

let inputs = document.querySelectorAll("input");

function clock(){
    let end = new Date(endDate);
    let start = new Date();
    let diff = (end - start)/1000;
    //console.log(diff);

    inputs[0].value = Math.floor(diff/(60*60*24));
    inputs[1].value = Math.floor(diff/(60*60) % 24);
    inputs[2].value = Math.floor(diff/(60) % 60);
    inputs[3].value = Math.floor(diff % 60);

}

clock();

setInterval(()=>{
    clock()
},1000);