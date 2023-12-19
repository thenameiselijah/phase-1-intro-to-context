function createEmployeeRecord(employeeData) {
    const [firstName, familyName, title, payPerHour] = employeeData;
  
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  function createEmployeeRecords(employeeDataArray) {
    return employeeDataArray.map(employeeData => createEmployeeRecord(employeeData));
  }
  function createTimeInEvent(employeeRecord, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
  
    employeeRecord.timeInEvents.push({
      type: 'TimeIn',
      date,
      hour: parseInt(hour, 10),
    });
  
    return employeeRecord;
  }
  function createTimeOutEvent(employeeRecord, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
  
    employeeRecord.timeOutEvents.push({
      type: 'TimeOut',
      date,
      hour: parseInt(hour, 10),
    });
  
    return employeeRecord;
  }
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  
    return hoursWorked;
  }
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payPerHour = employeeRecord.payPerHour;
    const wagesEarned = hoursWorked * payPerHour;
  
    return wagesEarned;
  }
  function allWagesFor(employeeRecord) {
    const dates = employeeRecord.timeInEvents.map(event => event.date);
    const totalWages = dates.reduce((total, date) => total + wagesEarnedOnDate(employeeRecord, date), 0);
  
    return totalWages;
  }
  function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employeeRecord) => total + allWagesFor(employeeRecord), 0);
  
    return totalPayroll;
  }
  function createEmployeeRecords(employeeDataArray) {
    return employeeDataArray.map(employeeData => createEmployeeRecord(employeeData));
  }