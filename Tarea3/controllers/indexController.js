const controlador = {

    Main : (req, res) => {
        res.send("<h1> Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!. </h1><p><a href='/'> >Home</a><br><a href='/heroes'> >Heroes Json</a><br><a href='/creditos'> >Ver Creditos</a><br><a href='/heroes/2'> >Busca Heroe 2</a><br><a href='/heroes/2/bio'> >Detalle Heroe 2</a><br><a href='/heroe/2/bio/ok'> >Heroe en OK</a></p>");
    },


};

module.exports = controlador;