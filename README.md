# Catálogo Ecuestre

Abrí `index.html` en el navegador para ver el catálogo.

## Secciones

- **Caballo**: mandiles, bozal, cueros, mantas, embocaduras, protectores
- **Jinete / Amazona**: pantalón, remera concurso, remera entrenamiento, accesorios, chaleco, guantes, polainas

## Cómo agregar productos (sin tocar código)

1. En GitHub, entrá a la carpeta de la sección, por ejemplo `fotos/caballo/mandiles`.
2. Tocá **Add file → Upload files**, elegí las fotos y tocá **Commit changes**.
3. En 1 o 2 minutos aparecen solas en el catálogo.

El nombre del archivo se separa con ` - ` (guion con un espacio de cada lado): primero el nombre del producto y después, en cualquier orden, el precio (empieza con `$`) y el talle:

- `Pantalón - Talle 38 - $40.000.jpg` → **Pantalón**, Talle 38, $40.000
- `Mandil azul - $25.000.jpg` → **Mandil azul**, $25.000
- `Guantes - Talles S M L.jpg` → **Guantes**, Talles S M L
- `IMG_1234.jpg` → solo la foto, sin nombre

Formatos: JPG, PNG o WEBP.

(Opcional) En `productos.js` también se pueden cargar productos a mano con un `detalle` extra.

## Navegación

En cada categoría, el botón **Ver todo** muestra todas sus subdivisiones juntas y los demás botones muestran una sola.

Cada vista tiene su propio link: `index.html#caballo` (ver todo Caballo), `index.html#caballo-mandiles`, `index.html#jinete-guantes`, etc.
