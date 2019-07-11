function getter(){
    $.getJSON('https://blockchain.info/ru/ticker', function (data) {
           btc = data.USD.sell;
            console.log('Стоимость BTC/USD : ' + btc);
        }
    );
    setTimeout(f, 300); // Получаем в рублях
}
function f() {
    btc_price = btc * 63;
    console.log('Стоимость BTC/RUB : '+ btc_price);
}
getter();

    // if (window.location.pathname === '/') {

    document.getElementById('gpu-models').className = 'hidden';
    document.getElementById('asic-models').className = 'visible';
    $('section.section6 .right ul.characteristics li.garantiya').addClass("hidden");

    col = 12;
    // btc_price = 13000 * 63; // Вручную обновлять.

    // Первичные значения, взят за основу s9
    item_name = 'Antminer S9';
    // console.log(item_name);
    algorithm = 'SHA-256';
    postfix = 'Th/s';
    hashrate = 13.5;
    price = 37500;
    income = btc_price * 0.00039;
    watt = 1300;
    item_length = 350;
    width = 135;
    height = 158;
    kg = 5.5;

    property = {item_name, col, hashrate, price, income, watt, item_length, width, height, kg, postfix, algorithm};


// Сколько единиц ?
    $("section.section6 .quantity input.four").click(function () {
        $("section.section6 .visual_farm").removeClass("twelve");
        $("section.section6 .visual_farm").removeClass("twenty");
        $("section.section6 .visual_farm").addClass("four");
        col = $(this).val();
        calc(property);
    });
    $("section.section6 .quantity input.twelve").click(function () {
        $("section.section6 .visual_farm").removeClass("twenty");
        $("section.section6 .visual_farm").addClass("twelve");
        col = $(this).val();
        calc(property);
    });
    $("section.section6 .quantity input.twenty").click(function () {
        $("section.section6 .visual_farm").addClass("twenty");
        col = $(this).val();
        calc(property);
    });


// Если выбирается GPU
    $("section.section6 .type input.gpu").click(function () {
        // Изменяем выбранное значение при изменении типа
        if ($("section.section6 .quantity input.four").prop("checked")) {
            col = 2;
            calc(property);
        }

        if ($("section.section6 .quantity input.twenty").prop("checked")) {
            col = 10;
            calc(property);
        }

        if ($("section.section6 .quantity input.twelve").prop("checked")) {
            col = 6;
            calc(property);
        }

        // Скрываем весь блок с асиками
        document.getElementById('asic-models').className = 'hidden';
        document.getElementById('gpu-models').className = 'visible';

        //Заменяем значения в выборе количества
        document.getElementById('span_1').textContent = "2 GPU";
        document.getElementById('radio1').value = "2";

        document.getElementById('span_2').textContent = "6 GPU";
        document.getElementById('radio2').value = "6";

        document.getElementById('span_3').textContent = "10 GPU";
        document.getElementById('radio3').value = "10";


        let elems = document.getElementsByClassName('no_gpu');
        for (let i = 0; i < elems.length; i++) elems[i].style.display = 'none';
        let arr = document.getElementsByClassName('item');
        const arrLen = arr.length
        let count = 0
        for (let i = 0; i < arrLen; ++i)
            if (arr[count].className === 'item')
                arr[count].className = 'gpu'
            else ++count;

    });

// Если выбирается ASIC
    $("section.section6 .type input.asic").click(function () {
        // Скрываем весь блок с видеокартами
        document.getElementById('gpu-models').className = 'hidden';
        document.getElementById('asic-models').className = 'visible';

        //Заменяем значения в выборе количества
        document.getElementById('span_1').textContent = "4 ASIC";
        document.getElementById('radio1').value = "4";

        document.getElementById('span_2').textContent = "12 ASIC";
        document.getElementById('radio2').value = "12";

        document.getElementById('span_3').textContent = "20 ASIC";
        document.getElementById('radio3').value = "20";

        //Меняем видимость блоков
        let elems = document.getElementsByClassName('no_gpu');
        for (let i = 0; i < elems.length; i++) elems[i].style.display = 'inline-block';

        //Заменяем класс блокам
        let arr = document.getElementsByClassName('gpu');
        const arrLen = arr.length
        let count = 0
        for (let i = 0; i < arrLen; ++i)
            if (arr[count].className === 'gpu')
                arr[count].className = 'item'
            else ++count;

    });

//    Конфигурации
// 1. Bitmain Antminer S9
    $("section.section6 .model input.asic-models-1").click(function () {
        item_name = 'Antminer S9';
        console.log(item_name);
        algorithm = 'SHA-256';
        postfix = 'Th/s';
        hashrate = 13.5;
        price = 37500;
        income = btc_price * 0.00039;
        watt = 1300;
        item_length = 350;
        width = 135;
        height = 158;
        kg = 5.5;
        calc(property);
        $('section.section6 .right ul.characteristics li.garantiya').addClass("hidden");
    });

