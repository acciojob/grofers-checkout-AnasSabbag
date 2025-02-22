const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum=0;
	document.querySelectorAll(".price").forEach((p)=>{
		sum += Number(p.innerText);
	})

	
    const existingTotal = document.getElementById("ans");
    if (existingTotal) {
        existingTotal.remove();
    }

    // Create a new total row
    const tot = document.createElement("tr");
    tot.id = "ans"; 
    tot.innerHTML = `<td colspan="2">Total: ${sum}</td>`;

    
    document.querySelector("table").appendChild(tot);
	
};


getSumBtn.addEventListener("click", getSum);

