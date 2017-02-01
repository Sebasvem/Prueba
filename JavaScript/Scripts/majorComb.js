//La funcion pide los elementos y los agrega a una lista ademas de verificar que los elementos no sean negativos 

function addList(num){
	flag=true;
	arr=num.split(",");
	for(var i=0;i<arr.length;i++){
		if(Number.isInteger(Number(arr[i])) && arr[i] > 0){		
		}else{
			alert("La lista debe ser de numeros enteros no negativos!!");
			
			flag = false;
			break;
		}
	}
	//alert(arrAux);	
	if(flag===true){
		document.getElementById("demo").innerHTML = arr;
		return answer("Good",arr);
	}else{		
		alert("Ingrese nuevamente la lista.")
		document.getElementById("demo").innerHTML = "Lista incorrecta";
		return answer("Bad");
	}
		
}

//La funcion encuentra la mayor combinacion posibles de los elementos de la lista

function answer(state, array){  
	var indArr=0;
	if(state === "Good"){		
		//array.sort(function(a, b){return a - b});
		//array.reverse();
		indArr=majorNum(array);
		document.getElementById("demo1").innerHTML = indArr
		return "Good"
	}else{
		document.getElementById("demo1").innerHTML = "No es posible realizar una combinacion";
		return "Bad"
	}
}

function formu(){
	//var d = "22";
	var aux = document.getElementById("inp").value; 
	//alert(d.length);
	return addList(aux);
	
}


function majorNum(list){
	
  var comb = 0;
  function permut(lista, temp) {
    var auxArr;
    temp = temp || [];
    lista.forEach(function(x,i){
      auxArr = lista.splice(i,1);
      var num = temp.concat(auxArr).join("");
      comb = !lista.length && comb < num ? num : comb;
      permut(lista.slice(),temp.concat(auxArr));
      lista.splice(i,0,auxArr[0]);
    });
  }
  permut(list);  
  return comb;
}

