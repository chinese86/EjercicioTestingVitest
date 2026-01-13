# 📚 Guía Completa de Testing con Vitest

Este proyecto contiene una suite completa de tests unitarios para aprender y practicar testing en JavaScript/React usando **Vitest** y **React Testing Library**.

## 📋 Tabla de Contenidos

1. [¿Qué es Testing?](#qué-es-testing)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Patrón AAA](#patrón-aaa)
4. [Archivo 1: Counter.test.jsx](#archivo-1-countertestjsx)
5. [Archivo 2: DataValidator.test.js](#archivo-2-datavalidatortestjs)
6. [Archivo 3: UserPosts.test.js](#archivo-3-userpoststestjs)
7. [Cómo Ejecutar los Tests](#cómo-ejecutar-los-tests)
8. [Conceptos Clave](#conceptos-clave)

---

## 🤔 ¿Qué es Testing?

El **testing** (pruebas) es el proceso de verificar que nuestro código funciona correctamente. Es como un control de calidad automático que:

- ✅ Detecta errores antes de que lleguen a producción
- ✅ Documenta cómo debe funcionar el código
- ✅ Facilita refactorizar sin miedo a romper cosas
- ✅ Aumenta la confianza en el código

### Tipos de Tests en este Proyecto:

1. **Tests Unitarios**: Prueban funciones individuales (como `calculateDiscount`)
2. **Tests de Componentes**: Prueban componentes de React (como `Counter`)
3. **Tests de Integración con Mocking**: Prueban funciones que dependen de APIs externas (como `fetchUserPosts`)

---

## 📁 Estructura del Proyecto

```
proyecto/
├── components/
│   └── Counter.jsx           # Componente contador
├── utils/
│   ├── DataValidator.js      # Función de cálculo de descuentos
│   └── fetchUserPosts.js     # Función que llama a una API
└── tests/
    ├── Counter.test.jsx      # Tests del contador
    ├── DataValidator.test.js # Tests de descuentos
    └── UserPosts.test.js     # Tests de la API
```

---

## 🎯 Patrón AAA

Todos nuestros tests siguen el patrón **AAA** (Arrange, Act, Assert):

### 1. **ARRANGE** (Preparar)
Configuramos todo lo necesario para el test:
- Renderizar componentes
- Crear datos de prueba
- Configurar mocks

### 2. **ACT** (Actuar)
Ejecutamos la acción que queremos probar:
- Hacer clic en un botón
- Llamar a una función
- Enviar un formulario

### 3. **ASSERT** (Verificar)
Comprobamos que el resultado es el esperado:
- Verificar el contenido del DOM
- Comprobar el valor de retorno
- Validar que se lanzó un error

**Ejemplo visual:**

```javascript
it('debe incrementar el contador', () => {
  // ARRANGE: Preparo el componente
  render(<Counter />);
  const button = screen.getByTestId('btn-incrementar');
  
  // ACT: Hago clic en el botón
  fireEvent.click(button);
  
  // ASSERT: Verifico que el contador aumentó
  expect(screen.getByTestId('current-count')).toHaveTextContent('1');
});
```

---

## 📝 Archivo 1: Counter.test.jsx

### 🎯 ¿Qué prueba este archivo?
Este archivo prueba un **componente Counter** (contador) de React que tiene botones para incrementar, decrementar y resetear un número.

### 🔧 Herramientas utilizadas:
- `render`: Renderiza el componente en un DOM virtual
- `screen`: Busca elementos en el DOM
- `fireEvent`: Simula eventos del usuario (clics, teclas, etc.)
- `getByTestId`: Busca elementos por su atributo `data-testid`

---

### 📊 Tests Explicados:

#### **TEST 1: Estado inicial**
```javascript
it('debe renderizar el contador con el valor inicial de 0', () => {
```
**¿Qué hace?** Verifica que cuando el componente se carga por primera vez, el contador muestra 0.

**¿Por qué es importante?** Asegura que el estado inicial es correcto.

---

#### **TEST 2: Incremento básico**
```javascript
it('debe incrementar el contador en 1 al hacer clic', async () => {
```
**¿Qué hace?** 
1. Renderiza el componente
2. Busca el botón de incrementar
3. Hace clic en él
4. Verifica que el contador ahora muestra "1"

**¿Por qué es importante?** Prueba la funcionalidad principal del contador.

---

#### **TEST 3: Límite mínimo**
```javascript
it('debe mostrar la advertencia de límite mínimo al iniciar...', async () => {
```
**¿Qué hace?** 
- Intenta decrementar cuando el contador está en 0
- Verifica que aparece un mensaje de advertencia
- Confirma que el contador sigue en 0

**¿Por qué es importante?** Prueba un **caso borde** (edge case) - situaciones límite que pueden causar errores.

---

#### **TEST 4: Decremento básico**
```javascript
it('debe decrementar el contador en 1 al hacer clic', async () => {
```
**¿Qué hace?**
1. Incrementa el contador a 1
2. Luego lo decrementa
3. Verifica que vuelve a 0

**¿Por qué es importante?** Prueba que el botón de decrementar funciona correctamente.

---

#### **TEST 5: Límite máximo**
```javascript
it('debe mostrar la advertencia de límite máximo...', async () => {
```
**¿Qué hace?**
- Hace clic 11 veces en incrementar
- Verifica que el contador se detiene en 10
- Comprueba que aparece un mensaje de advertencia

**¿Por qué es importante?** Otro caso borde - asegura que no se puede superar el máximo.

---

#### **TEST 6: Botón deshabilitado al máximo**
```javascript
it('debe deshabilitar el botón de incrementar...', async () => {
```
**¿Qué hace?**
- Incrementa hasta el máximo (10)
- Verifica que el botón de incrementar está deshabilitado

**¿Por qué es importante?** Prueba la **UX** (experiencia de usuario) - el botón debe estar deshabilitado para que el usuario sepa que no puede seguir.

---

#### **TEST 7: Botón deshabilitado al mínimo**
```javascript
it('debe deshabilitar el botón de decrementar...', async () => {
```
**¿Qué hace?** Verifica que el botón de decrementar está deshabilitado cuando el contador está en 0.

**¿Por qué es importante?** Igual que el test 6, pero para el límite inferior.

---

#### **TEST 8: Resetear contador**
```javascript
it('debe resetear el contador a 0...', async () => {
```
**¿Qué hace?**
1. Incrementa el contador varias veces
2. Hace clic en el botón de reset
3. Verifica que el contador vuelve a 0

**¿Por qué es importante?** Prueba la funcionalidad de reset.

---

## 🧮 Archivo 2: DataValidator.test.js

### 🎯 ¿Qué prueba este archivo?
Este archivo prueba una **función pura** llamada `calculateDiscount` que calcula el precio final después de aplicar un descuento.

**Ejemplo:**
```javascript
calculateDiscount(100, 20) // Retorna 80 (100 - 20%)
```

### 🔧 Concepto clave: Función Pura
Una función que:
- Siempre retorna el mismo resultado para los mismos parámetros
- No tiene efectos secundarios (no modifica nada externo)
- Es fácil de testear

---

### 📊 Tests Explicados:

#### **TEST 1: Cálculo nominal del 20%**
```javascript
it('debe calcular el precio con un descuento nominal del 20%', () => {
```
**¿Qué hace?** Prueba el caso más común: precio de 100, descuento del 20%, resultado esperado 80.

**¿Por qué es importante?** Es el **caso nominal** o "happy path" - la situación más común.

---

#### **TEST 2: Descuento del 0%**
```javascript
it('debe devolver el precio original cuando el descuento es 0%', () => {
```
**¿Qué hace?** Verifica que con 0% de descuento, el precio no cambia.

**¿Por qué es importante?** **Caso borde** - el límite inferior del descuento.

---

#### **TEST 3: Descuento del 100%**
```javascript
it('debe devolver 0 cuando el descuento es 100%', () => {
```
**¿Qué hace?** Verifica que con 100% de descuento, el precio final es 0.

**¿Por qué es importante?** **Caso borde** - el límite superior del descuento.

---

#### **TEST 4: Precio cero o negativo**
```javascript
it('debe lanzar un error si el precio es cero', () => {
```
**¿Qué hace?** Verifica que la función lanza un error cuando el precio es 0 o negativo.

**¿Por qué es importante?** Prueba la **validación de datos** - no tiene sentido calcular descuentos sobre precios inválidos.

**Nota:** Usamos `expect(() => ...).toThrow()` porque esperamos que se lance un error.

---

#### **TEST 5: Precisión decimal**
```javascript
it('debe redondear correctamente a dos decimales', () => {
```
**¿Qué hace?** Verifica que el resultado tiene máximo 2 decimales (formato de dinero).

**¿Por qué es importante?** En aplicaciones de dinero, la precisión es crítica.

---

#### **TEST 6: Todos los casos de error**
```javascript
it('debe lanzar un error si el descuento es negativo', () => {
```
**¿Qué hace?** Prueba todos los casos donde la función debe lanzar un error:
- Descuento negativo
- Descuento mayor a 100%
- Precio no numérico
- Descuento no numérico

**¿Por qué es importante?** Asegura que la función **rechaza datos inválidos** correctamente.

---

## 🌐 Archivo 3: UserPosts.test.js

### 🎯 ¿Qué prueba este archivo?
Este archivo prueba una función `fetchUserPosts` que hace peticiones a una API externa. Como no queremos hacer peticiones reales en los tests (serían lentos e inestables), usamos **mocking**.

### 🔧 Concepto clave: Mocking

**Mock** = Simulación

En lugar de hacer una petición real a internet, "fingimos" que la hacemos y controlamos la respuesta.

**¿Por qué?**
- ✅ Tests rápidos (no esperamos respuestas de red)
- ✅ Tests confiables (no dependen de conexión)
- ✅ Controlamos casos de error fácilmente
- ✅ No gastamos recursos de APIs reales

---

### 🛠️ Herramienta: vi.spyOn()

```javascript
const fetchSpy = vi.spyOn(global, 'fetch')
                   .mockResolvedValue(mockResponse);
```

**¿Qué hace esto?**
1. `vi.spyOn(global, 'fetch')`: "Espía" la función fetch
2. `.mockResolvedValue(mockResponse)`: Cuando se llame a fetch, devuelve nuestros datos falsos

---

### 📊 Tests Explicados:

#### **TEST EJEMPLO: 2 posts**
```javascript
it('debe devolver 2 posts al simular una respuesta OK...', async () => {
```
**¿Qué hace?**
1. Crea datos falsos (2 posts)
2. Crea una respuesta HTTP falsa (status 200, ok: true)
3. "Espía" fetch para que devuelva esos datos
4. Llama a la función
5. Verifica que:
   - fetch fue llamado con la URL correcta
   - La función retornó los 2 posts
   - El mensaje es correcto

**¿Por qué es importante?** Es el caso nominal del mocking.

---

#### **TEST 1: Llamada exitosa**
```javascript
it('debe devolver los datos correctamente cuando la llamada es exitosa', async () => {
```
**¿Qué hace?** Similar al test ejemplo, pero con 3 posts y verificaciones adicionales.

**¿Por qué es importante?** Prueba el caso de éxito con más datos.

---

#### **TEST 2: Verificación de URL**
```javascript
it('debe llamar a fetch con la URL correcta incluyendo el userId', async () => {
```
**¿Qué hace?** Verifica que la función construye la URL correctamente con el userId.

**¿Por qué es importante?** Asegura que la **integración con la API** es correcta.

---

#### **TEST 3: Fallo de red (500, 404)**
```javascript
it('debe lanzar un error cuando la respuesta no es exitosa (status 500)', async () => {
```
**¿Qué hace?** Simula que el servidor devuelve un error (status 500 o 404) y verifica que nuestra función lo maneja.

**¿Por qué es importante?** Prueba el **manejo de errores** - la aplicación debe manejar errores de red elegantemente.

**Nota:** Usamos `await expect(...).rejects.toThrow()` para errores asíncronos.

---

#### **TEST 4: Lista vacía**
```javascript
it('debe manejar correctamente cuando la API devuelve un array vacío', async () => {
```
**¿Qué hace?** Simula que la API no devuelve ningún post y verifica que la función lo maneja correctamente.

**¿Por qué es importante?** **Caso borde** - puede que un usuario no tenga posts.

---

#### **TEST ADICIONAL: Error de red real**
```javascript
it('debe manejar errores de red cuando fetch falla completamente', async () => {
```
**¿Qué hace?** Simula un error de red completo (sin conexión).

**¿Por qué es importante?** Diferente al error 500 - aquí la petición ni siquiera llega al servidor.

---

## 🔧 Limpieza: afterEach()

```javascript
afterEach(() => {
  vi.restoreAllMocks();
});
```

**¿Qué hace?** Después de cada test, restaura todas las funciones "mockeadas" a su estado original.

**¿Por qué es importante?** **Aislamiento de tests** - un test no debe afectar a otro.

---

## 🚀 Cómo Ejecutar los Tests

### 1. Instalar dependencias (si no lo has hecho):
```bash
npm install
```

### 2. Ejecutar todos los tests:
```bash
npm test
```

### 3. Ejecutar tests en modo watch (se re-ejecutan al guardar):
```bash
npm test -- --watch
```

### 4. Ejecutar un archivo específico:
```bash
npm test Counter.test.jsx
```

### 5. Ver cobertura de código:
```bash
npm test -- --coverage
```

---

## 📚 Conceptos Clave

### 1. **Test Unitario vs Integración**

| Tipo | Qué prueba | Ejemplo |
|------|-----------|---------|
| **Unitario** | Una función aislada | `calculateDiscount()` |
| **Integración** | Varios componentes juntos | `fetchUserPosts()` con API |
| **Componente** | Un componente React | `<Counter />` |

### 2. **Casos a probar siempre**

✅ **Caso nominal (happy path)**: El uso normal y esperado

✅ **Casos borde (edge cases)**: Límites (0, 100, vacío, máximo)

✅ **Casos de error**: Datos inválidos, errores de red

✅ **Estados del componente**: Inicial, durante interacción, final

### 3. **Matchers más comunes de expect()**

```javascript
// Igualdad
expect(value).toBe(5)              // Igualdad estricta (===)
expect(value).toEqual({a: 1})      // Igualdad profunda (objetos)

// Contenido
expect(text).toHaveTextContent('Hello')  // Texto en el DOM
expect(element).toBeInTheDocument()      // Elemento existe

// Booleanos
expect(button).toBeDisabled()      // Botón deshabilitado
expect(value).toBeTruthy()         // Valor verdadero

// Errores
expect(() => fn()).toThrow()       // Lanza error (síncrono)
await expect(fn()).rejects.toThrow() // Lanza error (asíncrono)

// Números
expect(value).toBeGreaterThan(5)
expect(value).toBeLessThanOrEqual(10)
```

### 4. **fireEvent vs userEvent**

```javascript
// fireEvent (usado en este proyecto)
fireEvent.click(button)      // Dispara el evento inmediatamente

// userEvent (más realista, opcional)
await userEvent.click(button) // Simula un clic de usuario real
```

### 5. **¿Por qué async/await en algunos tests?**

```javascript
it('test', async () => {  // <- async aquí
  await expect(...).rejects.toThrow()  // <- await aquí
});
```

**Respuesta:** Porque algunas operaciones son **asíncronas** (como llamadas a APIs). El `await` espera a que terminen antes de verificar el resultado.

---

## 🎓 Consejos para Aprender Testing

1. **Empieza simple**: Primero tests de funciones puras, luego componentes, luego mocking
2. **Lee los errores**: Los mensajes de error de Vitest son muy descriptivos
3. **Usa describe() para organizar**: Agrupa tests relacionados
4. **Un test, una cosa**: Cada test debe verificar UNA cosa específica
5. **Nombres descriptivos**: El nombre del test debe explicar qué se está probando
6. **AAA siempre**: Arrange, Act, Assert - hace los tests más claros
7. **Practica con TDD**: Test-Driven Development - escribe el test antes que el código

---

## 🐛 Errores Comunes

### Error 1: "screen.getByTestId is not a function"
**Causa:** No importaste `screen` de `@testing-library/react`
**Solución:** `import { screen } from '@testing-library/react'`

### Error 2: "Unable to find element with testId"
**Causa:** El elemento no tiene el atributo `data-testid` o está mal escrito
**Solución:** Verifica que el componente tenga `data-testid="nombre-exacto"`

### Error 3: "Matcher error: received value must be a mock"
**Causa:** Intentas verificar que se llamó una función que no es un mock/spy
**Solución:** Usa `vi.spyOn()` antes de verificar con `toHaveBeenCalled()`

### Error 4: Tests pasan individualmente pero fallan juntos
**Causa:** Los mocks no se están limpiando entre tests
**Solución:** Usa `afterEach(() => vi.restoreAllMocks())`

---

## 📖 Recursos Adicionales

- [Documentación de Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)

---

## ✅ Checklist: ¿Estoy testeando bien?

- [ ] Cada test tiene un nombre descriptivo
- [ ] Cada test sigue el patrón AAA
- [ ] Los tests son independientes (uno no depende de otro)
- [ ] Pruebo casos nominales, bordes y errores
- [ ] Limpio los mocks después de cada test
- [ ] Los tests son rápidos (< 1 segundo cada uno)
- [ ] No testeo implementación, solo comportamiento

---

**¡Feliz Testing! 🎉**