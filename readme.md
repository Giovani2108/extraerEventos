# 📄 Script para Exportar Eventos CUCEI a TSV  
**Autor:** Giovani Calderón

Este script permite extraer datos de eventos desde la plataforma de eventos de CUCEI y generar un archivo `.tsv` (valores separados por tabulaciones) listo para importar en Google Sheets.

---

## 🛠️ ¿Cómo usar este script?

1. Abre la plataforma de eventos:  
   👉 [https://eventos.cucei.udg.mx/](https://eventos.cucei.udg.mx/)

2. Dirígete a la sección **"Actividades"**.

3. Configura los filtros y ordena por **fecha**.  
   Cambia el selector de cantidad de resultados a **25 (máximo disponible)**.

4. Abre las herramientas de desarrollador del navegador:  
   **Ctrl + Shift + I** (ó clic derecho → *Inspeccionar*)  
   Luego selecciona la pestaña **Console**.

5. Copia y pega el contenido de `recoger-en-tsv.js` en la consola y presiona **Enter**.

6. Se descargará automáticamente un archivo llamado `eventos.tsv`.

7. Abre el archivo descargado con Excel, Google Sheets u otro editor.

8. Copia todo el contenido (Ctrl + E → Ctrl + C) y pégalo en la **primera columna** del documento oficial de eventos en Google Sheets.

---

## 📌 Campos a completar manualmente

Algunos campos del documento generado estarán vacíos y deben ser llenados manualmente en Google Sheets:

- Día (de la semana)
- Protocolo
- Servicios Generales
- Observaciones SG
- Multimedia
- Observaciones UMI
- Unidad de Difusión
- Responsable
- Matutino
- Vespertino
- Asistencia

Además, **verifica que las entradas en campos como "Auditorio" y "Solicitud" coincidan con las opciones válidas en el documento de Sheets**, ya que estos pueden tener listas desplegables.

---

## 🧾 Estructura del archivo `eventos.tsv`

El archivo exportado contiene columnas en el siguiente orden:

1. Fecha  
2. Día  
3. Hora de Inicio  
4. Hora Fin  
5. Evento  
6. Protocolo  
7. Servicios Generales  
8. Observaciones SG  
9. Multimedia  
10. Observaciones UMI  
11. Unidad de Difusión  
12. Auditorio  
13. Solicitud (estatus)  
14. Responsable  
15. Matutino  
16. Vespertino  
17. Asistencia

⚠️ **IMPORTANTE:** Asegúrate de que al pegar el contenido en Google Sheets no se altere el orden de las columnas para evitar errores de formato o pérdida de datos.

---

## ✅ Requisitos

- Navegador moderno (Chrome recomendado)
- Acceso a la página de eventos CUCEI
- Permisos para editar el documento oficial en Google Sheets

---

## 🧑‍💻 Licencia

Este script fue creado con fines académicos y puede ser adaptado o reutilizado libremente por la comunidad universitaria.

---
