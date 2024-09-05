const columns=document.getElementsByClassName('column');
for(let i=0;i<columns.length;i++){
columns[i].addEventListener('mouseover',function(){
  this.style.backgroundColor='gray';});

  columns[i].addEventListener('mouseout',function(){
    this.style.backgroundColor='#000000';});}