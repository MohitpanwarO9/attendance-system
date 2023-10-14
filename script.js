
let present_std =[];

function takeAttendence()
{
    let std_no = document.getElementById("class_students").value;
   
    
    let s="";
    for(let i=1;i<=std_no;i++)
    {
        s = s+`<div class="grid_item" id="gridItem_${i}" onclick="onTakeAttendence(this.id)">${i}</div> `
        present_std.push(-1);
    }
    
    let grid = document.getElementById("atd_grid");
    grid.innerHTML=s;
    console.log(grid);

}

function onTakeAttendence(item_id){

    let item = document.getElementById(item_id);
    let std_no = Number(item_id.substr(9));
    
    console.log(std_no);

    if(item.style.background==="green")
    {
        present_std[std_no-1]=-1;
        item.style.background="white";
    }
    else
    {
        present_std[std_no-1]=1;
        item.style.background="green"
    }

    console.log(present_std);

    // item.style.background==="green"?item.style.background="white":item.style.background="green";
}

function saveAttendence()
{
    
}