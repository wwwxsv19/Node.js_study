// p.174 코드를 promise 객체로 바꾸기

const DB = [];

function saveDB(user) {
    const oldDBSize = DB.length;

    DB.push(user);
    console.log(`save ${user.name} to DB`);

    return new Promise((resolve, reject) => { // callback 대신 promise
        if(DB.length > oldDBSize) {
            resolve(user);
        } else {
            reject(new error("Save DB Error!"));
        }
    });
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => {
        resolve(user);
    })
}

function getResult(user) {
    return new Promise((resolve, reject) => {
        resolve(`success register ${user.name}`);
    })
}

function registerByPromise(user) {
    const result = saveDB(user).then(sendEmail).then(getResult);
    console.log(result);
    return result;
}

const myUser = { email : "wwwxsv19@test.com", password : "1234", name : "wwwxsv19" };

/*
const result = registerByPromise(myUser);
result.then(console.log);
*/

// 동시에 promise 객체를 호출해 결괏값 받기 : Promise.all([pm1], [pm2], ...  [pmn]);

allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
allResult.then(console.log);