 for (let day of daysOfWeek) {
    totalSleepHours += getSleepHours(day);
  

  return totalSleepHours;
};

const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 7;
  } else if (day === "saturday") {
    return 9;
  } else if (day === "sunday") {
    return 8;
  } else {
    return 0; 
  }
};


console.log(getSleepHours("tuesday")); 


const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");


const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got more sleep than needed by ${
        actualSleepHours - idealSleepHours
      } hours.`
    );
  } else {
    console.log(
      `You need ${idealSleepHours - actualSleepHours} more hours of sleep.`
    );
  }
};


calculateSleepDebt();
