function windowWidth () {
    if(confirm(`El ancho es: ${window.screen.availWidth}, El alto es: ${window.screen.availHeight}`)){
        alert("Compra realizada exitosamente");
    } else {
        alert("Compra cancelada");
    }
}
function url () {
    console.log(`Protocolo: ${window.location.protocol} \n\nHostname: ${window.location.hostname} \n\nPathname: ${window.location.pathname} \n\nUrl Completa:\n ${window.location.href}`);
} 