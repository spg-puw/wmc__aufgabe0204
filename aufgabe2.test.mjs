import t from './aufgabe2.mjs'

describe('PubSub with event type', () => {
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
            expect.stringContaining(`Subscriber 1 received x = 10 and y = 20.`)
        );
        expect(console.log).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining(`Subscriber 2 received x = 10 and y = 20.`)
        );
        expect(console.log).toHaveBeenNthCalledWith(
            3,
            expect.stringContaining(`Subscriber 3 received key h.`)
        );
        expect(console.log).toHaveBeenLastCalledWith(
            expect.stringContaining(`Subscriber 1 received x = 30 and y = 40.`)
        );
    });

    test("unsubscribe", () => {
        const bus = t.messageBus();
        const id = bus.on("test", t.subscriber1);
        bus.unsubscribe(id);
        bus.publish("test", "Hello!");

        expect(console.log).not.toHaveBeenCalled();
    });
});