
const list=document.getElementById('navbar-list')

const secondList=document.getElementById('toggleNavigation');


secondList.addEventListener('click',()=>{
    list.classList.toggle('test');
})
