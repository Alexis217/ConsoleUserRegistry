def mostrar_menu():
    print("\n--- Menú de Opciones ---")
    print("1. Ingresar una nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")

def agregar_persona(lista_personas):
    nombre = input("Ingrese el nombre: ").strip()
    apellido = input("Ingrese el apellido: ").strip()
    dni = input("Ingrese el DNI: ").strip()
    
    telefonos = input("Ingrese teléfonos (separados por coma): ").strip()
    lista_telefonos = [t.strip() for t in telefonos.split(",") if t.strip()]
    
    hijos = input("Ingrese nombres de hijos (separados por coma): ").strip()
    lista_hijos = [h.strip() for h in hijos.split(",") if h.strip()]
    
    lista_personas.append([nombre, apellido, dni, lista_telefonos, lista_hijos])
    print("\n¡Persona agregada correctamente! ✔️")

def mostrar_datos(lista_personas):
    print("\n--- Matriz de Datos ---")
    for persona in lista_personas:
        print(persona)
    
    print("\n--- Detalle de Personas ---")
    for persona in lista_personas:
        num_telefonos = len(persona[3])
        num_hijos = len(persona[4])
        print(f"{persona[0]} {persona[1]} | DNI: {persona[2]} | Teléfonos: {num_telefonos} | Hijos: {num_hijos}")

def filtrar_por_dni(lista_personas):
    dni = input("Ingrese DNI a buscar: ").strip()
    
    for persona in lista_personas:
        if persona[2] == dni:
            num_telefonos = len(persona[3])
            num_hijos = len(persona[4])
            print(f"\nDatos de {persona[0]} {persona[1]}:")
            print(f"DNI: {dni}")
            print(f"Teléfonos ({num_telefonos}): {', '.join(persona[3])}")
            print(f"Hijos ({num_hijos}): {', '.join(persona[4])}")
            return
    
    print("\n⚠️ No se encontró una persona con ese DNI")

def main():
    personas = []
    
    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción (1-4): ").strip()
        
        match opcion:
            case "1":
                agregar_persona(personas)
            case "2":
                mostrar_datos(personas)
            case "3":
                filtrar_por_dni(personas)
            case "4":
                print("\n¡Hasta luego! 👋")
                break
            case _:
                print("\n❌ Opción inválida. Intente nuevamente.")

if __name__ == "__main__":
    main()