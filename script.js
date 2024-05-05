const storyElement = document.getElementById("story");
const optionButtons = document.getElementsByClassName("option-btn");

let currentScene = 0;

const scenes = [
    {
        story: "You wake up in a dark room. There is a door to your left and a window to your right. What do you do?",
        options: [
            { text: "Open the door", nextScene: 1 },
            { text: "Look out of the window", nextScene: 2 },
        ]
    },
    {
        story: "You open the door and find yourself in a long hallway. There are two more doors ahead. Which one do you choose?",
        options: [
            { text: "Go through the left door", nextScene: 3 },
            { text: "Go through the right door", nextScene: 4 },
        ]
    },
    {
        story: "You look out of the window and see a beautiful garden. It seems peaceful outside. What do you do?",
        options: [
            { text: "Jump out of the window", nextScene: 5 },
            { text: "Stay in the room", nextScene: 6 },
        ]
    },
    {
        story: "You enter a room filled with treasure. You have found the legendary Sword of Power! What do you do now?",
        options: [
            { text: "Take the sword and continue exploring", nextScene: 7 },
            { text: "Take the sword and go back to the garden", nextScene: 8 },
        ]
    },
    {
        story: "You enter a room with a ferocious dragon. It attacks you! What do you do?",
        options: [
            { text: "Fight the dragon", nextScene: 9 },
            { text: "Run away", nextScene: 10 },
        ]
    },
    {
        story: "You jump out of the window and land safely in the garden. You are free! Congratulations, you have escaped!",
        options: [
            { text: "Play again", nextScene: 0 },
        ]
    },
    {
        story: "You decide to stay in the room. Time passes by, but nothing changes. You are stuck forever!",
        options: [
            { text: "Play again", nextScene: 0 },
        ]
    },
    {
        story: "You take the sword and continue exploring. Your adventure continues...",
        options: [
            { text: "Play again", nextScene: 0 },
        ]
    },
    {
        story: "You take the sword and go back to the garden. The dragon sees you and attacks. You use the Sword of Power to defeat the dragon!",
        options: [
            { text: "Play again", nextScene: 0 },
        ]
    },
    {
        story: "You fight the dragon, but it's too powerful. It defeats you. Game Over!",
        options: [
            { text: "Play again", nextScene: 0 },
        ]
    },
    {
        story: "You run away from the dragon, narrowly escaping its fiery breath. Your adventure continues...",
        options: [
            { text: "Play again", nextScene: 0 },
        ]
    },
];

function displayScene(sceneIndex) {
    const scene = scenes[sceneIndex];
    storyElement.textContent = scene.story;

    for (let i = 0; i < scene.options.length; i++) {
        optionButtons[i].textContent = scene.options[i].text;
        optionButtons[i].addEventListener("click", function (nextSceneIndex) {
            return function () {
                displayScene(nextSceneIndex);
            };
        }(scene.options[i].nextScene));
    }
}

displayScene(currentScene);