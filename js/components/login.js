function TheLogin() {
    var password = 'eaaa';
    var brugernavn = 'eaaa';

    //Login succes
    if (this.document.login.pass.value == password && this.document.login.name.value == brugernavn) {
        window.alert("TILLYKKE!!! Kodeord og navn er korrekt og du logges ind :-)");
        //reload page
        location.reload();
        //Remember log in
        localStorage.myLogin ="1";
    }
    //Login fail
    else {
        if (this.document.login.pass.value != password && this.document.login.name.value != brugernavn){
            window.alert("Kodeord er forkert og Navn er ukendt - prøv veligst igen :-)");
        }
        else if (this.document.login.pass.value != password){
            window.alert("Navn er kendt men Kodeord er forkert - prøv veligst igen :-)");
        }
        else if (this.document.login.name.value != brugernavn){
            window.alert("Navn er ukendt men kodeordet er rigtigt - prøv veligst igen :-)");
        }
    }
}

// Login component

if (!localStorage.myLogin) {

    //Create custom element
    var login = document.createElement("my-login");
    document.body.appendChild(login);

    class MyLogin extends HTMLElement {
        connectedCallback() {
            this.render();
        }
        render() {
            this.innerHTML = `
            <form name="login" style="margin: 5px 0px 0px 0px;">
                Username:
                <br>
                <input type="text" name="name" size="17" onkeydown="if(event.keyCode==13) event.keyCode=9;">
                <br>
                <br>
                PASSWORD:
                <br>
                <input type="text" name="pass" size="17" onkeydown="if(event.keyCode==13) event.keyCode=9;">
                <br>
                <br>
                <input class="form__button" type="button" value="Login" onclick="javascript:TheLogin(this.form)">
            </form>
            <style>
                my-login {
                    text-align:center;
                    height:100vh;
                    display:flex;
                    justify-content: space-around;
                    align-items: center;
                }
                my-login .form__button {
                    padding:10px;
                }
            </style>
            `
        }
    }
    customElements.define('my-login', MyLogin);
}