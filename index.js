
function createEle(tagname,attrName,attrValue){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrName,attrValue);
    
    

    return ele;    
}


function createEleVa(tagname,attrName,attrValue,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrName,attrValue);
    ele.innerHTML=content

    return ele;    
}

function createTag(tagname){
    let tag=document.createElement(tagname);
      
    return tag;
}

function createEleTD(tagname,content){
    let tag=document.createElement(tagname);
    tag.innerHTML=content

    return tag;
}


var table=createEle("table","class","table");

var thead=createEle("thead","class","thead-light");

var tr1=createTag("tr");

var th1=createEleVa("th","scope","col","First")

var th2=createEleVa("th","scope","col","Last")

var tbody=createTag("tbody")

var tr2=createTag("tr");

var td1=createEleTD("td","Mark")

var td2=createEleTD("td","Otto");

tr1.append(th1,th2)
tr2.append(td1,td2)

thead.append(tr1);
tbody.append(tr2);

table.append(thead,tbody)

document.body.append(table);

