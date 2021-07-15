

//  // Валидация значений вводимых в теги Input

//  document.addEventListener('DOMContentLoaded' , (event) => {

//     // Валидация Input введите вес в кг

//     let x  = document.getElementById('weightInput')
//     x.addEventListener('input', (e) => {
    
//      let regexpWeight = /^\d{1,3}((\.|\,)\d{1})*$/; // регулярное выражения для ввода массы тела в  кг 
        
//     let str = e.target.value;

//     let result1 = regexpWeight.test(str);
    
    
//     console.log(result1);
//     // if (!result1) {
//     //     console.log(`ok`)
//     //     messAlert.classList.remove('d-none');
//     //     buttonGo.classList.add('d-none');
//     // }
//     return result1;
//     })

//     // Валидация Input введите рост в м

//     let у  = document.getElementById('heightInput')
//     у.addEventListener('input', (e) => {
    
//     let regexpHeight = /^([1-2]{1}|([1-2]{1}[0-9]{2}|[0-2]{1}(\.|\,)[0-9]{1,2}))$/; // регулярное выражения для ввода роста в м и см 
    
//     let str = e.target.value;

//     //let result1 = regexpWeight.test(str);
//     let result2 = regexpHeight.test(str);
    
//     console.log(result2);
//     // if (!result2) {
//     //     console.log(`ok`)
//     //     messAlert.classList.remove('d-none');
//     //     buttonGo.classList.add('d-none');
//     // }
//     return result2;
//     })
    
//     }) 
    


function bodyMassIndexCalculation() {
    
    // let tag = document.getElementById('description');
    description.classList.remove('d-none');
    
    let weight = +weightInput.value;
    let height = +heightInput.value;     

    if (height > 3) {
        height = height / 100
        }


        

    if ((weight > 0 && height > 0) && (weight <= 250 && height < 3.01)) {
        
        let index = (Math.round((weight / (height ** 2) *10))) / 10; 

        indexValue.innerHTML = index; 
        console.log(index);
     
            if(index <= 16) {
                indexDescription.innerHTML = 'У вас сильный недостаток массы тела! Положите в карманы  кирпичи и  ешьте тортики каждый день!';
            } else if(index > 16 && index <= 18.5) {
                indexDescription.innerHTML= 'У вас есть некоторый недостаток массы тела! Но все поправимо. Не забывайте плотно ужинать!';
                } else if(index > 18.5 && index <= 25) {
                    indexDescription.innerHTML = 'Поздравляем! Ваш индекс массы тела в норме! Продолжайте в том же духе!';
                    } else if(index > 25 && index <= 30) {
                        indexDescription.innerHTML = 'О, ваш индекс массы тела немного великоват! Подумайте, может быть, стоит отказаться от тортиков? Или запишитесь в фитнес клуб.';
                        } else if(index > 30 && index <= 35) {
                            indexDescription.innerHTML = 'Ваш индекс массы тела говорит, что у вас ожирение первой степени! Вам следует повесить замок на холодильник!';
                            } else if(index > 35 && index <= 40) {
                                indexDescription.innerHTML = 'Ваш индекс массы тела говорит, что у вас ожирение второй степени! Запишитесь на прием к диетологу. ';
                                } else  {indexDescription.innerHTML = 'Ваш индекс массы тела говорит, что у вас ожирение        третьей  степени! Скорее всего, вы нуждаетесь в медицинской помощи.';
                                    }
                            }  else {
                                    messAlert.classList.remove('d-none');
                                    description.classList.add('d-none');
                                    buttonGo.classList.add('d-none');
                                    weightInput.classList.add('d-none');
                                    heightInput.classList.add('d-none');

                                    
    }
}
                                       

function clearFilds() {
     document.getElementById('weightInput').value = "";
     document.getElementById('heightInput').value = "";
     indexDescription.innerHTML = "";
     indexValue.innerHTML = "";
     document.getElementById('weightInput').focus();
     let tag = document.getElementById('description');
     description.classList.add('d-none');
     messAlert.classList.add('d-none');
     buttonGo.classList.remove('d-none');
    weightInput.classList.remove('d-none');
    heightInput.classList.remove('d-none');
      
}

function closeAlert() {
    messAlert.classList.add('d-none');
    buttonGo.classList.remove('d-none');
    weightInput.classList.remove('d-none');
    heightInput.classList.remove('d-none');
    document.getElementById('weightInput').value = "";
    document.getElementById('heightInput').value = "";
    document.getElementById('weightInput').focus();

}




