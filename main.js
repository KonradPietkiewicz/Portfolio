let today = new Date();
let year = today.getFullYear();

let el = document.getElementById('protection_copy');
el.innerHTML = '<p>Copyright &copy; ' + year + '</p>'
protection_copy.style.fontSize = "1.5rem";
protection_copy.style.lineHeight = "15vh"
protection_copy.style.paddingLeft = "250px"