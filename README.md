# Catálogo Ecuestre

Abrí `index.html` en el navegador para ver el catálogo.

## Secciones

- **Caballo**: mandiles, bozal, cueros, mantas, embocaduras, protectores
- **Jinete / Amazona**: pantalón, remera concurso, remera entrenamiento, accesorios, chaleco, guantes, polainas

## Cómo agregar productos

1. Subí la foto a su carpeta dentro de `fotos/`, por ejemplo `fotos/caballo/mandiles/mandil-azul.jpg`.
2. En `productos.js`, agregá una línea dentro de la sección que corresponde:

   ```js
   { id: "mandiles", titulo: "Mandiles", productos: [
     { nombre: "Mandil azul", precio: "$25.000", detalle: "Talle full", foto: "mandil-azul.jpg" },
   ] },
   ```

   `precio` y `detalle` son opcionales.

## Navegación

En cada categoría, el botón **Ver todo** muestra todas sus subdivisiones juntas y los demás botones muestran una sola.

Cada vista tiene su propio link: `index.html#caballo` (ver todo Caballo), `index.html#caballo-mandiles`, `index.html#jinete-guantes`, etc.
