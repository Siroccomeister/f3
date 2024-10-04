//document$.subscribe(function() {

//custom max min header filter
var minMaxFilterEditor = function(cell, onRendered, success, cancel, editorParams){

    var end;

    var container = document.createElement("span");

    //create and style inputs
    var start = document.createElement("input");
    start.setAttribute("type", "number");
    start.setAttribute("placeholder", "Min");
    start.setAttribute("min", 0);
    start.setAttribute("max", 100);
    start.style.padding = "4px";
    start.style.width = "50%";
    start.style.boxSizing = "border-box";

    start.value = cell.getValue();

    function buildValues(){
        success({
            start:start.value,
            end:end.value,
        });
    }

    function keypress(e){
        if(e.keyCode == 13){
            buildValues();
        }

        if(e.keyCode == 27){
            cancel();
        }
    }

    end = start.cloneNode();
    end.setAttribute("placeholder", "Max");

    start.addEventListener("change", buildValues);
    start.addEventListener("blur", buildValues);
    start.addEventListener("keydown", keypress);

    end.addEventListener("change", buildValues);
    end.addEventListener("blur", buildValues);
    end.addEventListener("keydown", keypress);


    container.appendChild(start);
    container.appendChild(end);

    return container;
 }

//custom max min filter function
function minMaxFilterFunction(headerValue, rowValue, rowData, filterParams){
    //headerValue - the value of the header filter element
    //rowValue - the value of the column in this row
    //rowData - the data for the row being filtered
    //filterParams - params object passed to the headerFilterFuncParams property

        if(rowValue){
            if(headerValue.start != ""){
                if(headerValue.end != ""){
                    return rowValue >= headerValue.start && rowValue <= headerValue.end;
                }else{
                    return rowValue >= headerValue.start;
                }
            }else{
                if(headerValue.end != ""){
                    return rowValue <= headerValue.end;
                }
            }
        }

    return true; //must return a boolean, true if it passes the filter.
}


var table3 = new Tabulator("#GDMBR", {
    ajaxURL:"../assets/tables/GDMBR.json",
    height:450,
    layout:"fitDataFill",
//    autoColumns:true,
    columns:[
        {title:"Day#", field:"Day", frozen:true, width:70, editor:"input", headerFilter:"list", headerFilterParams:{valuesLookup:true, clearable:true},
            tooltip:function(e, cell, onRendered){
              //e - mouseover event
              //cell - cell component
              //onRendered - onRendered callback registration function    
              var el = document.createElement("div");
              el.style.backgroundColor = "#F7DC6F";
              el.innerText = cell.getValue() + " @ " + cell.getRow().getCell("When").getValue(); //return cells "field - value";
              return el; 
            },
        },
        {title:"Timestamp", field:"When",visible:false},
        {title:"Map", field:"Track", formatter:"link", 
            formatterParams:{
              label:"MAP/GPX",
              urlPrefix:"https://siroccomeister.github.io/f3/fr/maps/",
            },
            tooltip:function(e, cell, onRendered){
                //e - mouseover event
                //cell - cell component
                //onRendered - onRendered callback registration function    
                var el = document.createElement("div");
                el.style.backgroundColor = "#F7DC6F";
                el.innerText = "click to see gps map & profile : " + cell.getValue();
                return el; 
            },
        },
        {title:"Blog#", field:"Blog#", width:250, tooltip:true, formatter:"link", 
            formatterParams:{
              labelField:"Blog title",
              urlPrefix:"https://siroccomeister.github.io/f3/fr/blog/",
             },
        },
        {title:"Blog title", field:"Blog title",visible:false},
        {title:"Dist KM", field:"Dist km", width:100, formatter:"progress", 
            formatterParams:{
              min:30,
              max:200,
              color:["#D4EFDF", "#7DCEA0", "#52BE80"],
              legendColor:"#000000",
              legendAlign:"center",
              legend : true
            },
            headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="
        },
        {title:"Elv m", field:"Elv m", width:100, formatter:"progress", 
            formatterParams:{
              min:500,
              max:2000,
              color:["#D4EFDF", "#7DCEA0", "#52BE80"],
              legendColor:"#000000",
              legendAlign:"center",
              legend : true
            },
            headerFilter:"number", headerFilterPlaceholder:"at least...", headerFilterFunc:">="
        },
        {title:"Moving Time", field:"Moving Time"},
        {title:"Speed km/h", field:"Speed km/h"},
        {title:"Max Speed km/h", field:"Max Speed km/h"},
        {title:"Pace /km", field:"Pace /km",visible:false},
        {title:"Elapsed Time Pace /km", field:"Elapsed Time Pace /km",visible:false},
        {title:"Max Pace /km", field:"Max Pace /km",visible:false},
        {title:"Pace /100m", field:"Pace /100m",visible:false},
        {title:"Elv High m", field:"Elv High m"},
        {title:"Elv Low m", field:"Elv Low m"},
        {title:"Elev/Dist m/km", field:"Elev/Dist m/km"},
        {title:"Elev/Time m/h", field:"Elev/Time m/h"},
        {title:"Temp Celsius", field:"Temp Celsius"},
        {title:"KM cumulative", field:"KM cumulative"},
    ],
});