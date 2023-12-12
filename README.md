# Cicada3301 Game

Welcome to Cicada3301, an intriguing and challenging puzzle game inspired by the enigmatic Cicada 3301 online phenomenon. Dive into a world of mystery, cryptography, and mind-bending challenges!

## Features

- **Cryptic Puzzles:** Engage in complex puzzles that test your problem-solving skills and knowledge of cryptography.
- **Immersive Gameplay:** Experience an immersive gaming environment with visually stunning graphics and interactive elements.
- **Multi-Level Challenges:** Progress through multiple levels, each offering a unique set of challenges and mysteries to unravel.
- **Community Collaboration:** Join forces with other players to solve intricate puzzles, fostering a sense of community and teamwork.

## How to Play

  1. **Installation:**
    - Clone the repository: `git clone https://github.com/anuragc2001/cicada3301.git`
    - Navigate to the project directory: `cd Cicada3301`
    - Install dependencies: `npm install` (or your preferred package manager)

  2. **Run the Game:**
    - Start the game server: `npm start`
    - Open your web browser and go to `http://localhost:3000` to play the game.

  3. **Game Controls:**
    - Use the arrow keys for navigation.
    - Interact with objects using the 'E' key.

## Cicada3301 Game Backend

Welcome to the Cicada3301 Game Backend repository! This backend serves as the backbone for the Cicada3301 puzzle game, offering APIs for various functionalities.

## Technologies Used

- **Node.js:** Backend runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** Database for storing game-related data.
- **Session Cookies:** Used for handling user sessions.
- **Other Dependencies:** Ensure to install necessary dependencies using `npm install`.

## APIs

### Game API

#### Endpoints:

- `GET /score`: Retrieve game scores.
- `POST /fetch_question`: Fetch game questions.
- `POST /fetch_score`: Fetch user points.
- `POST /check_answer`: Check user answers.
- `POST /fetch_user_score`: Fetch individual user scores.
- `POST /update_score`: Update user scores.
- `POST /register_player`: Register new players.
- `POST /checkPlayerProd`: Check player status.

### Admin API

#### Endpoints:

- `GET /admin`: Retrieve admin data.
- `GET /question`: Retrieve Q&A data.
- `GET /teamPage`: Retrieve team data.
- `GET /startGame`: Start the game.
- `GET /stopGame`: Stop the game.
- `GET /gameStatus`: Get current game status.

### Auth API

#### Endpoints:

- `GET /login`: Display login page.
- `POST /login`: Handle login authentication.
- `GET /logout`: Log out user.

### Views

- The backend hosts an admin panel.
- Default admin credentials: Username - `001`, Password - `qwerty`.

## Usage

1. Clone the repository: `git clone https://github.com/yourusername/Cicada3301-Backend.git`
2. Navigate to the project directory: `cd cicada3301`
3. Install dependencies: `npm install`
4. Run the server: `npm start`
5. Access the backend at [https://cicada3301.onrender.com/login](https://cicada3301.onrender.com/login)

## Contributing

Feel free to contribute to the development of Cicada3301 by submitting pull requests. For major changes, please open an issue first to discuss the proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).


## Contributing

We welcome contributions! If you have ideas for improvements or new puzzles, feel free to submit a pull request.

## Feedback and Support

For bug reports, suggestions, or general feedback, please open an issue on our [GitHub repository](https://github.com/yourusername/Cicada3301/issues).

## License

This project is licensed under the [MIT License](LICENSE).

Happy gaming! 🎮
