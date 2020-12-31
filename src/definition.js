const year=[];
const month=[];
const date=[];

for(let i=0;i<12;i++){
  month[i]=i+1;
}
for(let i=0;i<31;i++){
  date[i]=i+1;
}

for(let i=0;i<100;i++) {
let y=i+1920;
if (y > 2018) {
	year[i] = y+'年 (令和'+(y-2018)+'年)';
} else if (y > 1988) {
  year[i] = y+'年 (平成'+(y-1988)+'年)';
} else if (y > 1925) {
	year[i] = y+'年 (昭和'+(y-1925)+'年)';
} else if (y > 1911) {
	year[i] = y+'年 (大正'+(y-1911)+'年)';
}
}


export default{ year, month, date };