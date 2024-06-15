function mincost(arr)
{ 
//write your code here
// return the min cost
	let cost=0;
	arr.sort((a,b)=>a-b);
	while (arr.length > 1) {
		const newarr=arr.shift()+arr.shift();
		cost+=newarr;
		arr.push(newarr);
		arr.sort((a,b)=>a-b);
	}
	return cost;
  
}
cosole.log(mincost([4,3,2,6]);

module.exports=mincost;
