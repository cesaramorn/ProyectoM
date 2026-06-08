const months = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

export function parseSpanishMonthYear(dateString) {
  const [monthName, year] = dateString
    .toLowerCase()
    .split(" de ");

  return new Date(Number(year), months[monthName], 1);
}