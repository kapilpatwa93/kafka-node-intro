let kafka = require('kafka-node');
let zookeeper = require('node-zookeeper-client');
const zkConnection = 'zookeeper:2181';

const consumerGroupName = 'kafka-consumer-group';
let client = new kafka.Client('localhost:2181');


let consumer = new kafka.HighLevelConsumer(client,[
    {topic : 't',partition : 0},
    {topic : 't1',partition:1}
    ],{autoCommit : false});
consumer.on("message",(message)=>{
    console.log("message",message);
});
consumer.on('error', function (err) {
    console.log("err",err);
});
consumer.on('ready',function () {
    console.log("ready");
});