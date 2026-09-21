from datetime import datetime

def simple_chatbot():
    # Ask the user for their name
    name = input("Hello! What is your name? ")
    
    # Respond with a personalized greeting
    print(f"It's great to meet you, {name}!")
    
    # Get the current date
    current_date = datetime.now()
    
    # Format the date into a readable format (e.g., "November 14, 2024")
    formatted_date = current_date.strftime("%B %d, %Y")
    
    # Display the current date
    print(f"Today’s date is {formatted_date}. Have a wonderful day!")

# Run the chatbot
if __name__ == "__main__":
    simple_chatbot()
