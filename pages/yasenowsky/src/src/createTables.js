module.exports = {
  ш: function (information, id, name_of_table){
   let name = document.createElement('h3');
   name.innerHTML = name_of_table;
   name.style.fontSize ="22px";
   document.getElementById(id).appendChild(name);
   let table = document.createElement('table');
   let tr = document.createElement('tr');
   for(let i=0; i<information[0].length; i++ ){
        let data = document.createElement('th');
        if(i==0){
          data.innerHTML = "<input disabled = 'true' value = "+ information[0][i] + ">";
        }else{
          data.innerHTML = "<input  value = "+ information[0][i] + ">";
        }
        tr.appendChild(data);
   }
   table.appendChild(tr);
   for(let j = 1; j < information.length;j++){
      tr = document.createElement('tr');
      for(let i = 0;i<information[j].length;i++){
          if(i==0){
            data = document.createElement('th');
          } else{
            data = document.createElement('td');
          }
            data.innerHTML = "<input  type='text' value =" + information[j][i]+ ">";
          tr.appendChild(data);
      }//
      table.appendChild(tr);
    }
    table.setAttribute("id", id + "-1")
    document.getElementById(id).appendChild(table);
  },
  buildMyTable: function(viewModel){
    let div = document.getElementById("nado");
    div.innerHTML = '<table id = "my_table" data-bind = "foreach: phones"><table>';
    let tr = document.createElement('tr');
    for(let i=0; i< 5; i++ ){
        let data = document.createElement('td');
         if(i==0){
           data.innerHTML = "<input  disabled data-bind='textInput: name'>"
         }
         else if(i==1){
           data.innerHTML = "<input disabled = 'true' data-bind='textInput: company'>"
         }
         else if(i==2){
           data.innerHTML = "<input disabled = 'true' data-bind='textInput: gender'>"
         }
         else if(i==3){
           data.innerHTML = "<input disabled = 'true' data-bind='textInput: dispersia'>"
         }
         else if(i==4){
           data.innerHTML = "<input disabled = 'true' data-bind='textInput: math'>"
         }
         data.setAttribute('class', 'mystyle');
         tr.appendChild(data);
    }
    document.getElementById("my_table").appendChild(tr);
    ko.applyBindings(viewModel);
  },
  changeColorCells: function (name_of_block, color) {
    $(name_of_block).css('background-color', color);
  },
  deleteTable: function (name_of_block){
    document.getElementById(name_of_block).innerHTML ="";
  },
  changeColorText: function (name_of_block, color) {
    $(name_of_block).css('color', color);
  }
}
