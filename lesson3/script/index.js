const date= new Date();
const year= date.getFullYear();

document.querySelector('#year').textContent=year;

const modi = document.lastModified;
const lastupdate = new Date(modi);  
const formtdate = lastupdate.toLocaleString('en-Us');

document.querySelector("#lastup").textContent=formtdate;