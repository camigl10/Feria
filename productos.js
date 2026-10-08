/*
 * ============================================================
 *  PRODUCTOS DEL CATÁLOGO
 * ============================================================
 *  Para agregar un producto:
 *   1. Subí la foto a la carpeta que corresponda, por ejemplo:
 *        fotos/caballo/mandiles/mandil-azul.jpg
 *   2. Agregá una línea dentro de la sección correspondiente:
 *        { nombre: "Mandil azul", precio: "$25.000", foto: "mandil-azul.jpg" },
 *
 *  - "foto" es solo el nombre del archivo (la carpeta ya la sabe el catálogo).
 *  - "precio" y "detalle" son opcionales: si no los ponés, no se muestran.
 *  - Si una sección queda vacía, el catálogo muestra "Próximamente".
 * ============================================================
 */

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
