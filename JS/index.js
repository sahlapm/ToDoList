//Function for validation
const Validation = (callback) => 
{
    var isVerified = false;
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    if (username == 'admin' && password == '12345') {
        isVerified = true;
    }
    callback(isVerified);
}
//Function for navigation to next page(callback)
function Navigate(value)
{
    if (value == true) 
    {
        window.location.href = 'todolist.html';
    }
    else 
    {
        alert('Invalid login credentials');
    }
}

// Function to fetch items from given URL(ajax call)

   function FetchDataFromAPI() {
          var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              var data = JSON.parse(this.responseText);

              //Generating rows for table
              var ToDoTable = document.getElementById('ToDoTable').getElementsByTagName('tbody')[0];;
  
              for (let i = 0; i < data.length; i++) 
              {
                  let output = "<th scope='row'>" + (i + 1).toString() + "</th>" +
                      "<td>" + data[i].title + "</td>";
                  if (data[i].completed == true)
                  {
                      output += '<td><input type="checkbox" checked disabled></td>';
                  }
                  else 
                  {
                      output += '<td><label><input type="checkbox" onclick="StausCheck(this);"></label></td>';
                  }
                  ToDoTable.insertRow().innerHTML = output;
              }
          }
      }
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
      xhttp.send();

  }
//Function to check Status tick count(Promise)
var statusCount=0;
  function StausCheck(cBox)
{
    let promise=new Promise(function(resolve,reject)
    {
        if(cBox.checked)
        {
         statusCount+=1;
        }
        else
        {
         statusCount-=1;
        }
        resolve(statusCount);
    })
    promise.then(function(val)
    {
      if(val==5)
      {
         alert("Congrats. 5 Tasks have been Successfully Completed");
      }
    }
    )
    .catch(function(err)
    {
        alert(err);
    }

    )
}







 