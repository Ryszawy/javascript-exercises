const findTheOldest = function (people) {
  const oldest = people.sort((a, b) => {
    let aPerson;
    let bPerson;
    const today = new Date();

    if (typeof a.yearOfDeath === "undefined") {
      aPerson = today.getFullYear() - a.yearOfBirth;
    } else {
      aPerson = a.yearOfDeath - a.yearOfBirth;
    }

    if (typeof b.yearOfDeath === "undefined") {
        bPerson = today.getFullYear() - b.yearOfBirth;
      } else {
        bPerson = b.yearOfDeath - b.yearOfBirth;
      }

    return aPerson > bPerson ? -1 : 1;
  });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
