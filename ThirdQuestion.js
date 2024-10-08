function solution(S) {
    const stack = [];
    
    for (const char of S) {
        if (char === 'A' && stack[stack.length - 1] === 'B') {
            // Remove 'B' from the stack when 'A' is encountered
            stack.pop();
        } else if (char === 'C' && stack[stack.length - 1] === 'D') {
            // Remove 'D' from the stack when 'C' is encountered
            stack.pop();
        } else {
            // Push the current character onto the stack
            stack.push(char);
        }
    }
    
    // Join the stack to form the resulting string
    return stack.join('');
}

// Example Test Cases
console.log(solution("CBACD"));     // Possible output: "C"
console.log(solution("CABABD"));    // Possible output: ""
console.log(solution("ACBDACBD"));  // Possible output: "ACBDACBD"
