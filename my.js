let i;
let j;

let table="<table cellpadding='5px' style='width:800px; height:50px; border:1px black solid'>";
for (j=1; j<=9; j=j+1){
    table=table+"<tr>";
    for (i=2; i<=9; i=i+1){
        table = table + "<td style='text-align: left; border: black 1px solid'>"+i+'x'+j+'='+i*j+"</td>";
    }
}table = table +"</table>";
document.write(table);