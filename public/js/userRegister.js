

window.addEventListener("full", () => {

    let form = document.querySelector(".form");
    form.name.focus();

/* Aguarda a que los inputs estén completos antes de enviar al servidor */    
form.addEventListener("submit", (e) => {
        
        //* Crea un array vacío donde se van a ir agregando los errores*/
        let fail = [];
        /* Crea una variable y almacena con querySelector tomando el id de cada input */
                let name = document.querySelector("#firstName");
                let lastName = document.querySelector("#lastName");
                let email = document.querySelector("#email");
                let password = document.querySelector("#passwprd");
                let category = document.querySelector("#category");
                let userImage = document.querySelector("#avatar");

        // --------- NAME ------------
        if (name.value == "") {
            fail.push("El campo nombre no puede estar vacío");
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
        }else if (name.value.length < 2) {
            fail.push("El campo nombre debe tener al menos 2 caracteres");
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
        } else {
            name.classList.add("is-valid");
            name.classList.remove("is-invalid");
            form.lastName.focus();
        };

        // --------- LASTNAME ------------
        if (lastName.value == "") {
            fail.push("El campo nombre no puede estar vacío");
            lastName.classList.remove("is-valid");
            name.classList.add("is-invalid");
        }else if (name.value.length < 2) {
            fail.push("El campo nombre debe tener al menos 2 caracteres");
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
         }else {
            lastName.classList.add("is-valid");
            lastName.classList.remove("is-invalid");
            form.email.focus();
        };

        // --------- EMAIL (regex) ------------
        
        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email.value)) {
            fail.push("Debe ingresar un email válido");
            email.classList.add("is-invalid");
        } else {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            form.password.focus();
        };

        // --------- PASSWORD ------------
        if (password.value == "") {
            fail.push("El campo contraseña no puede estar vacío");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else if (password.value.length < 8) {
            fail.push("El campo nombre debe tener al menos 8 caracteres");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
            form.country.focus();
        };

        // --------- CATEGORY ------------
        if (category.value == "") {
            fail.push("Debe elegir un país");
            category.classList.remove("is-valid");
            category.classList.add("is-invalid");
        } else {
            category.classList.add("is-valid");
            category.classList.remove("is-invalid");
            form.userImage.focus();
        };

         // --------- USER IMAGE ------------
         let allowedExtension = /(.jpg|.jpeg|.png|.gif)$/i;
         if (!allowedExtension.exec(image.value)) {
            fail.push("Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.");
            userImage.classList.remove("is-valid");
            productImage.classList.add("is-invalid");
        } else {
            userImage.classList.add("is-valid");
            userImage.classList.remove("is-invalid");
            form.userImage.focus();
        };
        
        /* Controlador de errores */

        if (fail.length > 0) {
            e.preventDefault();
            let ulFails = document.querySelector(".fails");
            ulFails.classList.add("alert-warning");
            ulFails.innerHTML = "";
            for (let i = 0; i < fail.length; i++) {
                ulFails.innerHTML += "<li>" + fail[i] + "</li>";
            };
        } else {
            res.redirect("/products")
            form.submit();
        }
    });
})