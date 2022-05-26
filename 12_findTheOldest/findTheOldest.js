const findTheOldest = function(array) {
    const oldest = array.reduce((oldestPerson, person) => {
        const currentAge = calculateAge(person.yearOfBirth, person.yearOfDeath);
        const oldestAge = calculateAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        return oldestAge < currentAge ? person : oldestPerson;
    });
    return oldest;
};

const calculateAge = function(birthYear, deathYear) {
    if(!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
