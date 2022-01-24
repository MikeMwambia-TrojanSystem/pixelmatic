(()=>{

    'use strict'

    let row = 5
    let column = 5
    let clickedId = null;

    //rowdata
    let rowData = {}

    //columndata
    let columndata = {}
   
    /*
    @dev
    Self invoking function to create the data obj
    */
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
                if(i===0)dataObj.number = 0
                if(i===1)dataObj.number = 1
                if(i===2)dataObj.number = 2
                if(i===3)dataObj.number = 3
                if(i===4)dataObj.number = 4
                f[i][j]=dataObj;
                }
            }
            return f;
        }catch(err){
            alert('Refresh page and retry');
        }
    })()

    let pageLogic = new Object;

    /*
    @dev
    Draws a dynamic table
    */

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

    /*
    @dev
    Adds onclick event ot the whole table unlike to individual cells can improve performance on large datasets
    */

    pageLogic.addClickEvent = ()=>{
        window.addEventListener('load',(event)=>{
            var tableg = document.getElementById("gridTable"); 
            tableg.onclick = function(event){
                let insideTd = (event.target.outerHTML).indexOf('td');
                if(insideTd>0){
                    /*
                    @dev
                    Gets the value of cells in a specific row
                    */
                    clickedId = event.target.id;
                    pageLogic.getRowData();
                }else{
                    console.log('We are outside TD');
                }
            }
        })
    }

    /*
    @dev
    Gets the data in all rows
    */
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
        })
        pageLogic.getColumnData()
    }


    /*
    @dev
    Gets the column data acros the table
    */
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
                content.columnValue = parseInt(item[1].innerText)
                content.elementId = item[1].id;
                columns.push(content);
            }
        })
        columndata[i] = columns;
        }
        pageLogic.checkRowsForFibonaci();
    }


    /*
    @dev
    Checks the rows in the table whether the have fabinaci sequence
    */

    pageLogic.checkRowsForFibonaci = ()=>{
        if(Object.keys(rowData) != 0){

            let rowContentArr = Object.entries(rowData);
            let elementIDs = null;

            rowContentArr.map((item)=>{
                let ArrayD = Array.from(item[1],value => {
                    return value.rowValue
                })
                let ArrayDLength = ArrayD.length;
                if(ArrayDLength>0){
                    let status = confirmFibonaciS(ArrayD,ArrayDLength);
                    if(status === true){
                        elementIDs = Array.from(item[1],value =>{
                                return value.elementId;
                        })
                    }
                }
            })

       
                //Fibonaci Array Element IDs
            if(null != elementIDs && elementIDs.length>0){
                pageLogic.filterTableData(elementIDs,'Fibonaci');
            }
               
            
                         
            //Call next function
            pageLogic.checkColumnsForFibonaci()


        }else{
            alert('Reload page and try again')
        }
    }



    /*
    @dev
    Checks the columns in the table whether they have a fabinaci sequence
    */

    pageLogic.checkColumnsForFibonaci = ()=>{
        if(Object.keys(columndata) != 0){
            
            let columnContent = Object.entries(columndata);
            let elementIDs = null;


            columnContent.map((item)=>{
                let ArrayD = Array.from(item[1],value => {
                    return value.columnValue
                })
                let ArrayDLength = ArrayD.length;
                if(ArrayDLength>0){
                    let status = confirmFibonaciS(ArrayD,ArrayDLength);
                    if(status === true){
                    elementIDs = Array.from(item[1],value =>{
                            return value.elementId;
                    })
                    }
                }
            })


            if(null != elementIDs && elementIDs.length>0){
                pageLogic.filterTableData(elementIDs,'Fibonaci');
            }
            
            pageLogic.filterTableData(clickedId,'Addition');
            
        }else{
            alert('Reload page and try again')
        }
    }


    /*
    @dev
    Updates the UI and related front parameters
    */

    pageLogic.filterTableData = (id,flag)=>{
        let tableTdElements = document.querySelectorAll('td');
        if(flag ==='Fibonaci'){
            id.forEach(element=>{
                let rowIndex = element.split('***')[0]
                let columnIndex = element.split('***')[1]
                let node = document.getElementById(element)
                //Update html
                let cellValue = parseInt(0);
                node.innerHTML = cellValue;
                node.className = 'fibonaci-cell';
                //Update data number
                data[rowIndex][columnIndex].number = cellValue;
            })
        }else if(flag ==='Addition'){
            if(undefined != id){
                let rowIndex = id.split('***')[0]
                let columnIndex = id.split('***')[1]
                let relevantNodes = [];
                tableTdElements.forEach(td=>{
                    let nodeId = td.id
                    let tdrow = nodeId.split('***')[0]
                    let tdcolumn = nodeId.split('***')[1]
                    if(tdrow === rowIndex || tdcolumn === columnIndex){
                        relevantNodes.push(td)
                    }
                })
                pageLogic.updateCells(relevantNodes);
            }else{
                alert('Element ID undefined')
            }
        }
        setTimeout(function(){
            tableTdElements.forEach(td=>{
                td.className = 'flex-item'
            })
        },2000)
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
    }

    /*
    @dev
    Takes array and length of array then determines whether it's a fibonaci sequence
    */
    function confirmFibonaciS(arr,n){
        if(undefined != arr){
        // Sort array
        arr.sort((a, b) => a - b);
        // After sorting, check if every element is equal to the sum of previous 2 elements
        for (let i = 2; i < n; i++) {
            if ((arr[i - 1] + arr[i - 2]) != arr[i])
                return false;
        }
        
        return true;
    }
    }

    //Initiater function
    pageLogic.drawTable(data);

})()
