export class Counter {
    constructor(initialValue = 0) {
        // State: The private core value of the counter
        this.value = initialValue;
    }

    // Getter: Method to safely retrieve the current value
    getValue() {
        return this.value;
    }

    // Business Logic: Increment the value by 1
    increment() {
        this.value += 1;
    }

    // Business Logic: Decrement the value
    decrement() {
        // Crucial Rule: Prevent the counter dropping below zero
        if (this.value > 0) {
            this.value -= 1;
        }
    }

    // Business Logic: Reset the value
    reset() {
        this.value = 0;
    }
}