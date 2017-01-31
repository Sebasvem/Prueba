
//La funcion pide los elementos y los agrega a una lista ademas de verificar que los elementos no sean negativos 

function addList(num){
	var count = 0;
	flag=true;
	arr=num.split(",");
	for(var i=0;i<arr.length;i++){
		if(Number.isInteger(Number(arr[i])) && arr[i] > 0){
			count=count+1;
		}else{
			alert("La lista debe ser de numeros enteros no negativos!!");
			flag = false;
			break;
		}
	}		
	if(flag===true){
		document.getElementById("demo").innerHTML = arr;
		return answer("Good");
	}else{		
		alert("Ingrese nuevamente la lista.")
		document.getElementById("demo").innerHTML = "Lista incorrecta";
		return answer("Bad");
	}
		
}

//La funcion encuentra la mayor combinacion posibles de los elementos de la lista

function answer(state) {    
	if(state === "Good"){
		arr.sort(function(a, b){return a - b});
		arr.reverse();
		document.getElementById("demo1").innerHTML = arr.join('');
		return "Good"
	}else{
		document.getElementById("demo1").innerHTML = "No es posible realizar una combinacion";
		return "Bad"
	}
}

function formu(){
	var aux = document.getElementById("inp").value; 
	//alert(aux.length);
	return addList(aux);
	
}

