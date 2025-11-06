# Aplicación Node.js: Mostrar número 1-10

Esta pequeña aplicación muestra un número aleatorio entre 1 y 10 al pulsar un botón. Usa **Express** para servir los archivos estáticos y un endpoint `/number` que devuelve el número.

## Requisitos
- Node.js 18+ (o 16+)
- npm

## Instalación
1. Clona o descarga el proyecto en una carpeta.
2. Desde la carpeta del proyecto, instala dependencias:

```bash
npm install
```

## Ejecutar
Arranca el servidor con:

```bash
npm start
```

Por defecto el servidor escucha en el puerto `3000`. Puedes cambiar el puerto exportando la variable de entorno `PORT`:

```bash
PORT=8080 npm start
```

Luego abre en tu navegador:

```
http://localhost:3000
```

y pulsa el botón para ver un número aleatorio entre 1 y 10.

## Archivos incluidos
- `index.html` — Interfaz simple con un botón y una zona para mostrar el número.
- `script.js` — Lógica del cliente para pedir el número al servidor y mostrarlo.
- `server.js` — Servidor Express que sirve los archivos estáticos y responde en `/number`.
- `package.json` — Dependencias y scripts.

## Notas
- El endpoint `/number` devuelve JSON con la forma `{ "number": 7 }`.
- No se guardan registros persistentes; es solo un ejemplo demo.
