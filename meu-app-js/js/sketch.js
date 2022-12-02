const mqtt = new Paho.MQTT.Client(MQTT_HOST, MQTT_PORT, "clientjs");
		mqtt.onMessageArrived = onMessageArrived;
		mqtt.connect({
			userName: 'aluno',
			password: '@luno*123',
			timeout: 3,
			onSuccess: onConnect
		});

const onMessageArrived = function (data) {
			const topic = data.destinationName;
			const info = data._getPayloadString();
}
const onConnect = () => {
			console.log("Connected");
			mqtt.subscribe(TOPIC_SENSOR_UPDATE, {
				onSuccess: () => console.log(`Subscribe to ${TOPIC_SENSOR_UPDATE}`)
			});
		}




client = new Paho.MQTT.Client(pahoConfig.hostname, Number(pahoConfig.port), pahoConfig.clientId);
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect({
onSuccess: onConnect
});

function onConnect(connect2) {
    console.log("Connected with Server");
    client.subscribe("v1.0/Observations");
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

function onMessageArrived(message) {
    console.log("onMessageArrived:" + message.payloadString);
    let j = JSON.parse(message.payloadString);
    handleMessage(j);
}

function handleMessage(message) {
    if (message != null || message != undefined) {
           console.log(message)
    }
}