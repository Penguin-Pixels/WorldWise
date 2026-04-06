from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Example scenario data
scenarios = [
    {
        "id": 1,
        "question": "You are visiting a friend's home in Japan. They offer you tea. What should you do?",
        "options": [
            "Decline politely",
            "Accept with both hands",
            "Take it without saying anything"
        ],
        "answer": 1,
        "explanation": "In Japan, accepting with both hands shows respect."
    }
]

@app.route("/")
def home():
    return "Backend is running!"

@app.route("/scenario")
def get_scenario():
    return jsonify(scenarios[0])

if __name__ == "__main__":
    app.run()
