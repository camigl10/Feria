/*
 * ============================================================
 *  PRODUCTOS DEL CATÁLOGO
 * ============================================================
 *  FORMA FÁCIL (sin tocar este archivo):
 *   Subí la foto a la carpeta que corresponda dentro de "fotos/"
 *   (por ejemplo fotos/caballo/mandiles/) y aparece sola en el catálogo.
 *   El nombre del archivo es el nombre del producto; si ponés " - ",
 *   lo que sigue es el precio:
 *        Mandil azul - $25.000.jpg
 *
 *  FORMA AVANZADA (opcional): agregar una línea en la sección, por ej.
 *        { nombre: "Mandil azul", precio: "$25.000", detalle: "Talle full", foto: "mandil-azul.jpg" },
 *   Sirve para sumar un "detalle". Si la foto está acá, no se repite.
 * ============================================================
 */

// Repositorio de GitHub de donde el catálogo lee las fotos.
// "rama" tiene que ser la misma que está elegida en Settings → Pages.
const REPOSITORIO = {
  usuario: "camigl10",
  nombre: "Feria",
  rama: "claude/equestrian-catalog-sections-2ttyjt",
};

const CATALOGO = [
  {
    id: "caballo",
    titulo: "Caballo",
    secciones: [
      {
        id: "mandiles",
        titulo: "Mandiles",
        productos: [
          // { nombre: "Mandil azul", precio: "$25.000", detalle: "Talle full", foto: "mandil-azul.jpg" },
        ],
      },
      { id: "bozal", titulo: "Bozal", productos: [] },
      { id: "cueros", titulo: "Cueros", productos: [] },
      { id: "mantas", titulo: "Mantas", productos: [] },
      { id: "embocaduras", titulo: "Embocaduras", productos: [] },
      { id: "protectores", titulo: "Protectores", productos: [] },
    ],
  },
  {
    id: "jinete",
    titulo: "Jinete / Amazona",
    secciones: [
      { id: "pantalon", titulo: "Pantalón", productos: [] },
      { id: "remera-concurso", titulo: "Remera concurso", productos: [] },
      { id: "remera-entrenamiento", titulo: "Remera entrenamiento", productos: [] },
      { id: "accesorios", titulo: "Accesorios", productos: [] },
      { id: "chaleco", titulo: "Chaleco", productos: [] },
      { id: "guantes", titulo: "Guantes", productos: [] },
      { id: "polainas", titulo: "Polainas", productos: [] },
    ],
  },
];