// 2. Ebang EBIT E10
    $("section.section6 .model input.asic-models-2").click(function () {
        item_name = 'Ebang EBIT E10';
        console.log(item_name);
        algorithm = 'SHA-256';
        postfix = 'Th/s';
        hashrate = 18;
        price = 44000;
        income = btc_price * 0.00061;
        watt = 1650;
        item_length = 418; // Длина
        width = 146; // Ширина
        height = 189; // Высота
        kg = 7;
        calc(property);
        $('section.section6 .right ul.characteristics li.garantiya').removeClass("hidden");
        $('section.section6 .right ul.characteristics li.garantiya span').text('1 месяц');
    });

// 3. Innosilicon T2T-25T
    $("section.section6 .model input.asic-models-3").click(function () {
        item_name = 'Innosilicon T2T-25T';
        console.log(item_name);
        algorithm = 'SHA-256';
        postfix = 'Th/s';
        hashrate = 25;
        price = 89000;
        income = btc_price * 0.00072;
        watt = 2200;
        item_length = 391;
        width = 141;
        height = 220;
        kg = 9;
        calc(property);
        $('section.section6 .right ul.characteristics li.garantiya').removeClass("hidden");
        $('section.section6 .right ul.characteristics li.garantiya span').text('6 месяцев');
    });

// 4. Innosilicon T2T-32T
    $("section.section6 .model input.asic-models-4").click(function () {
        item_name = 'Innosilicon T2T-32T';
        console.log(item_name);
        algorithm = 'SHA-256';
        postfix = 'Th/s';
        hashrate = 32;
        price = 115000;
        income = btc_price * 0.00093;
        watt = 2200;
        item_length = 460;
        width = 160;
        height = 236;
        kg = 9.5;
        calc(property);
        $('section.section6 .right ul.characteristics li.garantiya').removeClass("hidden");
        $('section.section6 .right ul.characteristics li.garantiya span').text('6 месяцев');
    });

// 5. BitFury B8
    $("section.section6 .model input.asic-models-5").click(function () {
        item_name = 'BitFury B8';
        console.log(item_name);
        algorithm = 'SHA-256';
        postfix = 'Th/s';
        hashrate = 49;
        price = 125000;
        income = btc_price * 0.00142;
        watt = 6400;
        item_length = 650; // Длина
        width = 440; // Ширина
        height = 270; // Высота
        kg = 37;
        calc(property);
        $('section.section6 .right ul.characteristics li.garantiya').addClass("hidden");
    });

//GPUs
// Размеры каркаса на 2 / 6 / 12
// Длина  : 30 / 78 / 72
// Ширина : 38 Всегда
// Высота : 38 / 38 / 72

//GTX 1080 Ti
    $("section.section6 .model input.gpu-models-1").click(function () {
        item_name = 'EVGA GeForce GTX 1080 Ti 11GB Black Edition GAMING';
        console.log(item_name);
        algorithm = 'X16R';
        postfix = 'MH/s';
        hashrate = 25;
        price = 59500;
        income = btc_price * 0.00008680;
        watt = 250;
        item_length = 300; // Длина
        width = 40; // Ширина
        height = 130; // Высота
        kg = 2.5;
        calc(property);
    });


//calc
    function calc(property) {
        speed_result = col * hashrate;
        sum_total = col * price;
        sum_totalLS = sum_total.toLocaleString('ru');
        income_per_day = (col * income).toFixed(0);
        monthly_income = (col * 31 * income).toFixed(0);
        sof = (sum_total / monthly_income).toFixed(1);
        speed = hashrate * col;
        energo = watt * col;
        size1 = item_length;
        size2 = height * col;
        size3 = width * col;
        massa = (col * kg).toFixed(0);
        $('section.section6 .left span.hashrate_result').text(hashrate + ' ' + postfix);
        $('section.section6 .center p.speed_result').text(speed_result + ' ' + postfix);
        $('section.section6 .right p.sum_total').html('≈ ' + sum_totalLS + ' <span>руб.</span>');
        $('section.section6 .right p.income_per_day span').text(income_per_day);
        $('section.section6 .right p.monthly_income span').text(monthly_income);
        $('section.section6 .right ul.characteristics li.sof span').text(sof);
        $('section.section6 .right ul.characteristics li.algorithm span').text(algorithm);
        $('section.section6 .right ul.characteristics li.speed span').text(speed);
        $('section.section6 .right ul.characteristics li.energo span').text(energo);
        $('section.section6 .right ul.characteristics li.size span').text(size1 + ' x ' + size2 + ' x ' + size3); //Длина * Высота * Ширина
        $('section.section6 .right ul.characteristics li.kg span').text(massa);
        $('section.section6 .center span.col').text(' х ' + col + ' шт.');
        $('section.section6 .center span.h3').text(item_name);

    };
// };
