// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      allEmployees = [...allEmployees, ...report.allEmployees[department]];
    }
  }

  return allEmployees[Symbol.iterator]();
}
