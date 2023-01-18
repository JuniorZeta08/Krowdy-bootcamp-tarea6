let player = null
const changeName = (mensaje) =>{
    const newName = prompt (mensaje)

    if (!newName.trim()){
        changeName('El nombre no puede estar vacio.')
        return
    }
    if(newName === player)alert('El nombre se repite')
    if(player?.length < 3)
    player = prompt(
        'El nombre debe tener mas de 3 caracteres - Intentalo Otra Vez'
        )
    player = newName
}

const game = () => {
    alert(
    'Eres un hombre de 48 años el cual vive infeliz trabajando 6 dias a la semana, de regreso a casa, presencias y robo de una escolar te lanza a su recaste y el ladron te dispara'+
     'y mueres, al morir te recibe una diosa y te da a elegir 3 opciones.'
    )
    const option = +prompt("Escoje una de las 3 opciones.\n" +
    "1. Aceptar tu destino y pasar al mas allá\n"+
    "2. Tomar una segunda oportunidad y empezar desde cero en otro mundo de fantasia \n"+
    "3. Desear regresar al tiempo.")

    if (option === 1){
        alert (
            "Te das con la cruda sorpresa que en el mas allá no ay diferencia de lo bueno y malo, \n "+
            "y es un enterno deprimente y gris."
        )
    }
    if (option === 2){
        alert (
            "Reencarnas como un bebé pero con la consciencia e inteligencia de tu antigua vida,\n "+
            "por lo cual tienes ventaja en inteligencia y a corta edad aprendes magia, por lo cual tus padres \n" +
            "te contratan un maestro, te embarcas en una aventura con una princesa que es tu pariente lejano y \n"+
            "y con un demonio temido y en la lista de los 10 mas fuertes.\n"+
            "pasan muchas aventuras juntos, logran derrotar al rey demonio y viven en paz y prosperidad.\n"+
            "FELICIDADES"
        )
        return
    }
    if (option === 3){
        alert (
            "Viajas al pasado y creas una paradoja por lo cual tu realidad se destruye siendo este tu fin."
        )
    }
    const tryAgain = confirm("Volver a intentarlo.")
    if (tryAgain)game();
}
const menu = () => {
    const mainMenu = prompt(`Bienvenido ${player}, elige una opcion: \n
                            1. Cambiar nombre
                            2. Iniciar Juego`)
    if(mainMenu === '1'){
        changeName('Ingresar nuevo nombre: ')
        menu()
        return
    }
    if(mainMenu === '2'){
        game()
        return
    }
    
    alert('No es una opcion valida.')
    menu()
}

changeName('Ingresa tu nombre de jugador: ')
menu()
