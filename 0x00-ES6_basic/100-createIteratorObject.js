// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employeeNames = [];
  for (const department in allEmployees) {
    employeeNames.push(...allEmployees[department]);
  }
  return employeeNames;
}
