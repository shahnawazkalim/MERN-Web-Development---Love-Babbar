
// Reflow : ---------------------------
// Repaint : --------------------------


// Code 1 : -----------------------------------------------
const t1 = performance.now();
for(let i=1; i<=15 ; i++){
    let paras = document.createElement('p');
    paras.textContent = "This is "+ i +" Para";
    document.body.appendChild(paras);
}

const t2 = performance.now();
console.log("Total time taken by Code1 :", (t2-t1));



// Code 2 : fater Code ---------------------------------------------------

const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i=1; i<=15; i++){
    let paras = document.createElement('p');
    paras.textContent = "This para is " + i;
    mydiv.appendChild(paras);
}
document.body.appendChild(mydiv);

const t4 = performance.now();
console.log("Total time taken by code2 :", (t4-t3));


// Code 3 : Optimized Code ------------------------------------
// DocumentFragment :
const t5 = performance.now();

let fragment1 = document.createDocumentFragment();
for(let i=1; i<=15; i++){
    let paras = document.createElement('p');
    paras.textContent = i + " Para is here.";
    // no reflow and no repaint for this below line:
    fragment1.appendChild(paras);
}
// the below line takes 1 reflow and 1 repaint:
document.body.appendChild(fragment1);

const t6 = performance.now();
console.log('Total time taken by Code3 :', (t6-t5));