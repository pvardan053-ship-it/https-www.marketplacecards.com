const langData = {
    ru: {
        title: "WB КАРТОЧКИ",
        subtitle: "Премиальная инфографика для Wildberries",
        coverTitle: "Обложка карточки",
        slideTitle: "Слайд",
        heroBtn: "Заказать дизайн",
        orderTitle: "Готовы выполнить заказ?",
        ctaText: "Напишите в Telegram и получите профессиональный дизайн",
        orderBtn: "Написать в Telegram"
    },
    en: {
        title: "WB CARDS",
        subtitle: "Premium infographics for Wildberries",
        coverTitle: "Card Cover",
        slideTitle: "Slide",
        portfolioTitle: "My portfolio",
        heroBtn: "Order design",
        orderTitle: "Ready to boost sales?",
        ctaText: "Message on Telegram and get a professional design",
        orderBtn: "Contact on Telegram"
    }
};

function setLang(lang) {
    document.getElementById("title").innerText = langData[lang].title;
    document.getElementById("subtitle").innerText = langData[lang].subtitle;
    document.getElementById("coverTitle").innerText = langData[lang].coverTitle;
    document.getElementById("slideTitle").innerText = langData[lang].slideTitle;
    document.getElementById("portfolioTitle").innerText = langData[lang].portfolioTitle;
    document.getElementById("heroBtn").innerText = langData[lang].heroBtn;
    document.getElementById("orderTitle").innerText = langData[lang].orderTitle;
    document.getElementById("ctaText").innerText = langData[lang].ctaText;
    document.getElementById("orderBtn").innerText = langData[lang].orderBtn;
}

