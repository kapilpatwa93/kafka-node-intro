let kafka = require("kafka-node");
let uuid = require("uuid");

const client = new kafka.Client("http://localhost:2181");

const producer = new kafka.Producer(client);
producer.on("ready",()=>{
    console.log("kafka producer is connected and ready");
});

producer.on("error",(err)=>{
    console.log("err",err);
});


/*
const KafkaService = {
    sendRecord: ({type,userId,sessionId,data},callback)=>{
        if(!userId){
            callback(new Error('User id is required'));
        }
        const event = {
            id : uuid.v4(),
            timeStamp: Date.now(),
            userId : userId,
            sessionId: sessionId,
            type : type,
            data: data
        };
        const buffer = new Buffer.from(JSON.stringify(event));
        const record = [{
            topic : 't',
            messages : buffer,
            attributes : 1
        }];
        producer.send(record,callback);
    }
}*/
