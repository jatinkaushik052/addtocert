var i=0;
document.querySelector('.itemCount').innerText=i;
document.getElementById('itemCount').innerHTML=i;
function add(val){
    document.getElementById("ItemList").innerHTML +="<li>"+val+"<input style='margin-left: 10px; padding: 2px 2px' type='button' value='x' onclick='remove()' </li>";
    i=i+1;
    document.querySelector('.itemCount').innerText=i;
    document.getElementById('itemCount').innerHTML=i;
    
}

function remove(){
    var ListItem=document.getElementsByTagName('li')
    for(var x=0; x<ListItem.length; x++)
    {
        ListItem[x].onclick=function(){
            this.parentNode.removeChild(this)
        }
    }
    i=i-1;
    document.querySelector('.itemCount').innerText=i;
    document.getElementById('itemCount').innerHTML=i;
}

function showCert(){
    const sidebarm=document.querySelector('.cart')
    sidebarm.style.display="flex"
    console.log("hello")
}
function hideCert(){
    const sidebarm=document.querySelector('.cart')
    sidebarm.style.display="none"
    console.log("hello")
}