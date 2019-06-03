function daysInYear(year) {
  try {
    if (!Number.isInteger(year)) {
      throw new SyntaxError('exeption');
    }
    const daysInFebruary = new Date(year, 1, 29).getDate();
    if (daysInFebruary === 29) {
      console.log(366);
    } else {
      console.log(365);
    }
  }
  catch (err) {
    console.log(err.message);
  }
}

daysInYear(2019);
daysInYear('2019');
daysInYear(2020);
daysInYear(2020.2);
daysInYear(2100);
daysInYear({year: 2100}); 
