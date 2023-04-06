// чусон - страка 
// рекурсия - вызывает себя
// выгуларная вырожения
const text = `Sunt reprehenderit ad in tempor deserunt non enim eu. Consectetur ipsum sint sunt ex magna est duis adipisicing esse duis laboris ipsum do quis. Mollit qui laborum velit do eiusmod magna. Qui laboris eiusmod ipsum est velit sunt pariatur ut. Aliqua Lorem esse veniam amet labore ad sint aute eu. Ipsum proident eu ullamco eu. Anim ut culpa mollit minim tempor excepteur ut dolor commodo reprehenderit nostrud ad minim elit.

Pariatur nostrud adipisicing dolor sunt eu consequat consectetur ea minim reprehenderit cupidatat ut fugiat. Irure reprehenderit ipsum incididunt cillum sunt aliquip culpa est aliqua et aliquip deserunt ullamco. Cupidatat ut duis anim cupidatat cupidatat labore et qui est eu ad eu adipisicing. Ea in mollit ullamco nostrud ea mollit consequat incididunt sit magna do qui. Velit voluptate voluptate consectetur elit ea.

Occaecat qui id cillum id. 1233445679876543456765 (secrer) tEst elit labore nostrud id laborum magna id ut ipsum esse ipsum. Aliqua dolore aute sunt deserunt. Est adipisicing mollit cupidatat ullamco aliqua qui culpa amet veniam eu aliqua do qui.

Reprehenderit occaecat sint eu et. Culpa exercitation sint cillum ullamco ullamco magna laborum veniam voluptate qui. Adipisicing cupidatat anim do sunt ut enim nulla aliqua deserunt in. Pariatur cillum tempor magna ad ut. Anim dolor laboris eiusmod laboris nulla in elit ullamco ipsum id amet enim sit culpa.`
const reg = /Lorem/i;
const LEM = reg.test(text);
console.log(LEM);  

const letter = text.match(/\w\w/g);
console.log(letter)

const allwords = text.match(/\w+/g);
console.log(allwords)

const secret = text.match(/\((\w+)\)/i);
console.log(secret) 

const first = text.match(/^\w+/gmi);
console.log (first)

const last = text.match(/\w+.$/gmi)
console.log(last)