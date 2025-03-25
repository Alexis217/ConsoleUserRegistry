# Se crea una lista vacía para almacenar los datos de las personas
people = []

# Se crea un bucle while True para que se repita el código
while True:
    first_name = input("Ingresa tu nombre: ").strip()
    last_name = input("Ingresa tu apellido: ").strip()
    dni = input("Ingresa tu DNI: ").strip()
    phones = []

    while True:
        phone = input("Ingresa tu número de teléfono (o deja en blanco para finalizar): ").strip()
        if not phone:
            break
        phones.append(phone)
    
    people.append([first_name, last_name, dni, phones])
    
    another = input("¿Quieres añadir más persona? (s/n): ").strip().lower()
    if another != 's':
        break

print("\nResults:")
for person in people:
    print(person)