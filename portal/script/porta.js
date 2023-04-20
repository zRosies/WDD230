// const new_year = new Date();
// const options = {year:'long'}
// const year = new_year.toLocaleString('en-Us', options);


const modi = document.lastModified;
const lastupdate = new Date(modi);  
const timezone= 'UTC -7';

const formtdate = lastupdate.toLocaleString('en-Us');

document.getElementById('date').textContent =  formtdate;

