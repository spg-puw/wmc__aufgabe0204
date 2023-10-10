function messageBus() {
    /* Your implementation */
    
}

function subscriber1Click(data) {
    console.log(`Subscriber 1 received x = ${data.x} and y = ${data.y}.`);
}

function subscriber2Click(data) {
    console.log(`Subscriber 2 received x = ${data.x} and y = ${data.y}.`);
}

function subscriber3Keydown(data) {
    console.log(`Subscriber 3 received key ${data}.`);
}

function main() {
    const bus = messageBus();
    bus.on("click", subscriber1Click);
    const id = bus.on("click", subscriber2Click);
    bus.on("keydown", subscriber3Keydown);

    bus.publish("click", { x: 10, y: 20 });
    bus.publish("keydown", "h");

    bus.unsubscribe(id);
    bus.publish("click", { x: 30, y: 40 });
}

export default { messageBus, subscriber1Click, subscriber2Click, subscriber3Keydown, main }
import { pathToFileURL as _path } from 'url'
if (import.meta.url === _path(process.argv[1]).href) {
    main();
}