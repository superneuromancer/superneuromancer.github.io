// Wizard's Choice 1 - Main Game Script

class WizardGame {
    constructor() {
        this.currentSection = 'intro';
        this.playerStats = { ...initialStats };
        this.gameHistory = [];
        this.achievements = new Set();
        
        this.initializeElements();
        this.bindEvents();
        this.loadSection(this.currentSection);
    }
    
    initializeElements() {
        // Get DOM elements
        this.storyText = document.getElementById('storyText');
        this.storyImage = document.getElementById('storyImage');
        this.storyImg = document.getElementById('storyImg');
        this.choicesContainer = document.getElementById('choicesContainer');
        this.achievementNotification = document.getElementById('achievementNotification');
        this.modal = document.getElementById('gameModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalBody = document.getElementById('modalBody');
        
        // Stat elements
        this.manaValue = document.getElementById('manaValue');
        this.moraleValue = document.getElementById('moraleValue');
        this.lifeValue = document.getElementById('lifeValue');
        this.goldValue = document.getElementById('goldValue');
        
        // Control buttons
        this.saveBtn = document.getElementById('saveBtn');
        this.loadBtn = document.getElementById('loadBtn');
        this.resetBtn = document.getElementById('resetBtn');
        
        // Modal buttons
        this.modalConfirm = document.getElementById('modalConfirm');
        this.modalCancel = document.getElementById('modalCancel');
        this.closeModal = document.querySelector('.close');
    }
    
    bindEvents() {
        // Control button events
        this.saveBtn.addEventListener('click', () => this.saveGame());
        this.loadBtn.addEventListener('click', () => this.loadGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        
        // Modal events
        this.closeModal.addEventListener('click', () => this.hideModal());
        this.modalCancel.addEventListener('click', () => this.hideModal());
        
        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.hideModal();
            }
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.hideModal();
            }
        });
    }
    
    loadSection(sectionName) {
        const section = gameData[sectionName];
        if (!section) {
            console.error(`Section ${sectionName} not found`);
            return;
        }
        
        this.currentSection = sectionName;
        this.gameHistory.push(sectionName);
        
        // Apply stat changes
        this.applyStatChanges(section);
        
        // Show achievement if present
        if (section.reward && !this.achievements.has(section.reward)) {
            this.achievements.add(section.reward);
            this.showAchievement(section.reward);
        }
        
        // Update display
        this.updateStoryDisplay(section);
        this.updateChoices(section.choices || []);
        this.updateStats();
        
        // Add fade-in animation
        this.storyText.classList.add('fade-in');
        setTimeout(() => {
            this.storyText.classList.remove('fade-in');
        }, 500);
    }
    
    applyStatChanges(section) {
        const changes = {};
        
        if (section.manaUp) {
            this.playerStats.mana += section.manaUp;
            changes.mana = section.manaUp;
        }
        if (section.manaDown) {
            this.playerStats.mana -= section.manaDown;
            changes.mana = -section.manaDown;
        }
        if (section.moraleUp) {
            this.playerStats.morale += section.moraleUp;
            changes.morale = section.moraleUp;
        }
        if (section.moraleDown) {
            this.playerStats.morale -= section.moraleDown;
            changes.morale = -section.moraleDown;
        }
        if (section.lifeUp) {
            this.playerStats.life += section.lifeUp;
            changes.life = section.lifeUp;
        }
        if (section.lifeDown) {
            this.playerStats.life -= section.lifeDown;
            changes.life = -section.lifeDown;
        }
        if (section.goldUp) {
            this.playerStats.gold += section.goldUp;
            changes.gold = section.goldUp;
        }
        if (section.goldDown) {
            this.playerStats.gold -= section.goldDown;
            changes.gold = -section.goldDown;
        }
        
        // Ensure stats don't go below 0
        this.playerStats.mana = Math.max(0, this.playerStats.mana);
        this.playerStats.morale = Math.max(0, this.playerStats.morale);
        this.playerStats.life = Math.max(0, this.playerStats.life);
        this.playerStats.gold = Math.max(0, this.playerStats.gold);
        
        // Animate stat changes
        this.animateStatChanges(changes);
    }
    
    animateStatChanges(changes) {
        Object.keys(changes).forEach(stat => {
            const element = document.getElementById(`${stat}Value`);
            if (element) {
                element.classList.add('stat-change');
                setTimeout(() => {
                    element.classList.remove('stat-change');
                }, 600);
            }
        });
    }
    
    updateStoryDisplay(section) {
        // Update text content
        this.storyText.innerHTML = section.text;
        
        // Handle images
        if (section.image) {
            this.storyImg.src = `images/${section.image}`;
            this.storyImg.alt = "Story illustration";
            this.storyImage.style.display = 'block';
        } else {
            this.storyImage.style.display = 'none';
        }
    }
    
    updateChoices(choices) {
        // Clear existing choices
        this.choicesContainer.innerHTML = '';
        
        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            
            // Check mana requirements
            if (choice.manaReq) {
                button.classList.add('mana-required');
                if (this.playerStats.mana < choice.manaReq) {
                    button.classList.add('insufficient-mana');
                    button.disabled = true;
                    button.title = `Requires ${choice.manaReq} mana (you have ${this.playerStats.mana})`;
                }
            }
            
            // Add click event
            button.addEventListener('click', () => {
                if (!button.disabled) {
                    this.makeChoice(choice);
                }
            });
            
            // Add keyboard support
            button.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    if (!button.disabled) {
                        this.makeChoice(choice);
                    }
                }
            });
            
            this.choicesContainer.appendChild(button);
        });
    }
    
    makeChoice(choice) {
        // Add fade-out effect
        this.storyText.classList.add('fade-out');
        
        setTimeout(() => {
            this.storyText.classList.remove('fade-out');
            this.loadSection(choice.target);
        }, 300);
    }
    
    updateStats() {
        this.manaValue.textContent = this.playerStats.mana;
        this.moraleValue.textContent = this.playerStats.morale;
        this.lifeValue.textContent = this.playerStats.life;
        this.goldValue.textContent = this.playerStats.gold;
        
        // Check for death condition
        if (this.playerStats.life <= 0) {
            setTimeout(() => {
                this.showModal('Game Over', 
                    '<p>Your life has reached zero. Your adventure ends here.</p><p>Would you like to start over?</p>',
                    () => this.resetGame()
                );
            }, 1000);
        }
    }
    
    showAchievement(achievementKey) {
        const achievementText = achievements[achievementKey] || `Achievement: ${achievementKey}`;
        
        this.achievementNotification.querySelector('.achievement-text').textContent = achievementText;
        this.achievementNotification.classList.add('show');
        
        setTimeout(() => {
            this.achievementNotification.classList.remove('show');
        }, 3000);
    }
    
    saveGame() {
        const saveData = {
            currentSection: this.currentSection,
            playerStats: { ...this.playerStats },
            gameHistory: [...this.gameHistory],
            achievements: Array.from(this.achievements),
            timestamp: new Date().toISOString()
        };
        
        try {
            localStorage.setItem('wizardChoice1Save', JSON.stringify(saveData));
            this.showModal('Game Saved', '<p>Your progress has been saved successfully!</p>');
        } catch (error) {
            this.showModal('Save Error', '<p>Failed to save game. Please try again.</p>');
        }
    }
    
    loadGame() {
        try {
            const saveData = localStorage.getItem('wizardChoice1Save');
            if (!saveData) {
                this.showModal('No Save Found', '<p>No saved game found.</p>');
                return;
            }
            
            const data = JSON.parse(saveData);
            
            this.showModal('Load Game', 
                `<p>Load saved game from ${new Date(data.timestamp).toLocaleString()}?</p>`,
                () => {
                    this.currentSection = data.currentSection;
                    this.playerStats = { ...data.playerStats };
                    this.gameHistory = [...data.gameHistory];
                    this.achievements = new Set(data.achievements);
                    
                    this.loadSection(this.currentSection);
                    this.hideModal();
                }
            );
        } catch (error) {
            this.showModal('Load Error', '<p>Failed to load saved game.</p>');
        }
    }
    
    resetGame() {
        this.showModal('Reset Game', 
            '<p>Are you sure you want to start a new game? All progress will be lost.</p>',
            () => {
                this.currentSection = 'intro';
                this.playerStats = { ...initialStats };
                this.gameHistory = [];
                this.achievements = new Set();
                
                this.loadSection(this.currentSection);
                this.hideModal();
            }
        );
    }
    
    showModal(title, body, confirmCallback = null) {
        this.modalTitle.textContent = title;
        this.modalBody.innerHTML = body;
        
        if (confirmCallback) {
            this.modalConfirm.style.display = 'inline-block';
            this.modalConfirm.onclick = confirmCallback;
        } else {
            this.modalConfirm.style.display = 'none';
        }
        
        this.modal.style.display = 'block';
    }
    
    hideModal() {
        this.modal.style.display = 'none';
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.game = new WizardGame();
});

// Add some utility functions for debugging
window.debugGame = {
    setStats: (mana, morale, life, gold) => {
        if (window.game) {
            window.game.playerStats.mana = mana || 0;
            window.game.playerStats.morale = morale || 0;
            window.game.playerStats.life = life || 0;
            window.game.playerStats.gold = gold || 0;
            window.game.updateStats();
        }
    },
    
    goToSection: (sectionName) => {
        if (window.game && gameData[sectionName]) {
            window.game.loadSection(sectionName);
        }
    },
    
    listSections: () => {
        return Object.keys(gameData);
    }
};
