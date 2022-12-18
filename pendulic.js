// start : when press the submit
const collectiveResponse = {
    economicResponse: ["star", "moon", "sun", "comet"],
    socialResponse: [
      "terrible luck",
      "bad luck",
      "ok luck",
      "good luck",
      "great luck",
    ],
    legalResponse: [
      "go out and eat",
      "not read this",
      "play more",
      "trust no one",
    ],
    spiritualResponse: [
      "go out and eat",
      "not read this",
      "play more",
      "trust no one",
    ],
    emotionalResponse: [
      "go out and eat",
      "not read this",
      "play more",
      "trust no one",
    ],
  };

let button = document.querySelector(".submit");
let input = document.querySelector(".question");
input.addEventListener("keypress", function(event) {
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
        response =["yes", "no", "maybe"];
          break;
      };
      
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



