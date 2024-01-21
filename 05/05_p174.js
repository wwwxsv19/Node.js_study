// callback 이해하기 ( 회원가입 API )

const DB = [];

function register(user) {
    return saveDB(user, function(user) {
        return sendEmail(user, function(user) {
            return getResult(user);
        });
    });
}

function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return callback(user);
}

function sendEmail(user, callback) {
    console.log(`email to ${user.email}`);
    return callback(user);
}

function getResult(user, callback) {
    return `success register ${user.name}`;
}

const result = register({ email : "wwwxsv19@test.com", password : "1234", name : "wwwxsv19"});
console.log(result);