
function main (){
    const pane1 = document.createElement("div");
    const pane2 = document.createElement("div");
    const bigDiv = document.createElement("div");
    const textbox = document.createElement("textarea");
    const heading = document.createElement("h2");
    const subhead = document.createElement("p");
    heading.innerHTML = "TASK LIST";
    subhead.innerHTML = "Add tasks to your list by typing in the right and press enter. You may the view pending task below.";
    subhead.setAttribute("id", "subhead")
    pane1.setAttribute("id", "pane-div-1");
    pane2.setAttribute("id", "pane-div-2");
    bigDiv.setAttribute("id", "big-container");
    textbox.setAttribute("id", "textbox");
    textbox.setAttribute("type", "text");
    textbox.setAttribute("placeholder", "I need to...");
    textbox.setAttribute("name", "typed");
    document.body.appendChild(pane1);
    document.body.appendChild(pane2);
    pane1.appendChild(heading);
    pane2.appendChild(textbox);
    pane1.appendChild(subhead);
    pane1.appendChild(bigDiv);

    var clrBtn = document.createElement("button");
    clrBtn.setAttribute("type", "button");
    clrBtn.setAttribute("id","button");
    clrBtn.innerHTML = "Clear";
    pane2.appendChild(clrBtn); 
  
    textbox.addEventListener("keydown", create);

    // clrBtn.addEventListener("click", function(){
    //   var list = null;
    //   localStorage.setItem("list", JSON.stringify(list));
    //   console.log(list);
    // });

  }
  
  main();

  var list = [];

  var i = 0;

  
  
 
  function create(event){
  
    var key = event.code;
    var value = textbox.value;
  
    if(key==="Enter" && value.length !== 0){
      event.preventDefault();
      
      
      console.log(value.length);
      
     
      var div = document.createElement("div");
      var edit = document.createElement("button");
      var mark = document.createElement("input");
      var remove = document.createElement("button");
      var leftdiv = document.getElementById("big-container");
      var todotext = document.createElement("p");
  
  
      todotext.setAttribute("id", "todotext");
  
      var up = value.charAt(0).toUpperCase();
      var text = up + value.slice(1, value.length);
      todotext.innerHTML = text;
      
      div.setAttribute("id", "container");
      mark.setAttribute("type", "checkbox");
      mark.setAttribute("id", "mark");
      remove.setAttribute("id", "remove");
      remove.setAttribute("class", i);
      edit.setAttribute("id", "edit");  
      leftdiv.appendChild(div);
      div.appendChild(todotext);
      div.appendChild(edit);
      div.appendChild(mark);
      div.appendChild(remove);
      var line = document.createElement("div");
      todotext.appendChild(line);
      i++;
     
  
      
      list.push(text);
      localStorage.setItem("list", JSON.stringify(list));
      
  
      
      textbox.value = "";
  
  
      edit.addEventListener("click", function(event){
        console.log(event.path[1].children[0].innerText);
        var newText = event.path[1].children[0].innerText;
        var indx = event.path[1].children[3].className;
        console.log(event.path[1].children[3].className)
        newText = prompt("What you want to add:", newText);

        if(newText==""){
          alert("You haven't written any thing")

        }
        else{
          var up = newText.charAt(0).toUpperCase();
        var text = up + newText.slice(1, newText.length);

        todotext.innerHTML =  text;
        list[indx] = todotext.innerHTML;
        localStorage.setItem("list", JSON.stringify(list));
        }

        
        
      });
      
      
  
      mark.addEventListener('change', function(e){
        if(mark.checked){
          line.setAttribute("id", "line-for");     
         }
         else{
           line.setAttribute("id", "line-back");
         }
  
      });


  
      remove.addEventListener("click", function(event){
        leftdiv.removeChild(div);
      
        var delEle = event.path[1].children[0].innerText;

        list = list.filter(function(ele){
           return ele!==delEle;
        }); 

        localStorage.setItem("list", JSON.stringify(list));

        
      });
  
      
  
  
  
      
      }
    else if(key==="Enter" && value.length == 0){
      event.preventDefault();
    }
      
  }
  
  
  
  
  var storedList = localStorage.getItem("list");
  
  if(storedList!==null){
    list = JSON.parse(storedList);
  }


  
  function print(){
  
  list.forEach(function (value, index){
  
      var div = document.createElement("div");
      var edit = document.createElement("button");
      var mark = document.createElement("input");
      var remove = document.createElement("button");
      var leftdiv = document.getElementById("big-container");
      var todotext = document.createElement("p");
  
  
      todotext.setAttribute("id", "todotext");
      
      var up = value.charAt(0).toUpperCase();
      
      todotext.innerHTML = up + value.slice(1, value.length);
      
      div.setAttribute("id", "container");
      mark.setAttribute("type", "checkbox");
      mark.setAttribute("id", "mark");
      edit.setAttribute("id", "edit");  
      remove.setAttribute("id", "remove");    
      leftdiv.appendChild(div);
      div.appendChild(todotext);
      div.appendChild(edit);
      div.appendChild(mark);
      div.appendChild(remove);
      var line = document.createElement("div");
      todotext.appendChild(line);
  
     
    
      textbox.value = "";
      
      
      edit.addEventListener("click", function(event){
        console.log(event.path[1].children[0].innerText);
        var newText = event.path[1].children[0].innerText;

        newText = prompt("What you want to add:", newText);

        if(newText==""){
          alert("You haven't written any thing")

        }
        else{

        var up = newText.charAt(0).toUpperCase();
        var text = up + newText.slice(1, newText.length);

        todotext.innerHTML =  text;
        
        list[index] = todotext.innerHTML;
        localStorage.setItem("list", JSON.stringify(list));
        }
        
      });
  
      mark.addEventListener('change', function(e){
        
  
        if(mark.checked){
          line.setAttribute("id", "line-for");     
         }
         else{
           line.setAttribute("id", "line-back");
         }
  
      });
  
      remove.addEventListener("click", function(event){
        // del(index);
        leftdiv.removeChild(div);
        
        var list = JSON.parse(localStorage.getItem("list"));
        console.log(list);
        var delEle = event.path[1].children[0].innerText;

        list = list.filter(function(ele){
           return ele!==delEle;
        }); 
        console.log(list);

        localStorage.setItem("list", JSON.stringify(list));
       
      });
  
  });


}

print();




    var clrBtn = document.getElementById("button");

    clrBtn.addEventListener("click", function(){
      var prnt = document.getElementById("big-container");
      prnt.innerHTML = "";
      list = [];
      localStorage.setItem("list",JSON.stringify(list));
    })

  // function del(index){
  //     var list = JSON.parse(localStorage.getItem("list"));
  //     list.splice(index, 1);
  //     localStorage.setItem("list", JSON.stringify(list));
     

  // }