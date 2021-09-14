// questions is a node list. It looks and acts much like an array.
const questions = document.getElementsByClassName("question");
const answers = document.getElementsByClassName("answer");



//  [...questions].forEach((question) => {
//   question.addEventListener('click', function (e) {
//      e.currentTarget.classList.toggle("active");
//    });
//  });


for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    this.classList.toggle("active")
    let answer = this.nextElementSibling; //selects the answer following the question
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    }
    else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}