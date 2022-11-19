/* slider
===========================*/

const modalBtn = document.querySelectorAll('[data-project]');
const body = document.body;


modalBtn.forEach(item => {
item.addEventListener('click', event => {

    let $this = event.currentTarget;
    let modalId = $this.getAttribute('data-project');
    let project = document.getElementById(modalId);

    project.classList.add('show');



});


    const modalBtn2 = document.querySelectorAll('[data-project2]');
const body = document.body;


modalBtn2.forEach(item => {
item.addEventListener('click', event => {

    let $this = event.currentTarget;
    let modalId = $this.getAttribute('data-project2');
    let project = document.getElementById(modalId);

    project.classList.add('show');




});
$('.modal-work__preview')
    .on('mouseenter', function() {
        $(this).find('.modal-work__slide1').show();
    })
    .on('mouseleave', function() {
        $(this).find('.modal-work__slide1').hide();
    });

    $('.modal-work__preview')
    .on('mouseenter', function() {
        $(this).find('.modal-work__slide2').show();
    })
    .on('mouseleave', function() {
        $(this).find('.modal-work__slide2').hide();
    });



});
$(function() {

let modalFals = document.getElementById('modal_project_1');
modalFals.addEventListener('click', closemodalFals);
});

});







