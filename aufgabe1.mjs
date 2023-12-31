function messageBus() {
    /* Your implementation */
    
}

function subscriber1(data) {
    console.log(`Subscriber1 received ${data}`);
}

function subscriber2(data) {
    console.log(`Subscriber2 received ${data}`);
}

function main() {
    const bus = messageBus();
    bus.subscribe(subscriber1);
    const id = bus.subscribe(subscriber2);
    bus.publish("Hello!");
    bus.unsubscribe(id);
    bus.publish("Hello again!");
}

export default { messageBus, subscriber1, subscriber2, main }
import { pathToFileURL as _path } from 'url'
if (import.meta.url === _path(process.argv[1]).href) {
    main();
}
