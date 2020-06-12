const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  /* 1. forEach */ // same as just loop
  
    // Standard loop
  // for(let i=0; i< companies.length; i++) {
  //   console.log(companies[i]);
  // }
    // With forEach 
  // companies.forEach((company)=>{
  //   console.log(company);
  // })

  /* 2. filter */ // same as SQL Query

    // Standard loop Get 21 and older
  // let canDrink = [];
  // for(let i=0; i<ages.length; i++){
  //   if(ages[i] >= 21){
  //     canDrink.push(ages[i]);
  //   }
  // }
    // With filter
  // const canDrink = ages.filter(function(age) {
  //   if(age>=21) {
  //     return true;
  //   }
  // });
    // Short elegant way to write
  // const canDrink = ages.filter(age => age >= 21);
  // console.log(canDrink);
    // Filter retail companies
  // const retailCompanies = companies.filter(company => company.category === 'Retail')
  // console.log(retailCompanies);
    // Get 80s companies
  // const eightiestCompanies = companies.filter(company => company.start >=1980 && company.start <=1989);
  // console.log(eightiestCompanies);
    // Get companies that lasted for 10 years or more
  // const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  // console.log(lastedTenYears);


  /* 3. map */ // Can create new array

    // Create array of company names
    // const companyNames = companies.map(function(company){
    //   return company.name
    // });
    // console.log(companyNames);
    // const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
    // console.log(testMap);

  /* 4. sort */ // Can sort array

    // Sort companies by start date
  // const sortedCompanies = companies.sort(function(s1, s2) {
  //   if(s1.start > s2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });

  // const sortedCompanies = companies.sort((s1, s2) => (s1.start > s2.start ? 1 : -1));
  // console.log(sortedCompanies);

    // Sort ages
  // const sortAges = ages.sort((s1, s2) => s1 - s2);
  // console.log(sortAges);

  /* 5. reduce */

    // Standard way of doing reduce
  // let ageSum = 0;
  // for(let i=0; i<ages.length; i++){
  //   ageSum +=ages[i];
  // }
  // const ageSum = ages.reduce(function(total, age){
  //   return total + age;
  // }, 0);
  // const ageSum = ages.reduce((total, age) => total + age, 0);
  // console.log(ageSum);

    // Get total years of all companies
  // const totalYears = companies.reduce((total, company) => (total + (company.end - company.start)), 0);
  // console.log(totalYears);

  const combined = ages
  .map(age => age * 2)
  .filter(age => age >=40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0)
  console.log(combined);