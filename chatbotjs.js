const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get the current date
const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});

// Store conversation information
const conversation = {
  name: "",
  feeling: "",
  plan: "",
};

// Helper function for asking questions
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Main chatbot function
async function simpleChatbot() {
  console.log("====================================");
  console.log("       Welcome to Simple Chatbot     ");
  console.log("====================================");

  console.log(`\nToday's date is ${formattedDate}.`);
  console.log("Let's have a short conversation!\n");

  // Question 1
  conversation.name = await askQuestion(
    "Chatbot: Hello! What is your name? "
  );

  console.log(
    `Chatbot: It's great to meet you, ${conversation.name}!`
  );

  // Question 2
  conversation.feeling = await askQuestion(
    `Chatbot: ${conversation.name}, how are you feeling today? `
  );

  console.log(
    `Chatbot: I'm glad to hear that you're feeling ${conversation.feeling}.`
  );

  // Question 3
  conversation.plan = await askQuestion(
    `Chatbot: That's interesting, ${conversation.name}. What are you planning to do today? `
  );

  console.log(
    `Chatbot: That sounds like a good plan!`
  );

  // Final threaded response
  console.log("\n====================================");
  console.log("         Conversation Summary        ");
  console.log("====================================");

  console.log(
    `\nNice talking with you, ${conversation.name}!`
  );

  console.log(
    `You told me that you're feeling ${conversation.feeling} today.`
  );

  console.log(
    `You are planning to ${conversation.plan}.`
  );

  console.log(
    `\nI hope everything goes well with your plans, ${conversation.name}!`
  );

  console.log(
    `Have a wonderful day on ${formattedDate}!`
  );

  console.log("\nChatbot: Goodbye! 👋");

  // Close the readline interface
  rl.close();
}

// Start the chatbot
simpleChatbot();
