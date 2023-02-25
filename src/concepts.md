- El elemento de la linea siguiente se llama 'fragmento'.
- Este tipo de funcion solo permite que sus componentes tengan un solo
elemento padre, de lo contrario da error y pide que se ponga todo
codigo en un fragment, definido anteriormente.
- Esto es debido a que asi funciona un elemento JSX(JavaScript Extension).
- Pueden usarse tambien arrow functions para los JSX.

- Props: variables/valores/atributos que podemos mandar a los componentes
en la web para ser utilizados por dichos componentes.
- Estado de un componente: variable que sera consistente dentro de una app, es inmutable(solo puede modificarse sobreescribiendo el valor del estado).
    - useState: nos permite crear estados dentro de los componentes(puede haber mas de un estado).
- Tres puntos antes de una variable (...variable) quieren decir que se esta pretendiendo desestructurar dicha variable, ya que dicha variable probablemente es de tipo objeto.
- event.preventDefault(): nos permite evitar que la pagina o formulario se reinicia.
- uuid: nos genera un id unico en caso de necesitarlo. Se instala la libreria con el comando "npm install uuid".