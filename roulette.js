let confirmation = '';
while (confirmation !== 'HienXinhDep') {
  confirmation = prompt("ghi đúng code và nhấn ok ở bắt đầu giây 10:");
}
        const sleep = s => new Promise(r => setTimeout(r, s));
const chips = document.querySelectorAll('.roulette-control-area__counter-item');
function namMuoi(){
        chips[0].click();
}
function namTram(){
        chips[1].click();
}
function muoiNghin(){
        chips[2].click();
}
var red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
var countRed = 0;
var countBlack = 0;
let isRunning = false
var betItem;
var num = 0;
setInterval(async() => {
    if (!isRunning) {
        isRunning = true;
        let ketquamoi = document.querySelector(".roulette-lottery-record__last-record-num").innerText
        if (ketquamoi == 0 && countRed == 0) {
            countRed += 1;
            countBlack = 0;
            betItem = document.querySelector('.roulette-gaming-table__bet-item.item-3');
        } else {
            if (ketquamoi == 0 && countBlack == 0) {
            countBlack += 1;
            countRed = 0;
            betItem = document.querySelector('.roulette-gaming-table__bet-item.item-7');
            } else {
                if(red.includes(parseInt(ketquamoi))) {
                    countRed += 1;
                    countBlack = 0;
                    betItem = document.querySelector('.roulette-gaming-table__bet-item.item-3');
                } else {
                    countBlack += 1;
                    countRed = 0;
                    betItem = document.querySelector('.roulette-gaming-table__bet-item.item-7');
                }
            }
        }
        if (countRed == 1 || countBlack == 1) {
            num += 1;
            console.log('chuỗi ',num)
        } else {
            if (countRed == 2 || countBlack == 2) {
                console.log('chuỗi ',num)
            } else {
                console.log('chuỗi ',num)
                countRed = 0;
                countBlack = 0;
                num = 0;
                }
            }
        }
        switch (num) {
            case 0:
                namMuoi();
                for (let i = 0; i < 1; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 1: //1
                namMuoi();
                for (let i = 0; i < 1; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 2: //2
                namMuoi();
                for (let i = 0; i < 2; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;             
            case 3: //3
                namMuoi();
                for (let i = 0; i < 3; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 4: //5
                namMuoi();
                for (let i = 0; i < 5; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 5: //8
                namMuoi();
                for (let i = 0; i < 8; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 6: //13
                namMuoi();
                for (let i = 0; i < 3; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                namTram();
                for (let i = 0; i < 1; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 7: //21
                namMuoi();
                for (let i = 0; i < 1; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                namTram();
                for (let i = 0; i < 2; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 8: //34
                namMuoi();
                for (let i = 0; i < 4; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                namTram();
                for (let i = 0; i < 3; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 9: //55 
                namMuoi();
                for (let i = 0; i < 5; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                namTram();
                for (let i = 0; i < 5; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 10: //89
                namMuoi();
                for (let i = 0; i < 9; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                namTram();
                for (let i = 0; i < 8; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 11: //144
                namMuoi();
                for (let i = 0; i < 4; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                namTram();
                for (let i = 0; i < 14; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 12: //233
                namMuoi();
                for (let i = 0; i < 3; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                namTram();
                for (let i = 0; i < 3; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                muoiNghin();
                for (let i = 0; i < 1; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 13: //377
                namMuoi();
                for (let i = 0; i < 7; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                namTram();
                for (let i = 0; i < 17; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                muoiNghin();
                for (let i = 0; i < 1; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            case 14: //20k
                muoiNghin();
                for (let i = 0; i < 2; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = false;
                }
                break;
            default:
                muoiNghin();
                for (let i = 0; i < 2; i++) {
                    betItem.click();
                    await sleep(100);
                    isRunning = true;
                }
                break;
        }
},33000);
