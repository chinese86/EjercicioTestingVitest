import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter.jsx';

// NOTA: Recuerda que para testear correctamente el estado, necesitas usar `await` 
// o `findBy...` en casos más complejos, pero para los clics simples, `fireEvent.click`
// suele ser suficiente.

//RECOMENDACION: Sigue el patrón AAA (Arrange, Act, Assert) en cada test para mantener claridad.
//PONER await donde sea necesario, sobretodo en los fireEvent en casos más complejos, pero en estos básicos no es obligatorio
describe('Counter Component', () => {

  // --- TEST 1: Verificar el estado inicial ---
  it('debe renderizar el contador con el valor inicial de 0', () => {
    // ARRANGE: Renderizar el componente
    render(<Counter />);
    
    // ACT: No hay acció
    
    // ASSERT: Verificar el valor en el DOM
    expect(screen.getByTestId('current-count')).toHaveTextContent('0');
  });
    
  // --- TEST 2: Incremento básico (AAA) ---
  it('debe incrementar el contador en 1 al hacer clic', async () => {
    // ARRANGE
    render(<Counter />);
    const incrementButton = screen.getByTestId('btn-incrementar');
    
    // ACT
    //await no es obligatorio aquí pero puede ser útil en casos más complejos
    fireEvent.click(incrementButton);
    
    // ASSERT
    expect(screen.getByTestId('current-count')).toHaveTextContent('1');
  });


  // --- TEST 3: Límite Mínimo (Caso Borde) ---
  it('debe mostrar la advertencia de límite mínimo al iniciar y no permitir decrementar', async () => {
 
  });

  // --- TEST 4: Decremento básico ---

  // --- TEST 5: Límite Máximo ---

  // --- TEST 6: Incremento hasta el máximo y verificar estado del botón ---

  // --- TEST 7: Decremento hasta el mínimo y verificar estado del botón ---

  // --- TEST 8: Resetear el contador ---
   
});