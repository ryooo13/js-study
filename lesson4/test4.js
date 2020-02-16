// let sum = (a,b) => a + b;

// alert(sum(1,2));

// let sum = (a,b) => {
//     let result = a + b;
//     return result;
// };

// alert(sum(1,2));

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution."),
  );