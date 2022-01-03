const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach(faqToggle =>{

    faqToggle.addEventListener('click', function(){

        if(faqToggle.parentElement.classList.contains('active')){
            faqToggle.parentElement.classList.remove('active'); 
        }
        else{
            faqToggle.parentElement.classList.add('active');

        }
    })
})