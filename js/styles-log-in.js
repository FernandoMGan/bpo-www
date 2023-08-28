//  Muestreo Flotante de menu emergente
document.getElementById("chkShowPassword").addEventListener("change", toggleShowPassLogIn);
document.getElementById("chkLogPassRecup").addEventListener("change", ShowPassLogRec);
document.getElementById("chkRegister").addEventListener("change", ShowPassLogRegNew);
document.getElementById("btnFormResendPass").addEventListener("click", ShowPassLogRecReenv);

//  Toogle de contraseña de registro en recordatorio de contraseña
function ShowPassLogRec() {
    window.open("./log-in-rec.html", "_blank");
};
//  Toogle de contraseña de registro en nueva cuenta
function ShowPassLogRegNew() {
//    alert('Funcion Cach rec ShowPassLogRegNew');
    window.open("./log-sign-up.html", "_blank");
};

//  Reevio de email para recuperacion de contraseña
function ShowPassLogRecReenv() {
//    alert('Funcion Cach ShowPassLogRecReenv');
    document.getElementById("flagReenvio").innerText = "El email ha sido re-enviado, por favor verifique su bandeja de correo.";
    document.getElementById("flagReenvio").style.color = "red";
};
//  Toogle de contraseña de registro en loguin
function toggleShowPassLogIn() {
    var passwordInput = document.getElementById("logPassword");
    if (this.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
    var passwordInputChk = document.getElementById("logPasswordChk");
    if (this.checked) {
        passwordInputChk.type = "text";
      } else {
        passwordInputChk.type = "password";
      }
};