# CONTANDO POPS!

Explota todos los globos, y cuando lo hagas muestra un mensaje de enhorabuena.

[Demo](https://js-beginners.github.io/balloon-popping-game/)

# PASOS A SEGUIR

0. Piensa como vas a mantener el estado de la aplicación. Es decir, como controlar cuantos globos han explotado, y cómo vas a considerar que el juego ha acabado.
1. Recupera todos los elementos HTML que representan globos con querySelectorAll
2. Asocia a cada uno de los elementos HTML recuperados un listener con el evento [mouseover](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener). Comprueba que al pasar el ratón por cualquier globo, muestras algún mensaje por consola.
4. Cada vez que pases el ratón por encima de un globo, debes modificar el elemento HTML que ha disparado el evento para que muestre "POP!" en vez del globo. No te compliques: solo es necesario modificar un par de propiedades de los estilos.
5. Actualiza el estado de la aplicación cada vez que "explotes" un globo; y verifica si ya los has explotado todos. En tal caso, muestra el DIV del HTML que tiene por id "yay-no-balloons".
**IMPORTANTE**: Una vez hemos explotado un globo, es muy importante [**eliminar el event listener**](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener) de dicho elemento. Tenéis que usar la propiedad event.currentTarget; pues ese es el elemento sobre el cual tenéis que aplicar el método removeEventListener.

# BONUS
1. Implementa un contador que te diga cuantos globos quedan por explotar (que se vea en la página Web).
2. Implementa un botón de **reset** que reinicie el estado de todos los globos a inflado. NO se puede recargar la página!
3. Implementa una funcionalidad __inflar__, que permita, al hacer **doble click** en un "POP!", volver a inflar el globo. ¡Actualiza el contador! 

Mira como ha resuelto el autor el proyecto para comparar soluciones, ya que lo aborda de manera totalmente distinta.
