

//  

// function check() {
//     let txt = '';
//     if (document.getElementById('weightInput').validity.rangeOverflow) {
//         txt = "over";

//     }
//     document.getElementById('txt').innerHTML = txt;
// }
    

// 

// document.querySelector('form-control').addEventListener('keypress', function(){
//     this.value = this.value.replace(/[^0]$/g, '');
// });

// let x = document.querySelector("#weightInput");
// let y = document.querySelector("#heightInput");

// if (x <= 0 && y <= 0) {
    
//         alert(`uncorrect`);
// } else {

function bodyMassIndexCalculation() {

    let weight = +weightInput.value;
    let height = +heightInput.value;     

    if (height > 3) {
        height = height / 100

    }

    if ((weight > 0 && height > 0) && (weight <= 250 && height < 3.01))  {
        
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

                            }                         
                                else  {indexDescription.innerHTML = 'Ваш индекс массы тела говорит, что у вас ожирение третьей степени! Скорее всего, вы нуждаетесь в медицинской помощи.';
                                }
                            } 

                        else {

                            alert(`alarm`);
                        }
                    }
                    
                        

function clearFilds() {
     document.getElementById('weightInput').value = "";
     document.getElementById('heightInput').value = "";
     indexDescription.innerHTML = "";
     indexValue.innerHTML = "";
      
}




