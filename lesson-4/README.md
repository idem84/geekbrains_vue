# Урок 4. Управление данными приложения с VueX
## Задание
- Подключить библиотеку Vuex в свой проект
- Реализовать добавление данных из формы платежей во Vuex хранилище.
- Реализовать отображение данных о платежах из Vuex хранилища.
- Реализовать функцию fetchData в actions, которая будет добавлять набор «предустановленных» данных в хранилище. Данные брать из объекта вида:


**Объект можно «захардкодить», как это сделано на уроке, либо получать его по сети (например, разместить его в репозитории github). Функция fetchData должна:**<br>
принимать в себя параметр – номер страницы, которую пользователь хочет отобразить;
при последовательном вызове функции fetchData не заменять данные в хранилище, полученные от предыдущих вызовов, а дополнять их;
если данные уже были добавлены ранее не дублировать их. ### 5. Реализовать компонент пагинации - набор кнопок, которые будут управлять вызовом запроса fetchData. ### 6. * На звездочку: реализовать форму добавления новых категорий в выпадающий список. В качестве заключительного примера к данному уроку мы с вами реализовали простенький функционал чтения предустановленных категорий и вывод их в выпадающий список. Необходимо сделать компонент формы, через которую можно будет добавлять новые категории в список.
