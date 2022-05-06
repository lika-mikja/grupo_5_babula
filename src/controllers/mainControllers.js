const listaPlatos = [
{
    id: 1,
    titulo: "Borsch",
    descripcion: "Es la sopa tradicional de verduras donde la remolacha es la gran protagonista. Este plato incluye cebolla, tomate, repollo, patatas y porotos.   La historia de este plato va ligada a  la evolución de las recetas de caldos y por extensión a las sopas acompañadas por hierbas o plantas que se van añadiendo al agua para conseguir una combinación agradable  y nutritiva",
    precio: "1400",
    img: "borsch.jpeg"
},
{
    id: 2,
    titulo:"Golupsy",
    descripcion: "Aparecieron en el siglo XVIII, una época en la que la gastronomía francesa empezaba a desatar pasiones en San Petersburgo. El nombre de este plato viene de la costumbre francesa de cocinar palomas envueltas en hojas de repollo. Golub significa paloma en ruso. Este plato es elaborado a base de hojas de repollo rellenas de carne picada y arroz, ahogados en salsa de tomates.",
    precio: "1.800",
    img: "golupsi3.jpeg"
},
{
    id: 3,
    titulo: "Pilmeni",
    descripcion: "También conocidos como Capeletis, es una pasta rellena decarne con cebolla, la cual se acompaña con salsa de tomate cruda, ajo y vinagre. Llegaron a Rusia con las tribus nómadas fino-ugrias. La misma palabra pelmén literalmente significa oreja de masa en la lengua fino-ugria. En realidad, tienen cierta semejanza con la forma de una oreja.Se cree que la difusión de este plato comenzó a fines del siglo XIV.",
    precio: "1.700",
    img: "pilmeni.jpeg"

},
{
    id: 4,
    titulo: "Selyodka",
    descripcion: "Que en español significa arenque bajo abrigo de pieles, es un plato sumamente  delicioso. Consiste en una especie de pastel frío que consta de capas de pescado, patatas, zanahoria y remolacha. Fue inventada a principios del signo XX en medio de la Guerra Civil. La remolacha marrón se asociaba con la bandera roja, y las papas y el arenque en aquel momento eran considerados los principales entremeses de obreros y campesinos.",
    precio: "2.000",
    img: "seliodka.jpeg"

},
{
    id: 5,
    titulo: "Medovik",
    descripcion: "Conocida tambien como Torta de Miel, fue creada en la década de 1820 por un Chef personal del Zar ruso Alejandro I.  Este auténtico pastel de miel se elabora con bizcocho y un relleno de crema.  Los ingredientes que se pueden encontrar en el relleno es la leche condensada cocinada durante muchas horas. Además también es habitual que contenga nueces.",
    precio: "1.300",
    img: "torta-de-miel.jpeg"

}
]

const mainController = {
    index:  (req , res) => {
        res.render("./users/index", {menu: listaPlatos });
    }
}


module.exports= mainController;