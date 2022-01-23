'use strict'
/*
var row= 5;
var column= 5;
var f = new Array();
let i = 0;
let j = 0;
for (i=0;i<row;i++) {
 f[i]=new Array();
 for (j=0;j<column;j++) {
     //Rows
     let dataObj = {};
     dataObj.rowIndex = i
     dataObj.columnIndex = j
  if(i ===0){
     dataObj.number = 0
     f[i][j]=dataObj;
  }
  if(i ===1){
    dataObj.number = 1
    f[i][j]=dataObj;
  }
  if(i ===2){
    dataObj.number = 2
    f[i][j]=dataObj;
  }
  if(i ===3){
    dataObj.number = 3
    f[i][j]=dataObj;
  }
  if(i ===4){
    dataObj.number = 4
    f[i][j]=dataObj;
  }
 }
}

console.log(f)

*/


function draw(cb){
    let table = document.createElement('table');
    table.id = 'gridTable';
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('dynamic').appendChild(table);

    // Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.className = 'container'
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement('th');
heading_2.className = 'container'
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.className = 'container'
heading_3.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
row_2.className = 'flex-ul';
let row_2_data_1 = document.createElement('td');
row_2.className = 'flex-item';
row_2_data_1.innerHTML = "1.";
let row_2_data_2 = document.createElement('td');
row_2.className = 'flex-item';
row_2_data_2.innerHTML = "James Clerk";
let row_2_data_3 = document.createElement('td');
row_2.className = 'flex-item';
row_2_data_3.innerHTML = "Netflix";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "2."; 
row_3_data_1.id = 'AmId'
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "Adam White";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "Microsoft";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);
}

