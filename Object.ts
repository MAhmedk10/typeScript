let studentProfile = {
    fullName: "Muhammad ahmed raza",
    age: 24,
    skill: "athlete",
    percentage: 65,
    };
    
    studentProfile.age = studentProfile.age + 1 ;
    console.log(studentProfile.percentage);
    console.log(studentProfile["fullName"]);
    console.log(`the name of student is ${studentProfile.fullName} and age is ${studentProfile.age}`)

    //task1 of Object.

    let product = {
    title: "astronauts pen",
    ratings: 4.5,
    isDeal: true ,
    price: 426
};
console.log(product);


// task2 of Object.

let instaProfile = {
    idName: "m.ahmedraza_4",
    followers: 0,
    following: 1,
    isPublic: true,
    bio: "consistency",
    };
    console.log(instaProfile["idName"]);
    console.log(instaProfile.following);
    console.log(instaProfile);