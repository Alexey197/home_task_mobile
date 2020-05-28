
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие onclick. При срабатывании события  выводите в out-1 количество срабатываний события. В комментариях опишите результат. */
let count = 0;
function t1() {
    count++;
    document.querySelector('.out-1').textContent = count;
}
document.querySelector('.div-1').onclick = t1;

// ваше событие здесь!!!
// Количество срабатываний события выводится корректно

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие ondblclick. При срабатывании события  выводите в out-2 количество срабатываний события. В комментариях опишите результат. */

function t2() {
    count++;
    document.querySelector('.out-2').textContent = count;
}

document.querySelector('.div-2').ondblclick = t2;
// ваше событие здесь!!!
// Количество срабатываний события выводится корректно


// Task 3 ============================================
/*  Создайте блок div-3. Добавьте на него событие onmousemove. При срабатывании события выводите в out-3 количество срабатываний события. В комментариях опишите результат. */

function t3() {
    count++;
    document.querySelector('.out-3').textContent = count;
}

document.querySelector('.div-3').onmousemove = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. Добавьте на него событие oncontextmenu. При срабатывании события выводите в out-4 количество срабатываний события. В комментариях опишите результат. */

function t4() {
    count++;
    document.querySelector('.out-4').textContent = count;
}

document.querySelector('.div-4').oncontextmenu = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*   Создайте блок div-5. Добавьте на него событие onmousedown. При срабатывании события выводите в out-5 количество срабатываний события. В комментариях опишите результат. */

function t5() {
    count++;
    document.querySelector('.out-5').textContent = count;
}

document.querySelector('.div-5').onmousedown = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте блок div-6. Добавьте на него событие onmouseenter. При срабатывании события выводите в out-6 количество срабатываний события. В комментариях опишите результат. */

function t6() {
    count++;
    document.querySelector('.out-6').textContent = count;
}

document.querySelector('.div-6').onmouseenter = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*   Создайте блок div-7. Добавьте на него событие onmouseleave. При срабатывании события выводите в out-7 количество срабатываний события. В комментариях опишите результат.*/

function t7() {
    count++;
    document.querySelector('.out-7').textContent = count;
}

document.querySelector('.div-7').onmouseleave = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте блок div-8. Добавьте на него событие onmouseout. При срабатывании события выводите в out-8 количество срабатываний события. В комментариях опишите результат.*/

function t8() {
    count++;
    document.querySelector('.out-8').textContent = count;
}

document.querySelector('.div-8').onmouseout = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/* Создайте блок div-9. Добавьте на него событие onmouseover. При срабатывании события выводите в out-9 количество срабатываний события. В комментариях опишите результат. */

function t9() {
    count++;
    document.querySelector('.out-9').textContent = count;
}

document.querySelector('.div-9').onmouseover = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Создайте блок div-10. Добавьте на него событие onmouseup. При срабатывании события выводите в out-10 количество срабатываний события. В комментариях опишите результат.*/

function t10() {
    count++;
    document.querySelector('.out-10').textContent = count;
}

document.querySelector('.div-10').onmouseup = t10;
