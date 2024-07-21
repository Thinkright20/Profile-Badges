const achievements = {
    tasksCompleted: 0,
    badges: []
};

const badgeDefinitions = [
    { id: 1, name: 'First Task', description: 'Complete your first task', requirement: 1 },
    { id: 2, name: 'Task Master', description: 'Complete 5 tasks', requirement: 5 },
    { id: 3, name: 'Task Legend', description: 'Complete 10 tasks', requirement: 10 }
];

function checkForBadges() {
    badgeDefinitions.forEach(badge => {
        if (achievements.tasksCompleted >= badge.requirement && !achievements.badges.includes(badge.id)) {
            achievements.badges.push(badge.id);
            displayBadge(badge);
        }
    });
}

function displayBadge(badge) {
    const badgesList = document.getElementById('badgesList');
    const badgeItem = document.createElement('li');
    badgeItem.textContent = `${badge.name}: ${badge.description}`;
    badgesList.appendChild(badgeItem);
}

document.getElementById('completeTaskButton').addEventListener('click', () => {
    achievements.tasksCompleted++;
    checkForBadges();
    alert(`Tasks completed: ${achievements.tasksCompleted}`);
});

document.addEventListener('DOMContentLoaded', () => {
    achievements.badges.forEach(badgeId => {
        const badge = badgeDefinitions.find(b => b.id === badgeId);
        displayBadge(badge);
    });
});
