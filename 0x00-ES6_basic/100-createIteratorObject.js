// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department in report.allEmployees) {
    if (report.allEmployees.hasOwnProperty(department)) {
      allEmployees = [...allEmployees, ...report.allEmployees[department]];
    }
  }
  
  return allEmployees[Symbol.iterator]();
}
