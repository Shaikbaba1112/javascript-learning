console.log("Main example: Square function");

// Phase 1: Memory Creation (hoisting)
// n: undefined
// square: {function code}
// square2: undefined
// square4: undefined

var n = 2; // Phase 2: n = 2

function square(num) { // Stored in memory during Phase 1
    var ans = num * num; // Local context: num undefined -> value, ans undefined -> calculated
    return ans;
}

var square2 = square(n); // Creates new execution context for square(n)
var square4 = square(4); // Creates new execution context for square(4)

console.log("square2:", square2); // 4
console.log("square4:", square4); // 16

// Demonstration: Visualizing with Debugger

// Instructions:
// 1. Open this in browser
// 2. F12 > Sources tab > Click this file
// 3. Add breakpoint on line: var ans = num * num; (inside square)
// 4. Refresh page
// 5. Step over (F10) and watch Call Stack on right
// Call Stack will show:
// - anonymous (Global)
// - square (when inside function)

// Nested Functions to Show Deeper Call Stack

console.log("\nNested functions demo");

function outer() {
    console.log("Outer start");
    
    function inner() {
        console.log("Inner executing");
        // Breakpoint here to see stack: inner > outer > global
    }
    
    inner();
    console.log("Outer end");
}

outer();

// Call Stack flow:
// Push Global
// Push outer
// Push inner
// Pop inner
// Pop outer
// Pop global (end)

// Recursive Function to Show Stack Overflow Risk

console.log("\nRecursive demo (limited to avoid overflow)");

function recurse(depth) {
    if (depth > 3) return; // Limit to 3 to avoid max stack error
    console.log("Depth:", depth);
    recurse(depth + 1);
}

recurse(1);

// In real: Too deep recursion causes "Maximum call stack size exceeded"

// ────────────────────────────────────────────────
// Key Takeaways as Comments
// ────────────────────────────────────────────────
/*
1. Execution Context: Environment for code run (Memory + Code components)
2. Phases: Memory Creation (hoist vars to undefined, functions fully)
   Code Execution (assign values, execute line by line)
3. Function call creates new context (pushed to stack)
4. Call Stack: LIFO, manages contexts, global at bottom
5. Single-threaded: One at a time, synchronous order
6. Explains: Hoisting, undefined, function invocation, stack errors
*/
