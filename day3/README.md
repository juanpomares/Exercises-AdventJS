# Ejercicio día 3 (leer cartas)  

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().  

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.  

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes \[ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...  

Ejemplos(tests):  

"bici coche (balón) bici coche peluche"  -> ✅  
"(muñeca) consola bici" -> ✅  

"bici coche (balón bici coche"  -> ❌  
"peluche (bici \[coche) bici coche balón"  -> ❌  
"(peluche {) bici"  -> ❌  
"() bici" -> ❌  
      
Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!  