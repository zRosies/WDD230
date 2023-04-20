
const options = {day: 'numeric', month:'numeric', year:'numeric', hour:'numeric', minute:'numeric', second:'numeric'}

const modi = document.lastModified;
const timezone= 'UTC -7';
const lastupdate = new Date(modi);
const formtdate = lastupdate.toLocaleString('en-Us', {timezone});

document.getElementById('date').textContent =  formtdate;