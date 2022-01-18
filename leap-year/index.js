function leapyear() {
  for (let i = 2022; i <= 2200; i++) {
    if (isLeapYear(i)) {
      printLeapYear(i);
    }
  }
}

function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function printLeapYear(year) {
  document.write(year);
  document.write("<br />");
}
