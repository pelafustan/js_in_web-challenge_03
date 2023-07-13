const example = function(a, b, c) {
    return a + b + c;
}

// test purposes
const btn_run = document.getElementById('run-01');
const btn_clear = document.getElementById('clear-01');

btn_run.addEventListener('click', e => {
    const a = parseInt(document.getElementById("a-1").value);
    const b = parseInt(document.getElementById("b-1").value);
    const c = parseInt(document.getElementById("c-1").value);
    const result = example(a, b, c);

    const output = document.getElementById('output-01');
    const element = document.createTextNode(result);
    output.replaceChildren();
    output.appendChild(element);
});

btn_clear.addEventListener('click', e => {
    const output = document.getElementById('output-01');
    output.replaceChildren();
});
