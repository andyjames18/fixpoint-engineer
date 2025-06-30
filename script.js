// script.js

// Dummy data for testing - replace with real Supabase fetch if needed
const dummyFaults = [
  { machine: "COOL SCOOP", issue: "Motor fault", date: "2025-06-20", engineer: "Alice" },
  { machine: "TAGADA", issue: "Lighting failure", date: "2025-06-21", engineer: "Bob" },
];

const dummyRepairCosts = [
  { machine: "COOL SCOOP", cost: 240 },
  { machine: "TAGADA", cost: 130 },
  { machine: "SKILLBALL ZINGY 2", cost: 320 }
];

const dummyDowntime = [
  { machine: "COOL SCOOP", downtime: 4.5 },
  { machine: "TAGADA", downtime: 2.8 },
  { machine: "SKILLBALL ZINGY 2", downtime: 6.2 }
];

const dummyEstimatedLoss = [
  { machine: "COOL SCOOP", loss: 85 },
  { machine: "TAGADA", loss: 105 },
  { machine: "SKILLBALL ZINGY 2", loss: 190 }
];

function renderTable(containerId, data, columns) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  columns.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach(item => {
    const row = document.createElement("tr");
    columns.forEach(col => {
      const td = document.createElement("td");
      td.textContent = item[col.toLowerCase()] || "-";
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  container.appendChild(table);
}

function loadDashboardData() {
  renderTable("faultsTable", dummyFaults, ["Machine", "Issue", "Date", "Engineer"]);
  renderTable("waitingRepairTable", dummyFaults, ["Machine", "Issue", "Date"]);
  renderTable("repairCostsTable", dummyRepairCosts.sort((a, b) => b.cost - a.cost), ["Machine", "Cost"]);
  renderTable("downtimeChart", dummyDowntime, ["Machine", "Downtime"]);
  renderTable("estimatedLossChart", dummyEstimatedLoss, ["Machine", "Loss"]);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dropdownToggle").addEventListener("click", () => {
    document.getElementById("dropdownMenu").classList.toggle("show");
  });
  loadDashboardData();
});

function exportToExcel() {
  alert("Excel export would trigger here – integrate SheetJS or Supabase data export.");
}