//draw();
/*

//Click event one on all table
window.addEventListener('load',(event)=>{
    var tableg = document.getElementById("gridTable"); 
    tableg.onclick = function(event){
        let insideTd = (event.target.outerHTML).indexOf('td');
        if(insideTd>0){
            console.log(event.target.innerHTML);
            console.log('We are inside TD');
            //Increase cell value by +1
        }else{
            console.log('We are outside TD');
        }
    }
})
*/
/*
Check if any rows and columns abide to fibonacci rule
NB:-
*/
/*
function checkFib(arr,n){

    // Sort array
    arr.sort((a, b) => a - b);

    // After sorting, check if every
    // element is equal to the sum
    // of previous 2 elements
    for (i = 2; i < n; i++) {
        if ((arr[i - 1] + arr[i - 2]) != arr[i])
            return false;
    }

    return true;
}

var arr = [ 8, 63, 5, 13 ];

var n = arr.length;

console.log(checkFib(arr,n));

(function(){
    console.log('I am self invokng')

    window.addEventListener('load',(event)=>{
        var tableg = document.getElementById("gridTable"); 
        tableg.onclick = function(event){
            let insideTd = (event.target.outerHTML).indexOf('td');
            if(insideTd>0){
                console.log(event.target.innerHTML);
                console.log('We are inside TD');
                //Increase cell value by +1
            }else{
                console.log('We are outside TD');
            }
        }
    })

}
)()
*/
(()=>{
    let row = 5
    let column = 5
    //rowdata
    let rowData = {}
    //columndata
    let columndata = {}

    let data = (function generateData(){
        let f = new Array()
        let i = 0;
        let j = 0;
        try{
            for (i=0;i<row;i++) {
                f[i]=new Array();
                for (j=0;j<column;j++) {
                let dataObj = {};
                dataObj.rowIndex = i
                dataObj.columnIndex = j

                    //Rows
                 if(i ===0){
                    dataObj.number = 0
                    f[i][j]=dataObj;
                 }

                 if(i ===1){
                   dataObj.number = 1
                   f[i][j]=dataObj;
                 }

                 if(i ===2){
                   dataObj.number = 2
                   f[i][j]=dataObj;
                 }

                 if(i ===3){
                   dataObj.number = 3
                   f[i][j]=dataObj;
                 }

                 if(i ===4){
                   dataObj.number = 4
                   f[i][j]=dataObj;
                 }

                }
            }
            return f;
        }catch(err){
            alert('Refresh page and retry');
        }
    })()

    let pageLogic = new Object;
    pageLogic.drawTable =  (data)=>{
        let table = document.createElement('table');
        table.id = 'gridTable';
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById('dynamic').appendChild(table);
        if(data.length>0){
        data.forEach(rowData => {
            //Create row
        let rowElement = document.createElement('tr');
        rowElement.className = 'flex-ul'
         rowData.forEach(element=>{
            let tdElement = document.createElement('td');
            tdElement.className = 'flex-item'
            let rowIndex = '' + element.rowIndex;
            let columnIndex = '' + element.columnIndex;
            tdElement.id = rowIndex.concat('***',columnIndex);
            tdElement.innerHTML = element.number;
            rowElement.appendChild(tdElement);
        })
        tbody.appendChild(rowElement)
        pageLogic.addClickEvent();
        })
        }
    }

    pageLogic.addClickEvent = ()=>{
        window.addEventListener('load',(event)=>{
            var tableg = document.getElementById("gridTable"); 
            tableg.onclick = function(event){
                let insideTd = (event.target.outerHTML).indexOf('td');
                if(insideTd>0){
                    //Increase cell value by +1
                    pageLogic.filterTableData(event.target.id);
                }else{
                    console.log('We are outside TD');
                }
            }
        })
    }

    pageLogic.filterTableData = (id)=>{
        if(undefined != id){
            let rowIndex = id.split('***')[0]
            let columnIndex = id.split('***')[1]
            let tableTdElements = document.querySelectorAll('td');
            let relevantNodes = [];
            tableTdElements.forEach(td=>{
                td.className = 'flex-item'
                let nodeId = td.id
                let tdrow = nodeId.split('***')[0]
                let tdcolumn = nodeId.split('***')[1]
                if(tdrow === rowIndex || tdcolumn === columnIndex){
                    relevantNodes.push(td)
                }
            })
            pageLogic.updateCells(relevantNodes);
        }
    }

    pageLogic.updateCells = (nodes)=>{
        nodes.forEach(node=>{
            let rowIndex = node.id.split('***')[0]
            let columnIndex = node.id.split('***')[1]
            //Update html
            let cellValue = parseInt(node.innerHTML) + 1;
            node.innerHTML = cellValue;
            node.className = 'updated-cell';
            //Update data number
            data[rowIndex][columnIndex].number = cellValue;
        })
        pageLogic.getRowData();
    }

    pageLogic.getRowData= ()=>{
        data.forEach((item,index)=>{
            let rowContent = [];
            item.map((value)=>{
                let content = {};
                content.rowValue = value.number
                content.elementId = value.rowIndex+'***'+value.columnIndex
                rowContent.push(content);
            })
            rowData[index] = rowContent;
            rowData[index].fibonaci = false;
        })
        pageLogic.getColumnData()
    }

    pageLogic.getColumnData = ()=>{
        //All table cells
        let allTableCells = document.querySelectorAll('td');
        let cellArr = Object.entries(allTableCells);
        let columnArray = []
        //Loops through rows cells
        for(let i = 0;i<data.length;i++){
            for(let z = 0;z<data[i].length;z++){
                columnArray.push(data[i][z].columnIndex);
            }
        }

        columnArray = [...new Set(columnArray)];

        for(let i = 0;i<columnArray.length;i++){
        //Sort by column index
        let columns = [];
        cellArr.filter((item)=>{
            let cellCollumn = item[1].id.split('***')[1]
            if(cellCollumn == columnArray[i]){
                let content = {};
                content.columnValue = item[1].innerText
                content.elementId = item[1].id;
                columns.push(content);
            }
        })
        columndata[i] = columns;
        columndata[i].fibonaci = false;
        }
        pageLogic.setFibonacci()
    }

    pageLogic.setFibonacci = ()=>{
        if(Object.keys(rowData) != 0 && Object.keys(columndata)!= 0){
            let rowDataInfo = rowData;
            console.log(rowDataInfo[0])
            let columnDataInfo = columndata;
            console.log(columnDataInfo[0]);
        }else{
            alert('Reload page and try again')
        }
    }

    pageLogic.drawTable(data);
})()


/*
 //Generate Columns and check


        function checkFib(arr,n){
            // Sort array
            arr.sort((a, b) => a - b);
            // After sorting, check if every element is equal to the sum of previous 2 elements
            for (i = 2; i < n; i++) {
                if ((arr[i - 1] + arr[i - 2]) != arr[i])
                    return false;
            }
            return true;
        }
        
*/