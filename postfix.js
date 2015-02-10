//Eric Heinzman
//1/28/15
//CMP 344
//This program will convert infix expressions to postfix expression


   load('stack.js');


   var equa = readline();

   //Converting the infix notation to the postfix notation
   function conversion(equation) {
	var stack = new Stack();
	var postfix = [];

	//traverse the equation
	for (var i = 0; i < equation.length; i++) {
	// first print the opperands as they arrive 
		if(equation[i] >= '0' && equation[i] <= '9') {
			postfix = postfix + equation[i];
	}
	}

