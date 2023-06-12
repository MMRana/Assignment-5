const search = prompt('Search By BloodGroup Or Location Or Number');



const result =  bloodDonationClub.filter((data) => data.bloodGroup === search || data.location === search || data.phoneNumber === search || data.age === search);

const finalResult = [];

result.forEach((item, index) =>{
finalResult.push(item)
});

console.table(finalResult);