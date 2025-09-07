# Wizard's Choice 1 - Text Adventure Game

A fully interactive web-based recreation of "Wizard's Choice 1" by Sam Landstrom, featuring a medieval fantasy adventure with branching storylines, character stats, and multiple endings.

![Game Screenshot](screenshot.png)

## 🎮 Play the Game

[**Play Wizard's Choice 1 Online**](https://superneuromancer.github.io/Go/)

## 📖 About

You play as a young wizard seeking treasure and glory in a medieval fantasy world. Navigate through dangerous encounters with goblins, explore mysterious castles, and make choices that affect your character's stats and story progression.

### Features

- **Branching Narrative**: Multiple story paths based on your choices
- **Character Stats**: Track Mana, Morale, Life, and Gold
- **Achievement System**: Unlock achievements for different play styles
- **Save/Load System**: Save your progress and continue later
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Medieval Fantasy Theme**: Atmospheric styling with parchment textures and medieval fonts

### Game Mechanics

- **Mana**: Required for casting spells and magical abilities
- **Morale**: Represents your character's confidence and spirit
- **Life**: Your health points - reaching zero ends the game
- **Gold**: Currency earned through adventures and choices
- **Achievements**: Special rewards for clever, sneaky, or brave choices

## 🚀 Getting Started

### Play Online
Simply visit the [live demo](https://superneuromancer.github.io/wizards-choice-game/) to start playing immediately.

### Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/wizards-choice-game.git
   cd wizards-choice-game
   ```

2. Start a local web server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser and navigate to `http://localhost:8000`

## 🎯 How to Play

1. **Read the Story**: Each section presents a part of your adventure
2. **Make Choices**: Click on the choice buttons to progress the story
3. **Manage Resources**: Keep an eye on your Mana, Morale, Life, and Gold
4. **Save Progress**: Use the Save button to preserve your progress
5. **Unlock Achievements**: Different choices lead to different achievements

### Choice Types

- **Standard Choices**: Regular story progression options
- **Mana Choices**: Require mana to cast spells (shown in blue)
- **Disabled Choices**: Grayed out when you don't meet requirements

## 🛠️ Technical Details

### Built With

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: Game logic, state management, and DOM manipulation
- **Local Storage**: Save/load functionality
- **Google Fonts**: Cinzel and Crimson Text for medieval atmosphere

### File Structure

```
wizards-choice-game/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # Game engine and mechanics
├── gameData.js         # Story content and game data
├── images/             # Game images and assets
├── README.md           # This file
└── screenshot.png      # Game screenshot
```

### Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎨 Customization

### Adding New Story Content

1. Open `gameData.js`
2. Add new story sections to the `gameData` object:
   ```javascript
   newSection: {
       text: `<p>Your story text here...</p>`,
       choices: [
           { text: "Choice 1", target: "nextSection1" },
           { text: "Choice 2", target: "nextSection2" }
       ],
       manaDown: 2,  // Optional stat changes
       goldUp: 10
   }
   ```

### Modifying Styles

Edit `styles.css` to customize:
- Color schemes
- Fonts and typography
- Layout and spacing
- Animations and effects

### Adding New Achievements

Add to the `achievements` object in `gameData.js`:
```javascript
achievements: {
    newAchievement: "Achievement Name - Description"
}
```

## 📱 Mobile Support

The game is fully responsive and includes:
- Touch-friendly button sizes
- Optimized layouts for small screens
- Readable text on mobile devices
- Gesture support for navigation

## 🔧 Development

### Local Development Setup

1. Clone the repository
2. Make your changes to the HTML, CSS, or JavaScript files
3. Test locally using a web server
4. Commit and push your changes

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Sam Landstrom** - Original author of "Wizard's Choice 1"
- **Google Fonts** - Cinzel and Crimson Text fonts
- **Medieval Fantasy Community** - Inspiration for the visual design

## 🐛 Bug Reports

If you encounter any issues, please [open an issue](https://github.com/yourusername/wizards-choice-game/issues) with:
- Description of the problem
- Steps to reproduce
- Browser and version
- Screenshots if applicable

## 🎮 More Games

This is part 1 of the Wizard's Choice series. Stay tuned for more adventures!

---

**Enjoy your adventure, wizard!** ⚡🧙‍♂️✨
