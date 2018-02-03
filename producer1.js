const kafka = require('kafka-node');
console.log("here");

const KeyedMessage = kafka.KeyedMessage;
const Producer = kafka.Producer;

let client = new kafka.KafkaClient('localhost:2181');
let producer = new Producer(client,{requireAcks :1,ackTimeoutMs:100});



producer.on('ready',()=>{
    console.log("producer is rady to connect");
    let count = 1;
    setInterval(()=>{
        let message = [
            {topic : 't',messages : 'kapil'+count+'@gmail.com',partition:0},
            {topic : 't1',messages : 'rishabh1'+count+'@gmail.com',partition:0}
        ];
        console.log(message);
        producer.send(message,(err,data)=>{
            if(err){
                console.log("err while sending",err);

            }
            count++;
            console.log(data);
        })
    },2000)

});

producer.on("error",(err)=>{
    console.log("this is error",err);
});