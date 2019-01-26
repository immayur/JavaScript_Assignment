
const scheduleBtn = document.getElementById('scheduleBtn'),
		formfield = document.querySelector('#main_form_div'),
	saveBtn = document.getElementById('saveBtn');
	console.log(saveBtn);


loadEventListener();

function loadEventListener(){
	
	scheduleBtn.addEventListener('click', go_to_scheduled);
	saveBtn.addEventListener('click', go_to_read);
	
	//for fetching data from local storage
	
	document.addEventListener('click', load_from_ls);
}

// function for showing schedule on the page after clicking schedule button
function go_to_scheduled(e){
	console.log(e.target);
	const division = document.querySelector('#content');
	console.log(division);
	division.style.display = "block";

	console.log(formfield.childNodes);
	
	
}

function go_to_read(){
	const data = read_from_field();
	localStorage.setItem('task', JSON.stringify(data));
	
}

function read_from_field(taskdata){
	taskdata = formfield.childNodes;
	console.log(taskdata);
	const data_array = [];
	data_array.push(taskdata[3][0].value);
	data_array.push(taskdata[3][1].value);
	data_array.push(taskdata[3][2].value);
	data_array.push(taskdata[3][3].value);
	console.log(data_array);
	return data_array;
}

function getDataFromStorage(){
	let datals;
	if(localStorage.getItem('task')===null){
		datals = [];
	}
	else{
		datals = JSON.parse(localStorage.get('task'));
	}
	return datals;
}

//function to fetch local storage

function load_from_ls(){
	const datals = getDataFromStorage();
	
	//add fetched data to html form
	
	//code to generate form for fetched data

		const division = document.createElement('div');
		
	datals.forEach(function(task_ls){
		div.innerHTML = `<div id="main_form_div" align="center">
		<div id="addtask_css" class="form_size" align="center">.......</div>
		<form id="form_css" class="form_size">
			
		 <div class="row">
     
      <div class="col-75">
        <input type="text" id="title" name="title" placeholder="Add a title.." value="${data[0]}">
      </div>
    </div>
    <div class="row">
      <div >Priority</div>
      <div class="col-75">
		<div class="row">
			${data[1]}
		</div>
        <select id="priority" name="Priority">
          <option value="high">HIGH</option>
          <option value="medium">MEDIUM</option>
          <option value="LOW">LOW</option>
        </select>
      </div>
    </div>
	 <div class="row">
     
      <div class="col-75">
			<div class="row">
				${$data[2]}
			</div>
			<select id="category" name="Category">
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Friend">Friend</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-75">
        <textarea id="description" name="description" placeholder="Add a description.." style="height:100px" value="${data[3]}"></textarea>
      </div>
    </div>
   
	</form>	 
		 
	</div>`;
	});
}



