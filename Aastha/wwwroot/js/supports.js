// JScript File

function addindrp(drp,data)
{
var r=data.split("^");
var i=0;
cleardrp(drp);
addindrpselect(drp);
for(i = 0; i < r.length-1; i++)
    {
	     var c=r[i].split("~");
	     var option = document.createElement("option");
         option.value = c[0];
         option.innerHTML = c[1];
         drp.appendChild(option);
    }

}


function addindrpselect(drp)
{
 var option = document.createElement("option");
 option.value = 0;
 option.innerHTML = "<--Select-->";
 drp.appendChild(option);
}

function cleardrp(drp)
{

    drp.options.length = 0;

//	var selectObj = drp;
//	var selectParentNode = selectObj.parentNode;
//	var newSelectObj = selectObj.cloneNode(false); // Make a shallow copy
//	selectParentNode.replaceChild(newSelectObj, selectObj);
//	return newSelectObj;
}

//var message="Function Disabled!";
// 
/////////////////////////////////////
//function clickIE4(){
//if (event.button==2){
//alert(message);
//return false;
//}
//}
// 
//function clickNS4(e){
//if (document.layers||document.getElementById&&!document.all){
//if (e.which==2||e.which==3){
//alert(message);
//return false;
//}
//}
//}
// 
//if (document.layers){
//document.captureEvents(Event.MOUSEDOWN);
//document.onmousedown=clickNS4;
//}
//else if (document.all&&!document.getElementById){
//document.onmousedown=clickIE4;
//}
// 
//document.oncontextmenu=new Function("alert(message);return false")


//function checkKeyCode(evt)
//{

//var evt = (evt) ? evt : ((event) ? event : null);
//var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
//if(event.keyCode==116)
//{
//evt.keyCode=0;
//return false
//}
//}
//document.onkeydown=checkKeyCode;

// if (document.all){  
//document.onkeydown = function (){  
//var key_f5 = 116; // 116 = F5  

//if (key_f5==event.keyCode){  
//event.keyCode = 27;  

//return false;  
//}  
//}  
//}  