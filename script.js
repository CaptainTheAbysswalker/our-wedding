// Initialize Google Maps (if you are using Google Maps API)
function initMap() {
  var location = { lat: 55.7558, lng: 37.6176 }; // Replace with your venue location
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
  });
  var marker = new google.maps.Marker({
      position: location,
      map: map,
  });
}

// Text content for English and Russian
const content = {
  en: {
      names: "Александр & Виктория",
      weddingDate: "Wedding Date: 13.09.2025",
      quote: "\"Together forever\"",
      formTitle: "Help us make your experience even better!",
      transportLabel: "Do you need transport to the venue?",
      alcoholLabel: "Do you have any alcohol preferences?",
      dietLabel: "Do you have any dietary restrictions?",
      attendanceLabel: "Will you attend the event?",
      submitBtn: "Submit",
      invitationTitle: "Our Invitation",
      invitationText: "Dear guests, we are excited to celebrate our special day with you. Your presence means the world to us, and we can't wait to share this memorable moment with you.",
      mapTitle: "Location",
      calendarBtn: "Add to Calendar",
      acceptBtn: "Accept the Invitation",
      footerText: "© 2025 Wedding of Александр & Виктория. All rights reserved."
  },
  ru: {
      names: "Александр & Виктория",
      weddingDate: "Дата свадьбы: 13.09.2025",
      quote: "\"Вместе навсегда\"",
      formTitle: "Помогите нам сделать ваше пребывание еще более комфортным!",
      transportLabel: "Нужна ли вам транспортировка на место проведения?",
      alcoholLabel: "Есть ли у вас предпочтения по алкоголю?",
      dietLabel: "Есть ли у вас диетические ограничения?",
      attendanceLabel: "Вы будете присутствовать на мероприятии?",
      submitBtn: "Отправить",
      invitationTitle: "Наше приглашение",
      invitationText: "Дорогие гости, мы с нетерпением ждем возможности отпраздновать этот особенный день с вами. Ваше присутствие имеет для нас большое значение, и мы не можем дождаться, чтобы поделиться этим незабываемым моментом с вами.",
      mapTitle: "Место проведения",
      calendarBtn: "Добавить в календарь",
      acceptBtn: "Принять приглашение",
      footerText: "© 2025 Свадьба Александра и Виктории. Все права защищены."
  }
};

// Set initial language to English
let currentLang = 'en';

// Function to change the language
function setLanguage(language) {
  console.log(language)
  currentLang = language;

  document.getElementById("names").innerText = content[language].names;
  document.getElementById("wedding-date").innerText = content[language].weddingDate;
  document.getElementById("quote").innerText = content[language].quote;
  document.getElementById("form-title").innerText = content[language].formTitle;
  document.getElementById("transport-label").innerText = content[language].transportLabel;
  document.getElementById("alcohol-label").innerText = content[language].alcoholLabel;
  document.getElementById("diet-label").innerText = content[language].dietLabel;
  document.getElementById("attendance-label").innerText = content[language].attendanceLabel;
  document.getElementById("submit-btn").innerText = content[language].submitBtn;
  document.getElementById("invitation-title").innerText = content[language].invitationTitle;
  document.getElementById("invitation-text").innerText = content[language].invitationText;
  document.getElementById("map-title").innerText = content[language].mapTitle;
  document.getElementById("calendar-btn").innerText = content[language].calendarBtn;
  document.getElementById("accept-btn").innerText = content[language].acceptBtn;
  document.getElementById("footer-text").innerText = content[language].footerText;
}

// Set initial language (English)
setLanguage(currentLang);


// Include this in your HTML before the closing </body> tag
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&callback=initMap" async defer></script>
