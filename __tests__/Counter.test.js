// import the class to test
import { Counter } from "../src/Counter.js";

describe('Counter Class Logic', () => {
    let counter;

    // initialize a fresh Counter instance before each test
    beforeEach(() => {
        counter = new Counter();
    });

    test('should initialize the counter with zero by deafult', () => {
        // check if the default value is 0
        expect(counter.getValue()).toBe(0);
    });

    test('should initialize with a specific value when provided', () => {
        // create a new instance with a starting value
        const initialCounter = new Counter(42);
        expect(initialCounter.getValue()).toBe(42);
    });

    test('should increment the value by 1', () => {
        counter.increment();
        expect(counter.getValue()).toBe(1);
    });

    test('should decrement the value by 1', () => {
        // setup a value greater than zero first
        counter = new Counter(5);
        counter.decrement();
        expect(counter.getValue()).toBe(4);
    });

    // test the crucial business rule
    test('should prevent the value from going below zero', () => {
        // counter starts at 0 (from beforeEach)
        counter.decrement(); // should remain 0
        counter.decrement(); // should still remain 0
        expect(counter.getValue()).toBe(0);
    });

    test('should reset the counter to zero', () => {
        counter.increment();
        counter.increment(); // value is 2
        counter.reset();
        expect(counter.getValue()).toBe(0);
    });
});