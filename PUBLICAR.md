# Publicar Yo Voy Por Ti

## Arquitectura recomendada

- **Vercel:** publica la página y entrega el enlace público.
- **Supabase:** guarda pedidos, usuarios, repartidores y estados.
- **GitHub privado (recomendado):** conserva el código y permite que Vercel publique cada actualización automáticamente.

## Estado actual

La app ya incluye el estimador por millas, paradas, tamaño y prioridad; envío por WhatsApp; guardado opcional en Supabase; y acceso demo o real para repartidores.

## 1. Supabase

La organización conectada ya tiene los 2 proyectos permitidos por el plan gratuito. Para continuar se debe elegir una opción: pausar/eliminar un proyecto que no se use, subir al plan Pro o autorizar el uso del proyecto genérico existente.

Cuando haya un proyecto disponible:

1. Abrir SQL Editor y ejecutar **supabase/schema.sql**.
2. Copiar Project URL y la clave pública anon/publishable.
3. Pegarlas en **config.js**. Nunca colocar la service_role key en la web.
4. En Authentication > Users, crear cada repartidor con email y contraseña.
5. Convertir únicamente al propietario en administrador con la instrucción indicada al final de schema.sql.

## 2. Vercel

Se puede desplegar directamente el ZIP o la carpeta. Para actualizaciones frecuentes conviene crear después un repositorio privado en GitHub y conectarlo a Vercel.

## Fórmula del estimado

- Salida: $7
- Distancia: $1.50 por milla
- Mínimo de salida + distancia: $12
- Parada adicional: $4
- Prioridad: $4
- Tamaño mediano: $3; grande: $7
- Suplemento según servicio: $0–$3
- Espera: 10 minutos incluidos; después $0.50 por minuto, con confirmación
- Compra o recibo: se suma aparte y no se considera ganancia del repartidor
