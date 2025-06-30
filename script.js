function toggleDropdown() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function showSection(id) {
  const sections = document.querySelectorAll('.tabSection');
  sections.forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function exportToExcel() {
  const faults = document.getElementById("faultList").innerText;
  const blob = new Blob([faults], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Reported_Faults.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

