const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum=0;
	document.querySelectorAll(".price").forEach((p)=>{
		sum += Number(p.innerText);
	})

	const tot = document.createElement("tr");
	tot.innerHTML =`<td>Total  ${sum}</td>`;
	document.body.appendChild(tot);
	
};


getSumBtn.addEventListener("click", getSum);

