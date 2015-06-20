// Code Wars
// Design a Simple Finite State Machine problem

// Create a finite state machine (FSM) that has three states
// Our simple FSM, accepts the language of A, defined as {0,1} and should have three states, q1, q2, and q3

// q1 is our start state. We begin reading commands from here.
// q2 is our accept state. We return ture if this is our last state.

// q1 moves to q2 when given a 1, and stays at q1 when given a 0
// q2 moves to q3 when given a 0, and stays at q2 when given a 1
// q3 moves to q2 when given a 0 or 1

// Our FSM should return whether we end in our accepted state, or not (true/false)

// You will have to design your state objects, and how your Automaton handles transitions.
// Also, make sure that you set up the three states, q1, q2, and q3, for the myAutomaton instance.
// The test fixtures will be calling against myAutomaton

// The automaton accepts an array of strings, rather than just numbers, or a number represented as a string, because the language an automaton can accept isn't confined to just numbers. An automaton should be ableto accept any 'symbol'

function Automaton()
{
   this.states = [];

  // state q1 goes to q1 on 0 and q2 on 1
   var q1 = {
    0: 0,
    1: 1
   };

   // state q2 goes to q3 on 0 and q2 on 1
   var q2 = {
    0: 2,
    1: 1
   };

  // state q3 goes to q2 on 0 and q2 on 1
   var q3 = {
    0: 1,
    1: 1
   };

   this.states.push(q1);
   this.states.push(q2);
   this.states.push(q3);
}

Automaton.prototype.readCommands = function(commands)
{
  // Return true if we end in our accept state, false otherwise.

  // set initial state to q1
  var currState = this.states[0];

  // iterate through commands in passed in array
  commands.forEach(function(command) {
    // based on current state and command update state
    currState = this.states[currState[command]];
  }, this);

  // if final state is q2 then return true
  // else return false
  return currState === this.states[1] ? true : false;
}

// test
var myAutomaton = new Automaton();

console.log(myAutomaton.readCommands(["1"])); // true
console.log(myAutomaton.readCommands(["1", "0", "0", "1"])); // true
console.log(myAutomaton.readCommands(["1", "1", "0"])); // false

