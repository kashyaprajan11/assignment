const jsonArr = [
  [
    "machine_name",
    "machine_id",
    "current",
    "voltage",
    "power_factor",
    "active_power",
    "apparent_power",
    " reactive_power",
    "daily_energy",
    "monthly_energy",
    "yearly_energy",
    "idle_daily",
    "idle_monthly",
    "idle_yearly",
  ],
  [
    "Auto Winding Machine",
    "machine001",
    0,
    0,
    0,
    0.0,
    0.0,
    0.0,
    0,
    0,
    0,
    0,
    0,
    0,
  ],
  ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
];

const tableInfo = document.querySelector(".table-info");

const table = document.createElement("table");
const tr = document.createElement("tr");

for (let i = 0; i < jsonArr[0].length; i++) {
  let th = document.createElement("th");
  th.innerText = jsonArr[0][i];
  tr.append(th);
}

table.append(tr);
tableInfo.append(table);

for (let i = 1; i < jsonArr.length; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < jsonArr[0].length; j++) {
    let td = document.createElement("td");
    td.append(jsonArr[i][j]);
    tr.append(td);
  }
  table.append(tr);
}
