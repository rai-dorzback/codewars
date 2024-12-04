/*
https://www.codewars.com/kata/5886f3713a111b620f0000dc/train/javascript
Task
You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

Example
For startTag = "<button type='button' disabled>", the output should be "</button>";

For startTag = "<i>", the output should be "</i>".

Input/Output
[input] string startTag/start_tag

[output] a string
*/

// input: string start tag <i>
function htmlEndTagByStartTag(str) {
    // remove all < and >
    str = str.replace('<', '').replace('>', '');
    // remaining string - split into array
    const arr = str.split(' ');
    // tag will be first word/element in arr
    const tag = arr[0];
    // put it between closing tags
    return `</${tag}>`;
};

// output: end tag </i>
console.log(htmlEndTagByStartTag("<button type='button' disabled>"), '</button>');
console.log(htmlEndTagByStartTag("<p>"), '</p>');