		
const scheduleBtn = document.getElementById('scheduleBtn'),
		formfield = document.querySelector('#main_form_div'),
	saveBtn = document.getElementById('saveBtn'),
	saved_tasks = document.getElementById('fetched_data');
	subtaskBtn = document.getElementById('subtaskBtn');
	console.log(subtaskBtn);


loadEventListener();

function loadEventListener(){
	
	scheduleBtn.addEventListener('click', go_to_scheduled);
	saveBtn.addEventListener('click', go_to_read);
	subtaskBtn.addEventListener('click',go_to_read_subtask);
	//for fetching data from local storage
	
	document.addEventListener('DOMContentLoaded', load_from_ls);
}

// function for showing schedule on the page after clicking schedule button
function go_to_scheduled(e){
	console.log(e.target);
	const division = document.querySelector('#content');
	console.log(division);
	division.style.display = "block";

	console.log(formfield.childNodes);

	
}

function go_to_read(e){
	e.preventDefault();
	const data_ls = getDataFromStorage();
	console.log(data_ls);
	const data = read_from_field();
	data_ls.push(data);
	localStorage.setItem('task', JSON.stringify(data_ls));
	
}

//function to read subtask's form data

function go_to_read_subtask(){
		const subtask_form = document.querySelector('.subtask_form_popup');
		console.log(subtask_form);
		const form_elements = subtask_form.childNodes;
		console.log(form_elements);
		const subtask_fields = [];
		subtask_fields.push(form_elements[1][0].value);
		subtask_fields.push(form_elements[1][1].value);
		console.log(subtask_fields);
}



function read_from_field(taskdata){
	taskdata = formfield.childNodes;
	console.log(taskdata);
	/*const data_array = [[[]]];
	data_array.push(taskdata[3][0].value);
	data_array.push(taskdata[3][1].value);
	data_array.push(taskdata[3][2].value);
	data_array.push(taskdata[3][3].value);
	console.log(data_array);*/
	data_array = {
		title: taskdata[3][0].value,
		priority: taskdata[3][1].value,
		category: taskdata[3][2].value,
		description: taskdata[3][3].value,
		subtasks: []
		
	}
	//const obj_array = [];
	//obj_array.push(data_array);
	console.log(data_array);
	return data_array;
}

function getDataFromStorage(){
	let datals;
	if(localStorage.getItem('task')===null){
		datals = [];
	}
	else{
		datals = JSON.parse(localStorage.getItem('task'));
	}
	return datals;
}

//function to fetch local storage

function load_from_ls(){
	const datals = getDataFromStorage();
	console.log(datals);
	//add fetched data to html form
	
	//code to generate form for fetched data

	datals.forEach(function(task_ls){
		const division = document.createElement('div');
		division.style.display = "inline";
		division.innerHTML = `
		<div class="loaded_sub">
	  <form action="/action_page.php">
		<label class = "label" for="fname"><b>Title:&nbsp</b>${task_ls.title}</label>


		<label class = "label" for="lname"><b>Priority:&nbsp</b>${task_ls.priority}</label>
	   

		<label class = "label" for="country"><b>Category:&nbsp</b>${task_ls.category}</label>
		<label class = "label" for=""><b>description:&nbsp</b>${task_ls.description}</label>

		<input class="sub" type="submit" value="Sub Tasks">
		<input class="sub" type="submit" value="Edit">
		
	  </form>
	</div>	
		`;
		saved_tasks.appendChild(division);
	});
	
	console.log(saved_tasks);
}





