import t from './aufgabe1.mjs'

describe('PubSub std', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = import.meta.jest.fn();
    });

    afterAll(() => {
        console.log = log;
    });

    test("main", () => {
        t.main();
        expect(console.log).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining(`Subscriber1 received Hello!`)
        );
        expect(console.log).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining(`Subscriber2 received Hello!`)
        );
        expect(console.log).toHaveBeenLastCalledWith(
            expect.stringContaining(`Subscriber1 received Hello again!`)
        );
    });

    test("unsubscribe", () => {
        const bus = t.messageBus();
        const id = bus.subscribe(t.subscriber1);
        bus.unsubscribe(id);
        bus.publish("Hello!");

        expect(console.log).not.toHaveBeenCalled();
    });
});