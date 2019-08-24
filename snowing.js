
// starting
const container = document.getElementsByClassName('background')[0]

const tsasniiToo = 100;
let x = []
let y = []
let v = []
let a = []
let cy = []
let ca = []


// arrey size
for (let i = 0; i < tsasniiToo; i++) {

    x.push(0);
    y.push(0);
    v.push(0);
    a.push(0);

}


// let's make a 1000 snowball 
for (let i = 0; i < tsasniiToo; i++) {

    const snowElement = document.createElement('div');
    snowElement.className = 'snow';
    snowElement.id = i;
    container.appendChild(snowElement)

    x[i] = Math.floor(Math.random() * 2000);
    y[i] = Math.floor(Math.random() * 1000);
    v[i] = Math.floor(Math.random() * 20 + 10);
    a[i] = Math.floor(Math.random() * 40 + 5);
}


// time to snowing
setInterval(() => {

    const snows = document.getElementsByClassName('snow');

    for (let i = 0; i < tsasniiToo; i++) {

        if (y[i] > 1000) {

            y[i] = 100;
        } else {

            y[i] = y[i] + v[i];
        }

        snows[i].style.left = x[i] + 'px';
        snows[i].style.top = y[i] + 'px';
        snows[i].style.width = a[i] + 'px';
        snows[i].style.height = a[i] +'px';

    }
}, 30); 
