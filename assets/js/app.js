 

function bodyMassIndexCalculation() {
      
    let weight = +weightInput.value;
    let height = +heightInput.value;    
    
    if (height > 3) {
        height = height / 100; 
        }  


    if ((weight >= 5 && height >= 0.5) && (weight <= 700 && height < 3)) {
        
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
                                } else if(index > 40 && index < 199) 
                                    {indexDescription.innerHTML = 'Ваш индекс массы тела говорит, что у вас ожирение        третьей  степени! Скорее всего, вы нуждаетесь в медицинской помощи.';
                                     }                                    
    }
}                                       
// кнопка ввести новые данные
function clearFilds() {
    document.getElementById('weightInput').value = "";
    document.getElementById('heightInput').value = "";
    indexDescription.innerHTML = "";
    indexValue.innerHTML = "";
    document.getElementById('weightInput').focus();
         
}








