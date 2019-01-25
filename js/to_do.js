
const scheduleBtn = document.getElementById('scheduleBtn');
		

loadEventListener();

function loadEventListener(){
	
	scheduleBtn.addEventListener('click', go_to_scheduled);
	
}

// function for showing schedule on the page after clicking schedule button
function go_to_scheduled(e){
	/*console.log(e.target);
	const division = document.querySelector('#content');
	console.log(division);
	division.innerHTML='<object class = "schedule_css" type="text/html" data="schedule.html" ></object>';
	//window.location.href = 'schedule.html';*/
	
}

// javascript to make transition for add task

