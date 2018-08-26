const questions = [
    {
      prompt: "What is the capital of Nigeria?\n(a)Lagos\n\(b)Port Harcourt\n(c)Abuja",
      answer: "c"
    },
      {
      prompt: "What is the capital of Cuba?\n(a)Bauta\n\(b)Havana\n(c)Auguacate",
      answer: "b"
    },
    {
      prompt: "What is the capital of Togo?\n(a)Lome\n\(b)Accra\n(c)Ouagadougou",
      answer: "a"
    },
     {
      prompt: "What is the capital of Trinidad and Tobago?\n(a) Dougla\n\(b)	Port of Spain\n(c)Chaguanas",
      answer: "b"
    },
  ];
  let score = 0;
   
  for(let i=0; i < questions.length; i++){
    let response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
      score++;
      alert("Correct!!")
    }
    else {
      alert("Ops, Wrong Answer!!")
    }
  }
  alert("you got " + score + "/" + questions.length);