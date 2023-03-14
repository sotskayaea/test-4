(() => {
    const contact = {
        contactOpen: document.querySelector('.contactOpen'),

        forma: document.querySelector('.modal-form'),
        modalContact: document.querySelector('.contact-modal'),
        contactCloseBtn: document.querySelector('.contactCloseBtn'),
        btnSubmit: document.querySelector('.btnSubmit'),

        overlay: document.querySelector('.overlay'),

        modalThank: document.querySelector('.thank-you'),
        thankClose: document.querySelector('.closeThank'),
        thankCloseBtn: document.querySelector('.closeThank-btn'),
    };

    function contactOpen() {

        contact.modalContact.classList.add('active');
    }
    function contactClose() {
        contact.modalContact.classList.remove('active');
    }

    function thanktOpen() {
        contact.modalThank.classList.add('active');
    }
    function thankClose() {
        contact.modalThank.classList.remove('active');
    }

    function overlayOpen() {
        contact.overlay.classList.add('active');
    }
    function overlayClose() {
        contact.overlay.classList.remove('active');
    }


    contact.contactOpen.addEventListener('click', () => {
        contactOpen();
        overlayOpen();
    });

    contact.thankCloseBtn.addEventListener('click', () => {
        thankClose();
        overlayClose();
    });
    contact.thankClose.addEventListener('click', () => {
        thankClose();
        overlayClose();
    });
    contact.contactCloseBtn.addEventListener('click', () => {
        contactClose();
        overlayClose();

        contact.forma.reset();
    });

    contact.forma.addEventListener('submit', (e) => {
        e.preventDefault();
        contact.forma.reset();

        contactClose()
        thanktOpen()

    })

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
            overlayClose();
            contactClose();
            thankClose();
            contact.forma.reset();
        };
    }, false);

    contact.overlay.addEventListener('click', function () {
        contactClose();
        thankClose();
        this.classList.remove('active');
        contact.forma.reset();
    });

})();