let count = 1;
let task_id = 0;
let edit_form_data = [];
const scheduleBtn = document.getElementById('scheduleBtn'),
		formfield = document.querySelector('#main_form_div'),
	saveBtn = document.getElementById('saveBtn'),
	subtask_btn = document.getElementById('subBtn'),
	edit_formBtn = document.getElementById('edittask_Btn');
	show_task_div = document.getElementById('subtasks_div');
	saved_tasks = document.getElementById('fetched_data');
	console.log(subtaskBtn);
const fetched_tasks = document.querySelector('#fetched_data');
	
	console.log(fetched_tasks);
	//console.log(showtask_Btn);
loadEventListener();

function loadEventListener(){
	
	scheduleBtn.addEventListener('click', go_to_scheduled);
	saveBtn.addEventListener('click', go_to_read);
	//subtaskBtn.addEventListener('click',go_to_read_subtask);
	//for fetching data from local storage
	
	document.addEventListener('DOMContentLoaded', load_from_ls);
	//add subtask
	fetched_tasks.addEventListener('click', save_subtask);
	subtask_btn.addEventListener('click', go_to_subtaskform);
	//edit_formBtn.addEventListener('click', edit_subtask_form);
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
		id: count,
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
	  <form id="${count}">
		<label class = "label" for="fname"><b>Title:&nbsp</b></label><input type="text" value="${task_ls.title}">


		<label class = "label" for="lname"><b>Priority:&nbsp</b></label><input type="text" value="${task_ls.priority}">
	   

		<label class = "label" for="country"><b>Category:&nbsp</b></label><input type="text" value="${task_ls.category}">
		<label class = "label" for=""><b>description:&nbsp</b></label><input type="text" value="${task_ls.description}">
		<input id="addtaskBtn" class="sub" type="submit" value="Add Sub Tasks" onclick="add_subtask()">
		<input id="showtaskBtn" class="sub" type="submit" value="Sub Tasks" onclick="show_subtask_div()"	>
		<input id="edittask_Btn" class="sub" type="submit" value="Save_Edited_Task" >
		
	  </form>
	</div>	
		`;
		saved_tasks.appendChild(division);
		count++;
	});
	console.log(count);
	console.log(saved_tasks);
	
}

//function for saving subtasks

function save_subtask(e){
	//e.preventDefault();
	//e.stopPropagation();
	console.log(e.target);
	if(e.target.classList.contains('sub')){
		const target = e.target;
		//const subtask_btn = document.getElementById('subBtn');
		//subtask_btn.addEventListener('click', go_to_subtaskform(this), false)
		const parentnode = (target).parentNode;
		console.log(parentnode);
		task_id = parentnode.id;
		//const child_list = parentnode.childNodes[1].childNodes[1].childNodes[1].childNodes[1].id;
		//console.log(child_list);
		
	}
	if(e.target.id === "showtaskBtn"){
		console.log('yes');
		//function
		show_subtask();
	}
	if(e.target.id === "edittask_Btn"){
		const target = e.target;
		const parentnode = (target).parentNode;
		console.log(parentnode);
		task_id = parentnode.id;
		const child_list = parentnode.childNodes;
		console.log(child_list);
		const array = [];
		array.push(child_list[2].value);
		array.push(child_list[5].value);
		array.push(child_list[8].value);
		array.push(child_list[11].value);
		console.log(array);
		console.log(task_id);
		const data_ls = getDataFromStorage();
		data_ls.forEach(function(task){
			if(task.id == task_id){
				task.title = array[0];
				task.priority = array[1];
				task.category = array[2];
				task.description = array[3];
			}
		});
		console.log(data_ls);
		localStorage.setItem('task', JSON.stringify(data_ls));
	}
	
}
//function for getting data of subtask
function go_to_subtaskform(target){
		
		const subtask_data = get_from_subtaskform();
		console.log(subtask_data);
		/*const parentnode = (target).parentNode;
		console.log(parentnode);
		const child_list = parentnode.childNodes[1].childNodes[1].childNodes[1].childNodes[1].id;
		console.log(child_list);*/
		console.log(task_id);
		const data_ls = getDataFromStorage();
		data_ls.forEach(function(task){
			console.log(typeof(task.id));
			console.log(typeof(task));
			if(task.id==task_id){
				console.log('inside for');
				(task.subtasks).push(subtask_data);
			}
		});
		console.log(data_ls);
		localStorage.setItem('task', JSON.stringify(data_ls));
}

function get_from_subtaskform(){
	const form_fields = document.querySelector('.modal-content');
	console.log(form_fields);
	const nodes = form_fields.childNodes;
	console.log(nodes);
	let data_array = [];
	data_array.push(nodes[5].value);
	data_array.push(nodes[9].value);
	return data_array;
}

// function for showing subtasks after fetching them from local storage
function show_subtask(){
	const data_ls = getDataFromStorage();
	let array = [];
	data_ls.forEach(function(task){
		if(task.id==task_id){
			array = task.subtasks;
		}
	});
	console.log(array);
	show_task_div.style.display = "none";
	array.forEach(function(subtask_data){
		const division = document.createElement('div');
		division.innerHTML = `
		<div id="myModal_subtask" class="myModal_subtask">

		<div class="modal-content">
		<span class="close_sub">&times;</span>
		
		
		<label for="sub_task"><b>Subtask Title</b></label>
		<input type="text" placeholder="Subtask Title" name="sub_title" value="${subtask_data[0]}" required>

		<label for="sub_des"><b>Description</b></label>
		<textarea type="textarea" placeholder="Subtask description" name="sub_descriptoion" value="${subtask_data[1]}" required></textarea>

		<button id="edit_subtask" type="submit" class="btn">Save Edited Subtask</button>
		
	  </div>

	</div>
		`;
		show_task_div.appendChild(division);
	});
	console.log(show_task_div);
	
}

function show_subtask_div(){
		show_task_div.style.display = "block";

}

function edit_subtask_form(){
	
}