

function takeAttendence()
{
    let std_no = document.getElementById("class_students").value;
   
    
    let s="";
    for(let i=1;i<=std_no;i++)
    {
        s = s+`<div class="grid_item">${i}</div> `
    }
    
    let grid = document.getElementById("atd_grid");
    grid.innerHTML=s;
    console.log(grid);

    
}