const new_year = new Date();
const year = new_year.getFullYear();
document.querySelector('#year').textContent = year


const modi = document.lastModified;
const lastupdate = new Date(modi);  
const timezone= 'UTC -7';

const formtdate = lastupdate.toLocaleString('en-Us');

document.getElementById('date').textContent =  formtdate;

