const sum = (a, b) => {
    return a + b;
}

// test purposes
const btn_run_02 = document.getElementById('run-02');
const btn_clear_02 = document.getElementById('clear-02');

btn_run_02.addEventListener('click', e => {
    const a = parseInt(document.getElementById("a-2").value);
    const b = parseInt(document.getElementById("b-2").value);
    const result = sum(a, b);

    const output = document.getElementById('output-02');
    const element = document.createTextNode(result);
    output.replaceChildren();
    output.appendChild(element);
});

btn_clear_02.addEventListener('click', e => {
    const output = document.getElementById('output-02');
    output.replaceChildren();
});
