# ¿Cómo usar este script? - Giovani Calderon


1. Abrir la plataforma de eventos https://eventos.cucei.udg.mx/
2. Ir a la sección "Actividades"
3. Configurar filtros y ordenar por fecha. Escoger el listado más completo (25)
4. Abrir DevTools (Ctrl + Shift + I) y dirigirse a la pestaña "Console"
5. Ejecutar el comando recoger-en-tsv.js
6. Abrir el archivo .tsv descargado
7. Seleccionar todo (Ctrl+E), y copiar (Ctrl+C).
8. Pegarlo en la primer columna del documento Eventos CUCEI de Google Sheets


**Nota: Al copiar el contenido al sheets habrá columnas que tendrán que llenar manualmente como:**
- Día (de la semana)
- Protocolo
- Servicios Generales
- Observaciones SG
- Multimedia
- Observaciones UMI
- Unidad de difusión
- Responsable
- Matutino
- Vespertino
- Asistencia

Además, en los datos de tipo Select, como Auditorio y Solicitud.
Hay que verificar que la entrada esté definida dentro de las opciones del sheets.


--------------------------------------------------------------------------
La estructura/orden en el que el tsv registra los datos es:
- Fecha
- Día
- Hora de Inicio
- Hora Fin
- Evento
- Protocolo
- Servicios Generales
- Observaciones SG
- Multimedia
- Observaciones UMI
- Unidad de Difusion
- Auditorio
- Solicitud/Status
- Responsable
- Matutino
- Vespertino
- Asistencia

Tomarlo en cuenta, para no perder la secuencia al pegarlo en Sheets.
