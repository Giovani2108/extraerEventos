// Paso 1: Recolectar datos de cada fila de la tabla
const filas = Array.from(document.querySelectorAll("tr"));
const eventos = [];

filas.forEach(fila => {
  const celdas = fila.querySelectorAll("td");
  if (celdas.length >= 4) {
    const evento = celdas[0]?.innerText.trim() || "";
    const auditorio = celdas[1]?.innerText.trim() || "";
    
    const fechaYHora = celdas[2]?.innerText.trim().split("\n").map(s => s.trim()) || [];
    const fechaTexto = fechaYHora[0] || "";
    const horarioTexto = fechaYHora[1] || "";
    const solicitud = celdas[3]?.innerText.trim() || "";

    const fecha = convertirFecha(fechaTexto); // dd-mm-yyyy
    const dia = "-"; // ← Aquí se deja vacía la columna "Día"
    const [horaInicio, horaFin] = separarHoras(horarioTexto);

    eventos.push({
      Fecha: fecha,
      Día: "",                 // Cambiado de "-" a ""
      "Hora de Inicio": horaInicio,
      "Hora Fin": horaFin,
      Evento: evento,
      Protocolo: "",
      "Servicios Generales": "",
      "Observaciones SG": "",
      Multimedia: "",
      "Observaciones UMI": "",
      "Unidad de Difusion": "",
      Auditorio: auditorio,
      Solicitud: solicitud,
      Responsable: "",
      Matutino: "",
      Vespertino: "",
      Asistencia: ""
    });

  }
});

// Función para convertir "17 de junio de 2025" a "17-06-2025"
function convertirFecha(fechaTexto) {
  const meses = {
    enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06",
    julio: "07", agosto: "08", septiembre: "09", octubre: "10", noviembre: "11", diciembre: "12"
  };
  const partes = fechaTexto.toLowerCase().match(/(\d{1,2}) de (\w+) de (\d{4})/);
  if (!partes) return fechaTexto;
  const [, dia, mesNombre, anio] = partes;
  const mes = meses[mesNombre] || "00";
  return `${dia.padStart(2, "0")}-${mes}-${anio}`;
}

// Extraer hora inicio y fin desde texto como "9:00 AM a 2:30 PM" y convertir a formato 24h
function separarHoras(horaStr) {
  const partes = horaStr.split(" a ");
  return [convertirHora24(partes[0]?.trim() || ""), convertirHora24(partes[1]?.trim() || "")];
}

// Convierte una hora en formato "9:00 AM" a "09:00:00" en formato 24h
function convertirHora24(hora12h) {
  // Separar hora y AM/PM
  const match = hora12h.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?/i);
  if (!match) return hora12h; // Si no coincide, devolver tal cual

  let [_, hora, minutos, segundos, ampm] = match;
  hora = parseInt(hora, 10);
  minutos = minutos || "00";
  segundos = segundos || "00";
  ampm = (ampm || "").toUpperCase();

  if (ampm === "PM" && hora < 12) {
    hora += 12;
  } else if (ampm === "AM" && hora === 12) {
    hora = 0;
  }

  // Formatear con ceros a la izquierda
  const horaStr = hora.toString().padStart(2, "0");
  return `${horaStr}:${minutos}:${segundos}`;
}


// Encabezados exactos en el orden deseado
const encabezados = [
  "Fecha", "Día", "Hora de Inicio", "Hora Fin", "Evento", "Protocolo",
  "Servicios Generales", "Observaciones SG", "Multimedia", "Observaciones UMI",
  "Unidad de Difusion", "Auditorio", "Solicitud", "Responsable",
  "Matutino", "Vespertino", "Asistencia"
];

// Construcción del CSV sin encabezados
var csv = "\uFEFF";

eventos.forEach(evento => {
  const fila = encabezados.map(col => (evento[col] || "").replace(/"/g, '""'));
  csv += fila.join("\t") + "\n";
});


// Crear un blob con el contenido CSV y tipo correcto
const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });

// Crear un enlace temporal para descargar el archivo
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "eventos.tsv";
document.body.appendChild(a);
a.click();

// Limpiar
setTimeout(() => {
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}, 0);
