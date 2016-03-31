var express = require('express');
var router = express.Router();

var tasks = [
	{id :1, name : 'Watch a movie', isCompleted : false},
	{id :2, name : 'Plan for vacation', isCompleted : true},
	{id :3, name : 'Fix that bug', isCompleted : false},
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('All the tasks will be displayed here');
  var viewData = { list : tasks };
  res.render('tasks/index', viewData);
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newTaskName = req.body.taskName;
	var newId = tasks.reduce(function(result, task){
		return result > task.id ? task.id : result;
	}, 0) + 1;
	var newTask = {
		id : newId,
		name : newTaskName,
		isCompleted : false
	};
	tasks.push(newTask);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	var taskId = parseInt(req.params.id);
	var task = tasks.filter(function(tk){
		return tk.id === taskId;
	})[0];
	if (task){
		task.isCompleted = !task.isCompleted;
	}
	res.redirect('/tasks');
});

module.exports = router;