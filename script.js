const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const tabContent = document.getElementById('tabContent');

menuButton.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

function switchTab(tabName) {
  let content = '';
  switch (tabName) {
    case 'Machine Repair Cost':
      content = `
        <div class="card"><h3>Average cost per machine repair</h3><p class="metric">£158</p></div>
        <div class="card"><h3>Average downtime</h3><p class="metric">3.2 hrs</p></div>
        <div class="card"><h3>Average time to completion</h3><p class="metric">6.8 hrs</p></div>
      `;
      break;
    case 'Reported Faults':
      content = `
        <div class="card"><h3>Reported Faults</h3><p>View submitted reports by engineers</p></div>
        <div class="card"><button onclick="exportToExcel()">Export to Excel</button></div>
      `;
      break;
    case 'Machines Awaiting Repair':
      content = `<div class="card"><h3>Machines Awaiting Repair</h3><p>10 machines pending</p></div>`;
      break;
    case 'Average Repair Time':
      content = `<div class="card"><h3>Average Repair Time</h3><p class="metric">4.2 hrs</p></div>`;
      break;
    case 'Estimated Loss Summary':
      content = `<div class="card"><h3>Estimated Loss Summary</h3><p class="metric">£1,240</p></div>`;
      break;
    default:
      content = `<div class="card"><h3>Default View</h3></div>`;
  }
  tabContent.innerHTML = content;
  dropdownMenu.style.display = 'none';
}

function exportToExcel() {
  alert('Export to Excel triggered (function placeholder)');
}
