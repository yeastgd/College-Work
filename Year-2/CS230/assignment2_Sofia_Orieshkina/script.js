const myName = "Sofia";

document.addEventListener('DOMContentLoaded', function(){
    let w = document.getElementById('welcome-message');
    if(!w){
        w = document.createElement('p');
        w.id = 'welcome-message';

        const header = document.querySelector('header');
        const title = document.querySelector('.head');
        title.insertAdjacentElement('afterend', w);
    }

    w.textContent = `Welcome, ${myName}!`;
    w.style.textAlign = 'center';
    w.style.fontWeight = 'bold';
    w.style.color = '#375534';

    const statusParagraph = document.querySelector('.status');
    const toggleBtn = document.getElementById('toggle-status');

    let isActive = true;

    toggleBtn.addEventListener('click', function(){
        if(isActive){
            statusParagraph.classList.add('pending');
            statusParagraph.classList.remove('active');
            console.log("Status changed to: PENDING");
        } else {
            statusParagraph.classList.remove('pending');
            statusParagraph.classList.add('active');
            console.log("Status changed to: ACTIVE");
        }
        isActive = !isActive;
    });

    let count = 0;
    const statusCard = document.querySelector('.card:last-child');
    const counterParagraph = statusCard.querySelector('p:nth-of-type(2)');
    const buttons = statusCard.querySelectorAll('button');

    const addBtn = buttons[1];
    const resetBtn = buttons[2];

    addBtn.addEventListener('click', function(){
        count++;
        counterParagraph.textContent = `Study Sessions today: ${count}`;
    });
    resetBtn.addEventListener('click', function(){
        count = 0;
        counterParagraph.textContent = `Study Sessions today: ${count}`;
    });
    const goals = [
        "Read Notes",
        "Finish Lab",
        "Start New Project",
        "Review CSS Flexbox"
    ];

    console.log("===Weekly Goals===");
    for(let i = 0; i < goals.length; i++){
        console.log(`${i+1}. ${goals[i]}`);
    }

    const goalsCard = document.querySelectorAll('.card')[1];
    const toggleGoalsBtn = goalsCard.querySelector('button');

    toggleGoalsBtn.textContent = 'Show Goals';

    const goalsList = document.createElement('ul');
    goalsList.id = 'goals-display';
    goalsList.style.display = 'none';
    goalsList.style.marginTop = '10px';
    goalsList.style.paddingLeft = '20px';
    goalsList.style.minHeight = '120px';
    goalsCard.appendChild(goalsList);

    let goalsVisible = false;
    let animationInProgress = false;

    function showGoalOneByOne(){
        return new Promise((resolve)=>{
            goalsList.innerHTML = "";
            goalsList.style.display = 'block';

            goals.forEach((goal, index) => {
                setTimeout(() =>{
                    const li = document.createElement('li');
                    li.className = 'goal-item';
                    li.textContent = goal;
                    goalsList.appendChild(li);

                    if (index === goals.length -1){
                        setTimeout(resolve, 300);
                    }
                }, index*150);
            });
        });
    }

    function hideGoalsOneByOne(){
        return new Promise((resolve) =>{
            const items = document.querySelectorAll('.goal-item');
            let completed = 0;

            if(items.length === 0){
                resolve();
                return;
            }
            items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('fade-out');

                    setTimeout(() =>{
                        item.remove();
                        completed++;

                        if(completed === items.length){
                            goalsList.style.display = 'none';
                            resolve();
                        }
                    }, 300);  
                }, index * 100)
            });
        });
    }

    

    toggleGoalsBtn.addEventListener('click', async function(){
        if(animationInProgress){
            console.log("Animation is in progress, please, wait");
            return;
        }
        animationInProgress = true;
        toggleGoalsBtn.disabled = true;

        if(!goalsVisible){
            toggleGoalsBtn.textContent = "Loading...";
            await showGoalOneByOne();
            toggleGoalsBtn.textContent = "Hide Goals";
        } else {
            toggleGoalsBtn.textContent = "Hiding...";
            await hideGoalsOneByOne();
            toggleGoalsBtn.textContent = "Show Goals";
        }

        goalsVisible = !goalsVisible;
        animationInProgress = false;
        toggleGoalsBtn.disabled = false;
    });

    toggleGoalsBtn.style.transition = 'all 0.3s';
    toggleGoalsBtn.style.opacity = '1';

    const style =document.createElement('style');
    style.textContent = `
        button:disabled{
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
        }
    `;
    document.head.appendChild(style);

    const hoursStudied = 3;
    console.log("=== Study Progress ===");
    if(hoursStudied >= 3){
        console.log("Good Progress");
    } else {
        console.log("You should study more");
    }
});