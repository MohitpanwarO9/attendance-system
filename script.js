
let present_std = [];

/*

let myfile={
    ClassName:{
        Attendence:{
            date1: arrya_of_attendece,
            date2: arrya_of_attendece,
        }
    }
}

*/


function takeAttendence() {
    let std_no = document.getElementById("class_students").value;


    let s = "";
    for (let i = 1; i <= std_no; i++) 
    {
        s = s + `<div class="grid_item" id="gridItem_${i}" onclick="onTakeAttendence(this.id)">${i}</div> `
        present_std.push(0);
    }

    let grid = document.getElementById("atd_grid");
    grid.innerHTML = s;
    //console.log(grid);

}

function onTakeAttendence(item_id) {

    let item = document.getElementById(item_id);
    let std_no = Number(item_id.substr(9));

    //console.log(std_no);

    if (item.style.background === "green") 
    {
        present_std[std_no - 1] = 0;
        item.style.background = "white";
    }
    else 
    {
        present_std[std_no - 1] = 1;
        item.style.background = "green"
    }

    //console.log(present_std);

    // item.style.background==="green"?item.style.background="white":item.style.background="green";
}

function saveAttendence() {
    let class_name = document.getElementById("class_name");

    console.log(class_name.value)
    if (class_name.value === "") 
    {
        alert("Please enter a vaild class Name");
        return;
    }
    else {
        if (present_std.length === 0) 
        {
            alert("Please enter Number of student & click on take attendence");
        }
        else 
        {
            localStorage.setItem(class_name.value, present_std.toString());
            console.log(present_std.toString());
            console.log(localStorage.getItem(class_name.value));
        }
        
        alert("Attendence saveed")
    }

}

function checkAttendence() {
    let class_name = document.getElementById("find_Class");

    if (class_name.value === "") 
    {
        alert("Please enter a vaild class Name");
        return;
    }
    else {
        let atd_string = localStorage.getItem(class_name.value);

        if (atd_string === null || atd_string === undefined) 
        {
            alert("Please enter a valid class name for attendence");
        }
        else 
        {
            console.log(atd_string);

            let s = "";
            let num = 1;
            for (let i = 0; i <= atd_string.length; i+=2) {

                // console.log(atd_string[i] + ` ${i}`);

                if(atd_string[i]=='1')
                {
                    s = s + `<div class="grid_item"   style="background:green;">${num}</div> `
                }
                else
                {
                    s = s + `<div class="grid_item"   style="background:red;">${num}</div> `
                }

                num+=1;
            }

            let grid = document.getElementById("checkatd_grid");
            grid.innerHTML = s;
        }
    }
}