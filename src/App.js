import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Container className="contenedor">
      <Card className="shadow-sm">
        <Card.Header as="h1" className="h4 mb-0">
          TPN°4 - React - Captura de eventos - Interfaz Usuario
        </Card.Header>
        <Card.Body>
          <Form onSubmit={presion}>
            <Form.Group className="mb-3" controlId="texto">
              <Form.Label>Ingrese un texto:</Form.Label>
              <Form.Control type="text" name="texto" placeholder="Escriba aquí..." />
            </Form.Group>
            <Button variant="primary" type="submit">
              Contar vocales
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

// Función que recibe un texto y devuelve la cantidad de vocales que tiene
// (se consideran mayúsculas, minúsculas y vocales con tilde o diéresis).
function contarVocales(texto) {
  const sinAcentos = texto.normalize('NFD').replace(/[̀-ͯ]/g, '');
  const vocales = sinAcentos.match(/[aeiou]/gi);
  return vocales ? vocales.length : 0;
}

function presion(e) {
  // Evita que el formulario recargue la página
  e.preventDefault();
  const texto = e.target.texto.value;
  const cantidad = contarVocales(texto);
  alert('La cantidad de vocales ingresadas es: ' + cantidad);
}

export default App;
