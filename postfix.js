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
	
	//second if the stack is empty or has a left parenthesis on
	//top push the incoming operator onto the stack
	else if (stack.length() == 0 || stack.peek() == '(') {
		stack.push(equation[i]);
	}
	//third if the incoming symbol is a left parenthesis push it on stakc
	else if (equation[i] == '(') {
		stack.push(equaiton[i]);
	}

	//fourth if the incoming symbol is a right parenthesis, pop
	//the stack and print operators until left parenthesis
	//after this get rid of pair of parenthesis
	else if (equation[i] == ')') {
		while (stack.peek() != '(') {
			postfix = postfix + stack.pop();
		}
		stack.pop(); //discarding the parethesis
	}
	//fifth if the incoming symbol has a higher precedence than the
	//top of the stack push it on the stack



