# Proyecto de Registro de Usuarios 🚀

Este proyecto consiste en desarrollar un sistema en **JavaScript** y **Python** para consola (cmd/terminal) que permite registrar los datos personales de una persona. Se solicitan los siguientes datos:

- **Nombre**
- **Apellido**
- **DNI**
- **Teléfonos** (se pueden cargar varios)

Una vez ingresados los datos, se muestran en pantalla de la siguiente forma:

```plaintext
['Juan', 'Perez', '26123456', ['3704112233', '3704321456', '3704122321']]
['Andres', 'Acosta', '29123654', ['3704223344', '3704212223']]
```

---

## Archivos del Proyecto 🗂️

- **main.js**: Implementación en JavaScript para la consola.
- **main.py**: Implementación en Python para la consola.

En la carpeta **Matriz_V2**, se encuentran versiones mejoradas del programa con un menú de opciones:

- **RegisterUser.js**: Implementación avanzada en JavaScript.
- **RegisterUser.py**: Implementación avanzada en Python.

---

## Características de Matriz_V2 🌟

El programa en esta versión incluye:

### Menú de Opciones

El usuario podrá elegir entre las siguientes opciones:

1. **Ingresar una nueva persona**.
2. **Mostrar todos los datos**.
3. **Filtrar por DNI**.
4. **Salir del programa**.

### Ingreso de Datos

Los datos deben ser ingresados por línea de comandos para cada persona. Para los teléfonos e hijos, el usuario debe ingresar una lista separada por comas.

### Mostrar Datos

El programa mostrará:

- La matriz tal como fue ingresada.
- Todos los datos detallados, incluyendo la cantidad de hijos y teléfonos de cada persona.

### Filtrar por DNI

El usuario podrá ingresar un DNI y ver la información específica de esa persona, incluyendo la cantidad de teléfonos e hijos.

---

## Instrucciones de Uso 🚀

1. Clona el repositorio:

```bash
git clone <https://github.com/Alexis217/ConsoleUserRegistry.git>
```

2. Ejecuta el archivo deseado:

- Para JavaScript:

```bash
node main.js
```

- Para Python:

```bash
python main.py
```

Para la versión avanzada (Matriz_V2):

- Para JavaScript:

```bash
node Matriz_V2/RegisterUser.js
```

- Para Python:

```bash
python Matriz_V2/RegisterUser.py
```

3. Sigue las instrucciones para ingresar los datos.

---

## Ejemplo de Ejecución 🎮

Al iniciar el programa, verás un flujo similar al siguiente:

```plaintext
Ingresa tu nombre: Juan
Ingresa tu apellido: Perez
Ingresa tu DNI: 26123456
Ingresa tu número de teléfono (o deja en blanco para finalizar): 3704112233
```

En la versión **Matriz_V2**, se mostrará el menú interactivo:

```plaintext
Menú de Opciones:
1. Ingresar una nueva persona
2. Mostrar todos los datos
3. Filtrar por DNI
4. Salir
Seleccione una opción:
```

Si el usuario elige "Mostrar todos los datos", la salida será:

```plaintext
Juan Perez, DNI: 26123456, Teléfonos: ['3704112233', '3704321456']
Andres Acosta, DNI: 29123654, Teléfonos: ['3704223344', '3704212223']
```

Si el usuario filtra por DNI:

```plaintext
Ingrese el DNI a buscar: 26123456
Resultado:
Juan Perez, DNI: 26123456, Teléfonos: ['3704112233', '3704321456']
```

---
