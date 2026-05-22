# Análisis Práctico (Componente Reflexivo)

## Proceso de Configuración

* **¿Qué pasos realizaste desde la creación de la carpeta hasta la ejecución del servidor?**
1. Creé la carpeta del proyecto y arranqué con `npm init -y` para tener el `package.json` base.
2. Actualicé Node.js a la última versión para que no hubiera problemas de compatibilidad.
3. Instalé Express metiendo el comando `npm install express` en la terminal.
4. Creé el archivo `index.js` y armé el código base: importé Express, configuré el puerto 3000 y armé las rutas para la bienvenida, los aprendices y los programas de formación.
5. Entré al `package.json` y agregué el script `"dev": "node index.js"`.
6. Al final, corrí el servidor en la consola usando `npm run dev`.


* **¿Qué función cumple el archivo `package.json`?**
Es básicamente el documento de identidad del proyecto. Ahí se guarda la información clave como el nombre y la versión, pero lo más importante es que controla los scripts personalizados (como el `npm run dev` que configuré) y lleva la lista exacta de todas las librerías que usa la app (las dependencias, como Express).
* **¿Qué ocurre al ejecutar `npm install`?**
NPM se pone a leer el `package.json` para ver qué librerías necesita el proyecto. Va, las descarga de internet y las mete en la carpeta `node_modules`. También crea o actualiza el archivo `package-lock.json` para asegurarse de que si otra persona descarga el proyecto, se le instalen exactamente las mismas versiones.

---

## Comprensión del Servidor

* **¿Qué significa que el servidor esté “escuchando” en un puerto?**
Significa que el programa se queda activo y "atento" a un canal específico de la red (en este caso, el puerto 3000). Se queda esperando a que llegue cualquier petición desde el navegador o desde fuera para reaccionar y mandar una respuesta.
* **¿Qué sucede internamente cuando accedes a `http://localhost:3000/`?**
El navegador manda una petición de tipo `GET` a la dirección local de la máquina en el puerto 3000. Node recibe esa señal, Express busca si hay una ruta configurada para la raíz (`/`) y, como sí existe, ejecuta la función que devuelve el texto "Bienvenido al sistema" con un estado de éxito (200 OK).

---

## Análisis de Rutas

* **¿Qué diferencia existe entre cada ruta creada?**
Cada ruta sirve para separar las secciones del sistema usando la URL:
* La ruta raíz (`/`) es la landing o el mensaje de bienvenida general.
* La ruta `/aprendices` maneja la sección específica para la gestión de aprendices.
* La ruta de programas de formación (que en el código original tenía un detalle y repetía `/aprendices`) sirve para controlar esa área del centro.


*Nota sobre el código:* En el archivo que subí se me duplicó el path `/aprendices` en la tercera ruta. Para que funcione bien la parte de formación, habría que cambiar ese string a `/programas`.
* **¿Qué papel cumplen los parámetros `request` y `response`?**
Son los que manejan la comunicación de ida y vuelta:
* **`request` (req):** Es todo lo que viene del cliente hacia el servidor. Trae datos como los formularios, los parámetros de la URL o las cabeceras.
* **`response` (res):** Es la herramienta que usamos para contestarle al cliente. Con este objeto definimos qué texto, JSON o página web le mandamos de vuelta y con qué estado HTTP.



---

## Reflexión Técnica

* **¿Qué dificultades encontraste?**
Sinceramente, ninguna. El ejercicio me pareció bastante fácil y directo. Todo el proceso de instalar las cosas y levantar el servidor con Express fluyó rápido y sin trabas.
* **¿Qué aprendiste que no habías comprendido completamente en la parte teórica?**
Me sirvió para ver en la práctica lo limpio y rápido que es Node para montar un backend. Se me hizo muy parecido a lo que se hace en **ASP.NET**, pero la verdad es que con Express es todavía más fácil y te ahorras un montón de código de configuración para tener endpoints funcionando.
* **¿Por qué es importante estructurar bien un proyecto desde el inicio?**
Porque si tiras código a lo loco, en cuanto el proyecto crece un poco se vuelve un desastre imposible de entender. Estructurar bien desde el día uno evita que choquen las rutas, ayuda a trabajar mejor en equipo y hace que meter módulos nuevos en el futuro sea mucho más sencillo.