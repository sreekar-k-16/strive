export default function json2html(data) {
  const columns = ["Name", "Age", "Gender"];
  let table = `<table data-user="sreekarkathroju@gmail.com"><thead><tr>`;

  // Add headers
  for (const col of columns) {
    table += `<th>${col}</th>`;
  }
  table += `</tr></thead><tbody>`;

  // Add data rows
  for (const row of data) {
    table += `<tr>`;
    for (const col of columns) {
      table += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
    }
    table += `</tr>`;
  }

  table += `</tbody></table>`;
  return table;
}
