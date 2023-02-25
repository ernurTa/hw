var name = prompt ('Введите имя:)');
var surname = prompt ('Введите фамилию:)');
var wow = prompt ('Введите очество:)');
var old = + prompt ('сколко тебе лет:)');
    if(old <= 18){
        console.log('привет', name)
    }
        else if (old <=18 || old <= 50){
            console.log('здраствуйте мис', name , surname)
        }   
             else if(old <=18 || old <= 50 || old <= 100){
                console.log('здраствуйте мис',surname,name,wow)
             }
                  else if(old <= 1000000000000){
                    console.log('ошибка повторите попытку:(')
                  }

                  
