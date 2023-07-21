export function messageBus() {
    /* Your implementation */
    
}

export function subscriber1Click(data) {
    console.log(`Subscriber 1 received x = ${data.x} and y = ${data.y}.`);
}
export function subscriber2Click(data) {
    console.log(`Subscriber 2 received x = ${data.x} and y = ${data.y}.`);
}
export function subscriber3Keydown(data) {
    console.log(`Subscriber 3 received key ${data}.`);
}

export function main() {
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
if (import.meta.url.endsWith(process.argv[1])) {
    main();
}