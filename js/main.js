var arrLang={
    'unit':{
        'ru':'Машины.com',
        'en':'Cars.com',
    },
    "main":{
        'ru':"Главная",
        'en': 'main',
    },
    'service':{
        'ru':'НАШИ СЕРВИСЫ',
        'en': 'Our service',
    },
    'about':{
        'ru': 'О нас', 
        'en': 'About'
    },
    'title-first':{
        'ru': 'ПОДДЕРЖИМ ВАС В ПУТИ С СЕРВИСОМ, КОТОРОМУ МОЖНО ДОВЕРИТЬ',
        'en': 'KEEPING YOU ON THE ROAD WITH SERVICE YOU CAN TRUST',
    },
    'more':{
        'ru': 'Показать больше',
        'en': 'Show more',
    },
    'phone':{
        'ru': 'ПОЗВОНИТЕ НАМ СЕЙЧАС 222-222-222',
        'en': 'CALL US NOW 222-222-222',
    },
    'call-us':{
        'ru': 'Не стесняйтесь позвонить нам',
        'en': 'Feel free to call us',
    },
    'get-free':{
        'ru': 'ПОЛУЧИТЬ БЕСПЛАТНУЮ ВСТРЕЧУ',
        'en': 'GET FREE APPOITMET',
    },
    'free-diagnosis':{
        'ru': 'Бесплатная диагностика и проверка тормозов',
        'en': 'Free Diagnosis & Brake Checks',
    },
    'find':{
        'ru': 'НАЙТИ НАС НА КАРТЕ',
        'en': 'FIND US ON MAP',
    },
    'adres':{
        'ru': 'Нью-Йорк, 1286 Руму Нанор',
        'en': 'New York, 1286 Ruumu Nanor',
    },
    'service2':{
        'ru': 'НАШИ СЕРВИСЫ',
        'en': 'OUR SERVICES',
    },
    'view':{
        'ru': 'ПОСМОТРЕТЬ ВСЕ УСЛУГИ',
        'en': 'VIEW ALL SERVICES',
    },
    'anual':{
        'ru': 'ЕЖЕГОДНЫЕ ОСМОТРЫ ВАШЕГО ВРАЧА Сохранят ВАМ ХОРОШЕЕ ЗДОРОВЬЕ.',
        'en': 'ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH',
    },
    'anual1':{
        'ru': 'ЕЖЕГОДНЫЕ ОСМОТРЫ ВАШЕГО ВРАЧА Сохранят ВАМ ХОРОШЕЕ ЗДОРОВЬЕ.',
        'en': 'ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH',
    },
    'anual2':{
        'ru': 'ЕЖЕГОДНЫЕ ОСМОТРЫ ВАШЕГО ВРАЧА Сохранят ВАМ ХОРОШЕЕ ЗДОРОВЬЕ.',
        'en': 'ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH',
    },
    'diagnostic':{
        'ru': 'ДИАГНОСТИКА',
        'en': 'DIAGNOSTIC',
    },
    'wheels':{
        'ru': 'ШИНЫ И КОЛЕСА',
        'en': 'TIRES & WHEELS',
    },
    'engines':{
        'ru': 'двигатели',
        'en': 'engines',
    },
    'we':{
        'ru': 'МЫ ПОНИМАЕМ, КАК ВАЖНО НАЙТИ ПРАВИЛЬНЫЙ АВТОСЕРВИС',
        'en': 'WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE',
    },
    'car':{
        'ru': 'Ремонт и обслуживание автомобиля могут быть дорогими, и никто не хочет платить за ремонт повреждений, вызванных некачественным ремонтом. Когда вы принесете свой автомобиль в наш автомагазин, вам не придется беспокоиться, потому что наш персонал состоит из сертифицированных технических специалистов ASE, которые стремятся обеспечить вам безопасный и надежный автомобиль.',
        'en': 'Car repairs and maintenance can be expensive and no one wants to have pay to repair damage caused by shoddy repair service. When you bring your car into our auto shop, you won’t have to worry because our staff is comprised of ASE certified technicians who are committed to making sure you have a safe dependable car.',
    },
    'more-about':{
        'ru': 'БОЛЬШЕ О НАС',
        'en': 'MORE ABOUT US',
    },
    'fast':{
        'ru': 'БЫСТРО И ЛЕГКО',
        'en': 'FAST & EASY',
    },
    'our-work':{
        'ru': 'наш рабочий процесс',
        'en': 'our work process',
    },
    'request':{
        'ru': '1. Запросите вашу цену',
        'en': '1.Request your quote',
    },
    'we-well':{
        'ru': 'Мы будем рядом, когда мы вам больше всего нужны',
        'en': 'We will be there when you most need us',
    },
    'bring':{
        'ru': '2. ПРИВЕЗИТЕ СВОЙ АВТОМОБИЛЬ',
        'en': '2. BRING YOUR VEHICLE',
    },
    'we-are':{
        'ru': 'Мы в душе автолюбители',
        'en': 'We are car guys at heart',
    },
    'get':{
        'ru': '3.Отремонтируйте его',
        'en': '3. GET IT REPAIRED',
    },
    'high':{
        'ru': 'Качественное и недорогое обслуживание автомобиля',
        'en': 'High quality, low cost car servicing',
    },
    'contact-us':{
        'ru': 'связаться с нами',
        'en': 'contact us',
    },
    'place-name':{
        'ru': 'Имя',
        'en': 'Name',
    },
    'send':{
        'ru': 'Отправить',
        'en': 'Send',
    },
    'auto':{
        'ru': '© 2021 Авто тема от Frontend Tricks',
        'en': '© 2021 Auto theme by Frontend Tricks',
    },
    }


    const arrLng=['ru', 'en'];
    const buttons = document.querySelectorAll('.btn-choose');
    const formit=document.querySelectorAll('.form-item');

for (const button of buttons) {
        button.addEventListener('click', () => {
        const language = button.value;
        location.href=window.location.pathname+'#'+language;
        location.reload();
    });
};

function changeLanguage(){
    let hash= window.location.hash;
    hash=hash.substr(1);
    if(!arrLng.includes(hash)) {
        location.href=window.location.pathname+'#en';
        location.reload();
    };
    document.querySelector('title').innerHTML=arrLang['unit'][hash];
    if(hash=='ru'){
        buttons[0].classList.add('active');
        formit[1].classList.add('ru');
    }else{
        buttons[1].classList.add('active');
        formit[0].classList.add('ru');
    };
    for(let key in arrLang){

        let elem=document.querySelector('.lang-' + key);
        if(elem){
            elem.innerHTML = arrLang[key][hash];
        };
    }
}
changeLanguage(); 


const menu=document.querySelector('.burger__menu');
const menuList=document.querySelector('.header__nav__list');
const closeArea=document.querySelector('.menu__close');
const closeButton=document.querySelector('.btn-close-menu');

menu.addEventListener('click',() =>{
    menuList.classList.add('menu_open');
    closeArea.classList.add('menu__open');
});
closeArea.addEventListener('click', closeMenu);
closeButton.addEventListener('click', closeMenu);

function closeMenu(){
    menuList.classList.remove('menu_open');
    closeArea.classList.remove('menu__open');
}