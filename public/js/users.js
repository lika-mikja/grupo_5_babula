window.addEventListener("load", () => {

    let form = document.querySelector(".form");
    form.name.focus();

    form.addEventListener("submit", (e) => {
        
        /* Creamos un array de errores vacio. 
        En caso de ir detectando errores los iremos agregando aquí */
        let errors = [];

        let name = document.querySelector("#name");
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let country = document.querySelector("#country");

        // --------- NAME ------------
        if (name.value == "") {
            errors.push("El campo nombre no puede estar vacío");
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
        } else {
            name.classList.add("is-valid");
            name.classList.remove("is-invalid");
            form.email.focus();
        };

        // --------- EMAIL (regex) ------------

        // Regex simple
        /* let reg1 = /\S+@\S+\.\S+/;
        console.log(reg1.test(email.value)); */

        // Regex complejo
        /* let reg2 = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log(reg2.test(email.value)); */
        
        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email.value)) {
            errors.push("Debe ingresar un email válido");
            email.classList.add("is-invalid");
        } else {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            form.password.focus();
        };

        // --------- PASSWORD ------------
        if (password.value == "") {
            errors.push("El campo contraseña no puede estar vacío");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else if (password.value.length < 8) {
            errors.push("El campo nombre debe tener al menos 8 caracteres");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
            form.country.focus();
        };

        // --------- COUNTRY ------------
        if (country.value == "") {
            errors.push("Debe elegir un país");
            country.classList.remove("is-valid");
            country.classList.add("is-invalid");
        } else {
            country.classList.add("is-valid");
            country.classList.remove("is-invalid");
            form.country.focus();
        };
        
        // Controlamos si hay errores 
        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector(".errores");
            ulErrors.classList.add("alert-warning");
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
        } else {
            alert("La validación fue exitosa")
            form.submit();
        }
    });
})