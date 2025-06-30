// script.js

// Sample data for chart rendering and export
const sampleReports = [
  { machine: 'Rocket Launch', cost: 340, downtime: 2.5, loss: 150 },
  { machine: 'Skill Cut', cost: 210, downtime: 3.1, loss: 90 },
  { machine: 'Tagada', cost: 410, downtime: 4.2, loss: 220 },
  { machine: 'Double Pony', cost: 180, downtime: 2.0, loss: 60 },
  { machine: 'Fast and Furious SDX', cost: 560, downtime: 5.5, loss: 300 }
];

function populateTable(tableId, field) {
  const container = document.getElementById(tableId);
  container.innerHTML = '';
  const table = document.createElement('table');
  const header = document.createElement('tr');
  header.innerHTML = '<th>Machine</th><th>' + field + '</th>';
  table.appendChild(header);

  sampleReports.sort((a, b) => b[field] - a[field]).forEach(report => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${report.machine}</td><td>£${report[field]}</td>`;
    table.appendChild(row);
  });
  container.appendChild(table);
}

function renderChart(containerId, label, field) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: sampleReports.map(r => r.machine),
      datasets: [{
        label: label,
        data: sampleReports.map(r => r[field]),
        backgroundColor: 'rgba(255,99,132,0.5)'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: value => `£${value}`
          }
        }
      }
    }
  });
}

function exportToExcel() {
  let csv = 'Machine,Cost,Downtime,Loss\n';
  sampleReports.forEach(r => {
    csv += `${r.machine},£${r.cost},${r.downtime}h,£${r.loss}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'fixpoint_reports.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

window.onload = () => {
  populateTable('repairCostsTable', 'cost');
  populateTable('waitingRepairTable', 'downtime');
  renderChart('downtimeChart', 'Downtime (hrs)', 'downtime');
  renderChart('estimatedLossChart', 'Estimated Loss (£)', 'loss');
};

