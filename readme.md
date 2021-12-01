# Recopilatorio de Bookmarks

Vamos a hacer una aplicación web para ir anotando los enlaces y páginas web que nos parezcan interesantes.

![Screenshot de la aplicación web](./README_screenshot_main.png)

La sección principal de la aplicación consta de un listado en forma de tabla (que también puede transformarse en una cuadrícula de tarjetas) donde se muestran los enlaces ya guardados por al usuaria y junto con una breve descripción, el origen y etiquetas para categorizarlos.

La aplicación tiene un menú hamburguesa (en la parte superior derecha) que al pulsar sobre él se muestran las opciones de filtrado y de visualización del listado.

![Screenshot del menú desplegado](./README_screenshot_menu.png)

Al pulsar sobre el botón de "Vista tarjetas", la lista de enlaces se convertirá en un panel de tarjetas, donde cada una contendrá la información de un enlace:

![Screenshot con el listado en forma de tarjetas](./README_screenshot_tarjetas.png)

Por último, la usuaria puede añadir nuevos enlaces pulsando sobre el botón "Nueva" que mostrará un formulario para rellenar los datos del nuevo enlace a guardar.

![Screenshot del formulario para crear un nuevo enlace](./README_screenshot_nueva.png)

---

# Bookmark: Agregar contenido

## Ejercicios

### 1. Crear un proyecto nuevo

Empezaremos lógicamente por crear un proyecto nuevo, para lo cual:

1. Cread un repositorio en GitHub llamado `promo-X-module-3-pair-Y-sprint-1-hangman-game`.
   - Cambiad la `X` por tu promo y la `Y` por tu número de pareja.
   - Cread el repo en **la organización de Adalab**.
   - Clónadlo en vuestros equipos.
2. Cread un nuevo proyecto de React dentro del repo clonado.
   - Si queréis podéis hacerlo con `create-react-app` o con un `react-starter-kit`.
3. Arráncadlo y poneos a programar.

### 2. Muestra el formulario de nuevo bookmarks

La usuaria puede añadir nuevos enlaces pulsando sobre el botón "Nueva" que mostrará un formulario para rellenar los datos del nuevo enlace a guardar. Prueba a mostrar el formulario asociado al botón de nuevo bookmark.

> **Pista**: Busca la sección que contiene este formualrio y utiliza la propiedad classList.remove("hidden");

![Screenshot del formulario para crear un nuevo enlace](../README_screenshot_nueva.png)

### 3. Muestra el desplegable del menú hamburguesa

La aplicación tiene un menú hamburguesa (en la parte superior derecha) que al pulsar sobre él se muestran las opciones de filtrado y de visualización del listado. Prueba a mostrar este menú.

> **Pista**: Busca la sección que contiene este menú y utiliza la propiedad classList.remove("collapsed");
> P
> ![Screenshot del menú desplegado](../README_screenshot_menu.png)

### 4. Agregar los enlaces dinámicamente

Ahora vamos a dar nuestros primeros pasos para que nuestra página sea dinámica, vamos a añadir la información estática de los enlaces que está en html desde Javascript. Para ello podemos seguir los siguientes pasos:

1.  Buscad el elemento utilizando el `document.queryselector(".js-datails")`. Recuerda primero añadir esta clase de js a la sección de listas.
2.  Copiad cada `li` dentro de una variable.
3.  Añadir esa variable utilizando propiedad `innerHTML` para agregar los enlaces.

---

# Bookmark: Usar variables

## Ejercicio 1

Vamos a usar variables que luego interpolaremos en el string con el HTML de cada bookmark.
Os proponemos usar 6 variables por cada enlace:

1. Una variable para la URL (dirección del enlace).
1. Una variable para la descripción
1. Una variable para indicar si es del módulo actual o no.
1. Otras dos variables que indiquen las etiquetas de ese enlace.
1. Una última variable con el HTML del enlace en la que interpolaremos las anteriores.

Por ejemplo:

```js
const bmk_1_url =
  "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const bmk_1_desc = "JS en los materiales de Adalab";
const bmk_1_seen = "checked";
const bmk_1_tags_1 = "javascript";
const bmk_1_tags_2 = "html";
```

> **Nota** : Usamos \_ en los nombres de las variables, pero por una razón académica.
> En JS se suele usar la notación [camelCase](https://es.wikipedia.org/wiki/Camel_case) para los nombres de variable.

## Ejercicio 2: Bonus

¿Serías capaz de buscar métodos de String para pasar a minúsculas el nombre de las etiquetas?

## Ejercicio 3: Bonus

¿Serías capaz de quitar el 'https://' del principio de la dirección en el contenido del enlace usando otro método de String? (en el href no se lo quites)

---

P.D.- Comenta el código de ayer en el que se mostraban el menú y el formulario.