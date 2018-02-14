document.addEventListener('DOMContentLoaded', function(){
    const offerForm = document.getElementById('js-offer-form')
    const offerFormLock = document.getElementById('js-input-block__lock')

    offerForm.addEventListener('input', function(){
        let nameReg = /[^A-Za-zа-яА-Я-\s]/
        let phoneReg = /[^0-9-+\s]/

        if(offerForm.yourname.value.match(nameReg) || offerForm.yourphone.value.match(phoneReg)) {
            offerFormLock.style.visibility='visible'
        }
        else {
            offerFormLock.style.visibility='hidden'        
        }
    })
})
