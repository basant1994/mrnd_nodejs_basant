exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum=0;
	for(var i=0;i<arrayOfNums.length;i++)
		sum+=arrayOfNums[i];
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var dummy=[],max,sum=0;
	for(var i=0;i<arrayOfNums.length;i++)
	{
		if(dummy[arrayOfNums[i]]!=1){
			dummy[arrayOfNums[i]]=1;
			sum+=arrayOfNums[i];
		}
	}
	return sum;
}

exports.ReverseString = function(str){
	str=str.split("").reverse("").join("");
	return str;
}

exports.ReverseArrayOfStrings = function(arrayOfStrings){
	return arrayOfStrings.reverse();
}