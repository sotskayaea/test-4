(() => {

    const contact = {
        btnOrder: document.querySelector('.btnOrder'),
        btnClose: document.querySelector('.btnClose'),
        btnSubmit: document.querySelector('.btnSubmit'),
        formaContact: document.querySelector('.contact-modal'),
    };
    function openOrder() {
        console.log(555);
        formaContact.classList.add('active')
    }

    function closeContact() {
        console.log(666);
        formaContact.classList.toggle('active')
    }

    function submitContact() {
        if (document.querySelector('.input-field-name').validity.valid && document.querySelector('.input-field-tel').validity.valid) {
            console.log(1);
            closeContact();
        }
        console.log(2);

        // refs.modal.classList.toggle("is-hidden");

    }


    contact.btnOrder.addEventListener('click', openOrder)
    contact.btnSubmit.addEventListener('click', submitContact)

    // const OpenContactUs = () => {


    //     inputName.addEventListener('click', () => {
    //         console.log(inputName.validity.valid)
    //     })


    //     const toggleMenu = () => {
    //         const isMenuOpen =
    //             openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    //         openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    //         mobileMenu.classList.toggle('is-open');

    //         const scrollLockMethod = !isMenuOpen
    //             ? 'disableBodyScroll'
    //             : 'enableBodyScroll';

    //         bodyScrollLock[scrollLockMethod](document.body);

    //     };

    //     openMenuBtn.addEventListener('click', toggleMenu);
    //     closeMenuBtn.addEventListener('click', toggleMenu);

    //     // Close the mobile menu on wider screens if the device orientation changes
    //     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    //         if (!e.matches) return;
    //         mobileMenu.classList.remove('is-open');
    //         openMenuBtn.setAttribute('aria-expanded', false);
    //         bodyScrollLock.enableBodyScroll(document.body);
    //     });
})();