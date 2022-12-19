// start : when press the submit
const collectiveResponse = {
  economicResponse: [
    "star decision",
    "moon fortune",
    "let the sun set",
    "don't!",
  ],
  socialResponse: [
    "terrible idea",
    "fortune",
    "unicorn decision",
    "go with your guts",
    "plan out a week",
  ],
  legalResponse: [
    "seek legal advice",
    "find a pro-bono lawyer",
    "tell the truth",
    "thread with your rights",
  ],
  spiritualResponse: [
    "pray to God, I'm not God",
    "read your Bible daily",
    "seek Preist Counsel",
    "trust in God",
  ],
  emotionalResponse: ["treat yourself", "such is life", "yolo", "trust no one"],
};

let button = document.querySelector(".submit");
let input = document.querySelector(".question");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});
button.addEventListener("click", () => {
  // cheak if there is an input
  let input = document.querySelector(".question");
  let question = input.value;

  if (question) {
    let response;
    switch (window.location.pathname) {
      case "/economic.html":
        response = collectiveResponse.economicResponse;
        break;
      case "/social.html":
        response = collectiveResponse.socialResponse;
        break;
      case "/legal.html":
        response = collectiveResponse.legalResponse;
        break;
      case "/spiritual.html":
        response = collectiveResponse.spiritualResponse;
        break;
      case "/emotional.html":
        response = collectiveResponse.emotionalResponse;
        break;
      default:
        response = ["yes", "no", "maybe"];
        break;
    }

    let random = Math.floor(Math.random() * response.length);
    alert(response[random]);
    input.value = "";
  } else {
    // if there is no input then we are going to alert to the user to provide a question
    alert("Ask your question");
  }
});

//stop

console.log(window.location.pathname);
