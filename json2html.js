// json2html.js
export default function json2html(data) {
    // Start constructing the table
    let table = '<table data-user="kashyapkvh@gmail.com">';
    
    // Table header: Collect the keys of the first object for column names
    table += '<thead><tr>';
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
        table += `<th>${header}</th>`;
    });
    table += '</tr></thead>';
    
    // Table body: Iterate over the data array and add rows
    table += '<tbody>';
    data.forEach(row => {
        table += '<tr>';
        headers.forEach(header => {
            // Check if the current object has the header property; otherwise, use an empty string
            table += `<td>${row[header] || ''}</td>`;
        });
        table += '</tr>';
    });
    table += '</tbody>';
    
    // Close the table tag
    table += '</table>';
    
    // Return the constructed HTML table
    return table;
}
