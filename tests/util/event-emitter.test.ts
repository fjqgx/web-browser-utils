import { EventEmitter } from "../../src/util/event-emitter";


interface testInterface {
  "event1": () => void;
  "event2": () => void;
  "event3": () => void;
}

class Dispatcher extends EventEmitter<testInterface> {
  constructor() {
    super();
  }
}


describe('test event-emitter', () => {


  const dispatcher: Dispatcher = new Dispatcher();


  beforeEach(() => {
    dispatcher.removeAllListeners();
  })

  test("test on and emit", () => {
    dispatcher.on("event1", () => {
      expect(true).toBe(true);
    })

    dispatcher.on("event2", () => {
      expect(true).toBe(false);
    })

    dispatcher.emit("event1");
  })

  test("test once and emit", () => {
    let index: number = 0;
    dispatcher.once("event1", () => {
      ++index;
      if (index > 1) {
        expect(true).toBe(false);
      }
    })

    for (let i = 0; i < 3; ++i) {
      dispatcher.emit("event1");
    }
  })

  test ("test on an off", () => {
    const event1Fun =  () => {
      expect(true).toBe(true);
    }

    const event2Fun = () => {
      expect(true).toBe(false);
    }

    dispatcher.on("event1",event1Fun)

    dispatcher.on("event2", event2Fun);

    dispatcher.off("event2", event2Fun);

    dispatcher.emit("event1");
    dispatcher.emit("event2");
  })

  test ("test removeAllListeners and listeners", () => {
    expect(dispatcher.listeners("event1").length).toBe(0);

    dispatcher.on("event1", () => {});
    dispatcher.on("event2", () => {});
    dispatcher.on("event3", () => {});

    expect(dispatcher.listeners("event1").length).toBe(1);
    expect(dispatcher.listeners("event2").length).toBe(1);
    expect(dispatcher.listeners("event3").length).toBe(1);

    dispatcher.removeAllListeners("event2");
    expect(dispatcher.listeners("event2").length).toBe(0);

    dispatcher.removeAllListeners();
    expect(dispatcher.listeners("event1").length).toBe(0);
    expect(dispatcher.listeners("event2").length).toBe(0);
    expect(dispatcher.listeners("event3").length).toBe(0);
  })
});