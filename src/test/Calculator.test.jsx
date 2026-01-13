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
    
    // ACT: No hay acción
    
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
    // ARRANGE
    render(<Counter />);
    const decrementButton = screen.getByTestId('btn-decrementar');
    const warningElement = screen.getByTestId('warning-message');
    
    // ACT: Intentar decrementar cuando ya está en 0
    fireEvent.click(decrementButton);
    
    // ASSERT
    expect(screen.getByTestId('current-count')).toHaveTextContent('0');
    expect(warningElement).toBeInTheDocument();
    expect(warningElement).toHaveTextContent(/límite mínimo/i);
  });

  // --- TEST 4: Decremento básico ---
  it('debe decrementar el contador en 1 al hacer clic', async () => {
    // ARRANGE
    render(<Counter />);
    const incrementButton = screen.getByTestId('btn-incrementar');
    const decrementButton = screen.getByTestId('btn-decrementar');
    
    // ACT: Primero incrementar a 1, luego decrementar
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    
    // ASSERT
    expect(screen.getByTestId('current-count')).toHaveTextContent('0');
  });

  // --- TEST 5: Límite Máximo ---
  it('debe mostrar la advertencia de límite máximo al alcanzar el valor máximo', async () => {
    // ARRANGE
    render(<Counter />);
    const incrementButton = screen.getByTestId('btn-incrementar');
    
    // ACT: Incrementar hasta el límite máximo (asumiendo que es 10)
    for (let i = 0; i < 11; i++) {
      fireEvent.click(incrementButton);
    }
    
    // ASSERT
    expect(screen.getByTestId('current-count')).toHaveTextContent('10');
    const warningElement = screen.getByTestId('warning-message');
    expect(warningElement).toBeInTheDocument();
    expect(warningElement).toHaveTextContent(/límite máximo/i);
  });

  // --- TEST 6: Incremento hasta el máximo y verificar estado del botón ---
  it('debe deshabilitar el botón de incrementar al alcanzar el límite máximo', async () => {
    // ARRANGE
    render(<Counter />);
    const incrementButton = screen.getByTestId('btn-incrementar');
    
    // ACT: Incrementar hasta el máximo
    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementButton);
    }
    
    // ASSERT
    expect(screen.getByTestId('current-count')).toHaveTextContent('10');
    expect(incrementButton).toBeDisabled();
  });

  // --- TEST 7: Decremento hasta el mínimo y verificar estado del botón ---
  it('debe deshabilitar el botón de decrementar al alcanzar el límite mínimo', async () => {
    // ARRANGE
    render(<Counter />);
    const decrementButton = screen.getByTestId('btn-decrementar');
    
    // ACT: El contador ya inicia en 0 (mínimo)
    
    // ASSERT
    expect(screen.getByTestId('current-count')).toHaveTextContent('0');
    expect(decrementButton).toBeDisabled();
  });

  // --- TEST 8: Resetear el contador ---
  it('debe resetear el contador a 0 al hacer clic en el botón de reset', async () => {
    // ARRANGE
    render(<Counter />);
    const incrementButton = screen.getByTestId('btn-incrementar');
    const resetButton = screen.getByTestId('btn-reset');
    
    // ACT: Incrementar varias veces y luego resetear
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('current-count')).toHaveTextContent('3');
    
    fireEvent.click(resetButton);
    
    // ASSERT
    expect(screen.getByTestId('current-count')).toHaveTextContent('0');
  });
   
});