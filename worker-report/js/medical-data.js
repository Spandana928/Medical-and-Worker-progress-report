function insertTable(sectionId, title, headers, rows) {
    const section = document.getElementById(sectionId);
    const h2 = document.createElement('h2');
    h2.textContent = title;
  
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
  
    headers.forEach(h => {
      const th = document.createElement('th');
      th.textContent = h;
      headerRow.appendChild(th);
    });
  
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
    rows.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  
    table.appendChild(tbody);
    section.appendChild(h2);
    section.appendChild(table);
  }
  
  window.onload = () => {
    insertTable('prescription-drugs', 'Prescription Drugs', ['Drug Name', 'Date Purchased', 'Healthcare Provider Name', 'Paid Amount'], [['Naproxen', 'Feb 28, 2024', 'Dr. Best', '$20.00']]);
    insertTable("otc-drugs", "Over-the-Counter Drugs", ["Drug Name", "Date Purchased", "Paid Amount", "Seller's Name", "Reason"], [["Advil", "March 28, 2024", "$8.00", "Shoppers Drug Mart", "Pain"]]);
insertTable("supplies", "Bandages, Braces or Other Medical Supplies", ["Item Purchased", "Date Purchased", "Prescribed?", "Paid Amount", "Seller's Name"], [["Tensor", "Feb 28, 2024", "Yes - Dr. Best", "$10.00", "Shoppers Drug Mart"]]);
insertTable("parking", "Parking for Medical Appointments", ["Address", "Date", "Paid Amount", "Meter Number"], [["333 St Mary Ave, Winnipeg", "March 28, 2024", "$10.00", "12245"]]);
insertTable("mileage", "Mileage to Medical Appointments", ["Healthcare Provider Address", "Workplace Address", "Distance"], [["HSC, 820 Sherbrook", "WCB, 333 Broadway", "20 km"]]);
insertTable("fare", "Bus or Taxi Fare for Medical Appointments", ["Date", "Starting Point", "Healthcare Provider", "Transport", "Fare"], [["March 28, 2024", "HSC Women's Hospital", "665 William Ave", "Bus", "$3.00"], ["March 27, 2024", "25 Furby St", "440 Edmonton St", "Taxi", "$15.00"]]);

  };
  
  /* js/progress-data.js */

  