
import { describe, it, expect } from 'vitest';
// 💡 IMPORTACIÓN ACTUALIZADA: Usando el nombre correcto de la función
import { calculateDiscount } from '../utils/DataValidator.js';
// Usamos 'describe' para agrupar todos los tests relacionados con la función de descuento.
describe('calculateDiscount', () => {

    // --- Tests de Éxito (Cálculos Nominales) ---
    
    it('debe calcular el precio con un descuento nominal del 20%', () => {
        // ARRANGE (Preparar: Precio de 100, Descuento del 20%)
        const price = 100;
        const discount = 20;

        // ACT (Ejecutar: Llamar a la función)
        const result = calculateDiscount(price, discount);

        // ASSERT (Verificar: El resultado debe ser 80)
        expect(result).toBe(80.00);
    });

    // --- Test 2 Testear con 0% de descuento (Caso Borde)
    it('debe devolver el precio original cuando el descuento es 0% ', () => {

    });

    // --- Test 3 Testear con 100% de descuento (Caso Borde) ---
   
    // --- Test 4: Verificar que se lanza un error si el precio inicial es cero o negativo.


    // --- Tests 5: Precisión Decimal Verificar que el resultado se redondea correctamente a dos decimales (Punto 13).
    
    // -- Test 6: testear el toThrow todos los casos posibles



});