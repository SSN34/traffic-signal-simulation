# Traffic Lights Intersection Simulator

This project simulates a traffic lights intersection.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/SSN34/traffic-signal-simulation
    ```
2. Navigate to the project directory:
    ```sh
    cd traffic-signal-simulation
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:
```sh
npm start
```

## Application Overview

### Project Overview

The application follows a component-based architecture using React. The main components are:

#### App: The root component that initializes the application.

1. Intersection: Manages the state and logic for the traffic lights intersection.
2. Light: Represents individual traffic lights.

The state management is handled within the Intersection component, which controls the signal states and updates the Light components accordingly. The application uses TypeScript for type safety and CSS for styling.

### Technologies Used
1. React: A JavaScript library for building user interfaces.
2. TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
3. CSS: Used for styling the components.

### Key Functions

1. calculateColorValue(signalState: number): "green" | "yellow" | "red": Determines the color of the traffic light based on the signal state.

2. getSignalStates(signalIndex: number): Returns the current state of all traffic lights based on the signal index.

### Detailed Information
The traffic light timings are managed and calculated using a state machine approach within the Intersection component. Here is a detailed breakdown:

State Representation: Each traffic light has a state that can be "green", "yellow", or "red". These states are represented by numerical values for easier manipulation.

Timing Intervals: Green, Yellow state has a predefined duration:

- Green: 5 seconds
- Yellow: 1 seconds
- Red: considered as default light 

State Transition: The state transitions are managed using a timer that updates the state at the end of each interval. The transitions follow this sequence:

Green -> Yellow -> Red -> Green