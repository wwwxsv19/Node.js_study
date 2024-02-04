// 몽고DB를 연동해 사용해 보자!!!!!!!

const { MongoClient, ServerApiVersion } = require('mongodb'); // 몽고DB 패키지 불러오기

// 몽고DB 연결 정보
const uri = "mongodb+srv://wwwxsv19:wwwxsvkamja1119!!@cluster0.pkce9wh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { // 몽고DB 클라이언트 객체 생성
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    await client.connect(); // 몽고DB 접속
    const adminDB = client.db('test').admin(); // adminDB 인스턴스
    const listDatabases = await adminDB.listDatabases(); // 데이터베이스 정보 가져오기
    console.log(listDatabases);
    return "OK!";
}

run().then(console.log()).catch(console.error).finally(() => client.close); // 실행 후 콘솔 출력, catch 이후 접속 종료

/*
출력 결과 : 
{
    databases: [
        { name: 'admin', sizeOnDisk: 286720, empty: false },
        { name: 'local', sizeOnDisk: 1586466816, empty: false }
    ],
    totalSize: 1586753536,
    totalSizeMb: 1513,
    ok: 1,
    '$clusterTime': {
        clusterTime: new Timestamp({ t: 1706675380, i: 46 }),
        signature: {
        hash: Binary.createFromBase64('S5xqbeADzAZNJuipuUbHdAqItWA=', 0),
        keyId: new Long('7270472681063972866')}
    },
    operationTime: new Timestamp({ t: 1706675380, i: 46 })
}
*/