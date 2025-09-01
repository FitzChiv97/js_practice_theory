/*
есть доступ к массиву сообщений, 
но управление им происходит где-то ещё. 
Добавляются новые сообщения и удаляются старые, 
и вы не знаете в какой момент это может произойти.
*/
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

/*
какую структуру данных использовать 
для ответа на вопрос «было ли сообщение прочитано?»
*/

let readMessage = new WeakSet();                

readMessage.add(messages[0]);
readMessage.add(messages[1]);

/*
WeakSet позволяет хранить набор сообщений
и легко проверять их наличие.

Он очищается автоматически. Мы не можем перебрать его содержимое,
не можем получить «все прочитанные сообщения» напрямую. 
Но мы можем сделать это, перебирая все сообщения 
в массиве сообщений [messages] и фильтруя те,которые находятся в WeakSet.
*/

for(let key of messages) {
  console.log(readMessage.has(key));
}

/*
Теперь вопрос стоит так: какую структуру данных использовать
для хранения информации о том,когда сообщение было прочитано?
*/
let messageReadTime = new WeakMap();

messageReadTime.set(messages[2], "05.04.2025 21:48");

for(let key of messages) {
  if(messageReadTime.has(key)) {
    console.log(messageReadTime.get(key));
  };
}

/*здесь удаляем элемент из массива сообщений, 
соответственно он автоматически удаляется из WeakSet
*/
messages.pop();

for(let key of messages) {
  if(!(messageReadTime.has(key))) {
    console.log("no value");
  };
}