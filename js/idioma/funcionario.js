let es = document.getElementById("español")
let en = document.getElementById("ingles")

//navbar
let txtInicio = document.getElementById("inicio")
let txtSobreNosotros = document.getElementById("sobre-nosotros-txt")
let txtServicios = document.getElementById("servicios")
let txtIngles = document.getElementById("ingles")
let txtEspañol = document.getElementById("español")
//homepage
let txtFuncionario = document.getElementById("funcionario")
let txtPaquete = document.getElementById("paquete")
let txtListaPaquete = document.getElementById("lista-paquete")
let txtCrearPaquete = document.getElementById("registrar-paquete")

let txtLote = document.getElementById("lote")
let txtListaLote = document.getElementById("lista-lote")
let txtListaPaqueteLote = document.getElementById("lista-paquete-lote")
let txtCargarLote = document.getElementById("cargar-lote")

let txtEstante = document.getElementById("estante")
let txtTrasladar = document.getElementById("trasladar-estante")
let txtQuitar = document.getElementById("quitar-estante")

//footer
let txtEmpresa = document.getElementById("empresa")
let txtDondeUbicarnos = document.getElementById("donde-ubicarnos")
let txtDireccion = document.getElementById("direccion")
let txtNosotrosFooter = document.getElementById("nosotros-footer")
let txtServiciosFooter = document.getElementById("servicios-footer")
let txtContactoFooter = document.getElementById("contacto-footer")

function traducirAIngles(){
    //navbar
    txtInicio.innerHTML = "Home"
    txtServicios.innerHTML = "Services"
    txtIngles.innerHTML = "English"
    txtEspañol.innerHTML = "Spanish"
    
    //homepage
    txtFuncionario.innerHTML = "Warehouse operator"
    txtPaquete.innerHTML = "Package"
    txtListaPaquete.innerHTML = "Package list"
    txtCrearPaquete.innerHTML = "Create package"

    txtLote.innerHTML = "Lot"
    txtListaLote.innerHTML = "Lot list"
    txtListaPaqueteLote.innerHTML = "Package list"
    txtCargarLote.innerHTML = "Load lot"
    txtEstante.innerHTML = "Shelf"
    txtTrasladar.innerHTML = "Transfer"
    txtQuitar.innerHTML = "Remove"

    //footer
    txtEmpresa.innerHTML = "Company"
    txtDondeUbicarnos.innerHTML = "Where to find us"
    txtDireccion.innerHTML = "We find ourselves 25 de agosto 1800"
    txtNosotrosFooter.innerHTML = "About us"
    txtServiciosFooter.innerHTML = "Services"
    txtContactoFooter.innerHTML = "Contact"
}

function traducirAEspanol(){
    //navbar
    txtInicio.innerHTML = "Inicio"
    txtServicios.innerHTML = "Servicios"
    txtIngles.innerHTML = "Ingles"
    txtEspañol.innerHTML = "Español"
    //homepage
    txtFuncionario.innerHTML = "Funcionario"
    txtPaquete.innerHTML = "Paquete"
    txtListaPaquete.innerHTML = "Lista Paquete"
    txtCrearPaquete.innerHTML = "Registrar Paquete"
    txtLote.innerHTML = "Lote"
    txtListaLote.innerHTML = "Lista Lote"
    txtListaPaqueteLote.innerHTML = "Lista Paquete"
    txtCargarLote.innerHTML = "Cargar Lote"
    txtEstante.innerHTML = "Estante"
    txtTrasladar.innerHTML = "Trasladar"
    txtQuitar.innerHTML = "Quitar"
    //footer
    txtEmpresa.innerHTML = "Empresa"
    txtDondeUbicarnos.innerHTML = "Donde ubicarnos"
    txtDireccion.innerHTML = "Nos encontramos en calle 25 de agosto 1800"
    txtNosotrosFooter.innerHTML = "Sobre Nosotros"
    txtServiciosFooter.innerHTML = "Servicios"
    txtContactoFooter.innerHTML = "Contacto"
}

es.addEventListener("click", function(){
    localStorage.setItem("idioma", "es")
    traducirAEspanol()
})

en.addEventListener("click", function(){
    localStorage.setItem("idioma", "en")
    traducirAIngles()
})

idioma = localStorage.getItem("idioma")

if(idioma == "es"){
    traducirAEspanol()
}

if(idioma == "en"){
    traducirAIngles()
}