let start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),
    
    expensesItem = document.getElementsByClassName('expenses-item'),
    button = document.getElementsByTagName('button'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    savings = document.querySelector('#savings');

    let money, time;

    start.addEventListener('click', function(){
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        money = +prompt("Ваш бюджет на меся?", "");
    
        while(isNaN(money) || money == "" || money == null){
            money = +prompt("Ваш бюджет на меся?", "");
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue[0].textContent = money.toFixed();
        yearValue.value =  new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDay(); 
    });

    button[0].addEventListener('click', function(){
        let sum = 0;

        for(let i = 0; i < expensesItem.length ; i++){
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
        
            if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ){
                console.log("done");
                appData.expenses[a] = b;
                sum += +b; 
            }else{
                i = i - 1;
            }    
        }
        expensesValue[0].textContent = sum; 
    });
    
    button[1].addEventListener('click', function(){
        for (let i = 0; i < optionalExpensesItem.length; i++){
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt; 
            optionalexpensesValue[0].textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    button[2].addEventListener('click', function(){

        if(appData.budget != undefined){
            appData.moneyPerDay = (appData.budget/30).toFixed( );
            daybudgetValue[0].textContent = appData.moneyPerDay;
    
            if(appData.moneyPerDay < 100){
                levelValue[0].textContent ='Минимальный уровень достатка';
            }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                levelValue[0].textContent ='Средний уровень достатка';
            }else if(appData.moneyPerDay > 2000){
                levelValue[0].textContent ='Высокий уровень достатка';
            }else{
                levelValue[0].textContent ='Произошла ошибка';
            }
        }else{
            daybudgetValue[0].textContent = 'Произошла ошибка';
            levelValue[0].textContent ='Произошла ошибка';
        }   
    });

    chooseIncome.addEventListener('input', function(){
        let items = chooseIncome.value;
        appData.income = items.split(', ');
        incomeValue[0].textContent = appData.income;
    });

    savings.addEventListener('click', function(){
        if(appData.savings == true){
            appData.savings = false;
        }else{
            appData.savings = true ;
        }
    }); 

    chooseSum.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = +chooseSum.value,
                percent = +choosePercent.value;
            
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue[0].textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue[0].textContent = appData.yearIncome.toFixed(1);
        }
    });

    choosePercent.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = +chooseSum.value,
            percent = +choosePercent.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue[0].textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue[0].textContent = appData.yearIncome.toFixed(1);
        }
    });
    
    let appData = {
        budget: money, 
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };
     
    

