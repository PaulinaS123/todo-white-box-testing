import { createTodo, addTodo, countDone } from "./todoUtils";
import type { Todo } from "./todoUtils";

// Test 1 Statement coverage test for the createTodo() function.

describe("createTodo statement coverage", () => {
        test("creates a todo object from the given text", () => {
            const todo = createTodo("Buy milk");
            expect(todo.text).toBe("Buy milk");
            expect(todo.done).toBe(false);
            expect(typeof todo.id).toBe("number");
        });
    });

// Test 2 Branch coverage
describe("addTodo branch coverage", () => {
    test("returns the list unchanged when the text is blank", () => {
            const todos: Todo[] = [];
            const result = addTodo(todos, "   ");
            expect(result).toEqual([]);
        });
    test("adds a new todo when the text is not blank", () => {
            const todos: Todo[] = [];
            const result = addTodo(todos, "Buy milk");
            expect(result).toHaveLength(1);
            expect(result[0].text).toBe("Buy milk");
            expect(result[0].done).toBe(false);
         });
    });

// Test 3: Loop Coverage for countDone()

describe("countDone loop coverage", () => {
    test("returns 0 when the list is empty", () => {
        const todos: Todo[] = [];
        const result = countDone(todos);
        expect(result).toBe(0);
        });

    test("returns 1 when one todo is completed", () => {

        const todos: Todo[] = [{ id: 1, text: "Buy milk", done: true }];
        const result = countDone(todos);

        expect(result).toBe(1);
           
    });
// Test 4: Third loop test

    test("counts only completed todos when the list has several items", () => {
        const todos: Todo[] = [
            { id: 1, text: "Buy milk", done: true },
            { id: 2, text: "Walk the dog", done: false },
            { id: 3, text: "Write tests", done: true },
        ];
        const result = countDone(todos);
        expect(result).toBe(2);
        });
});  