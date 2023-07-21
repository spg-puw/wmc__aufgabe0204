export function messageBus() {
    /* Your implementation */
    
}

export function subscriber1(data) {
    console.log(`Subscriber1 received ${data}`);
}
export function subscriber2(data) {
    console.log(`Subscriber2 received ${data}`);
}

export function main() {
    const bus = messageBus();
    bus.subscribe(subscriber1);
    const id = bus.subscribe(subscriber2);
    bus.publish("Hello!");
    bus.unsubscribe(id);
    bus.publish("Hello again!");
}

export default { messageBus, subscriber1, subscriber2, main }
if (import.meta.url.endsWith(process.argv[1])) {
    main();
}
