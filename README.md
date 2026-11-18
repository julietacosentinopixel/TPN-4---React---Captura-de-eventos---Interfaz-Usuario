# TPN°4 - React - Captura de eventos - Interfaz Usuario

## Enunciado

Agregar al TPN°3:

- una interfaz de usuario
- Elegir una de las que aparecen en https://blog.logrocket.com/top-10-react-ui-libraries-kits/

Enviar link de GitHub.

### Enunciado del TPN°3 (base)

Tomar como referencia:
https://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=4&codigo=4&inicio=0

Hacer un desarrollo en React que tenga un control de formulario HTML `input` de tipo "text"
y un botón que al presionarse muestre en un `alert` la cantidad de vocales ingresadas
(realizarlo con una función que devuelva el resultado).

## Solución

- **Librería de interfaz de usuario elegida: [React Bootstrap](https://react-bootstrap.github.io/)**
  (es la primera de la lista del artículo de LogRocket).
- Se usan los componentes `Container`, `Card`, `Form` (`Form.Group`, `Form.Label`, `Form.Control`)
  y `Button`.
- La lógica del TPN°3 se mantiene igual:
  - El evento `onSubmit` del formulario se enlaza con la función `presion`.
  - La función `contarVocales(texto)` **devuelve** la cantidad de vocales
    (cuenta mayúsculas, minúsculas y vocales con tilde o diéresis).
  - `presion` detiene el envío con `e.preventDefault()`, llama a `contarVocales` y muestra
    el resultado con `alert(...)`.

## Cómo ejecutarlo

```bash
npm install
npm start
```

Se abre en http://localhost:3000

Las dependencias de la librería (`react-bootstrap` y `bootstrap`) ya figuran en `package.json`.
