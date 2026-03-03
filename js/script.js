// ===== SISTEMA PROFESIONAL DE PASES POR ID =====

const invitados = {
    "lopez123": { nombre: "Familia López", pases: 4 },
    "ramirez456": { nombre: "Familia Ramírez", pases: 2 },
    "mendoza789": { nombre: "Familia Mendoza", pases: 6 }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const nombreFamilia = document.getElementById("nombreFamilia");
const cantidadPases = document.getElementById("cantidadPases");

if(id && invitados[id]){
    nombreFamilia.innerText = `Usted ${invitados[id].nombre} tiene pase para:`;
    cantidadPases.innerText = invitados[id].pases;
} else {
    nombreFamilia.innerText = "Invitación Personal e Intransferible";
    cantidadPases.innerText = "-";
}

// ===== CUENTA REGRESIVA =====
/*const fechaEvento = new Date("August 20, 2026 19:30:00").getTime();

setInterval(()=>{
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if(diferencia > 0){
        document.getElementById("dias").innerText = Math.floor(diferencia/(1000*60*60*24));
        document.getElementById("horas").innerText = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));
        document.getElementById("minutos").innerText = Math.floor((diferencia%(1000*60*60))/(1000*60));
        document.getElementById("segundos").innerText = Math.floor((diferencia%(1000*60))/1000);
    }
},1000);*/


// ===== WHATSAPP =====
document.getElementById("rsvpForm").addEventListener("submit",(e)=>{
    e.preventDefault();

    const nombre = document.getElementById("nombreInvitado").value.trim();
    const asistencia = document.querySelector('input[name="asistencia"]:checked').value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if(nombre.length < 3){
        alert("Por favor escribe un nombre válido");
        return;
    }

    const texto = `⚓ Graduación
Nombre: ${nombre}
Asistencia: ${asistencia}
Mensaje: ${mensaje}`;

    const numero = "593999232835"; // NUMERO DE WHATSAPP
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url,"_blank");
});


// ===== MAPS =====
function abrirMaps(){
    window.open("https://maps.app.goo.gl/2kfeXFabqwffQYTS6","_blank");
}


// ===== MÚSICA =====
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click",()=>{
    if(musica.paused){
        musica.play();
        btnMusica.innerText = "🔇";
    } else{
        musica.pause();
        btnMusica.innerText = "🔊";
    }
});