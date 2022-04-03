console.log('for mannual for stopwatch do "stopwatch.Mannual"')
console.log('for mannual for todoApp do "todoApp.Mannual"')
console.log('note: this todo doesnt save')
class StopWatch {
  constructor() {
    this.currentTime = 0;
    this.state = false;
    this.duration = 0;
  }

  startTimer() {
    if (this.state === false) {
      this.state = true;
      this.currentTime = new Date();
    }
  }

  stopTimer() {
    if (this.state === true) {
      this.state = false;
      const endTime = new Date();
      this.duration =
        Math.round((endTime.getTime() - this.currentTime.getTime()) / 1000) +
        "s";
      console.log(this.duration);
    }
  }

  resetTimer() {
    this.currentTime = 0;
    this.state = false;
    this.duration = 0;
  }
  
  Mannual() {
    console.log('startTimer() => starts stopwatch')
    console.log('stopTimer() => stops stopwatch')
    console.log('restTimer() => resets stopwatch')
  }
}

const stopwatch = new StopWatch();

class todoList {
  constructor() {
    this.list = [];
  }
  createTodo(thingToDo) {
    const id = this.idGen();
    const todoName = `${thingToDo}`;
    const state = "incomplete";
    const todoItem = {
      "task name": todoName,
      state: state,
      "task number": id,
    };
    this.list.push(todoItem);
    console.table(todoItem);
  }

  idGen() {
    if (this.list.length === 0) {
      const id = 0;
      return id;
    } else {
      return this.list.length;
    }
  }

  removeTodo(id) {
    this.list.splice(id, 1);
  }

  completeTask(id) {
    if (this.list[id]) {
      this.list[id]["state"] = "complete";
      console.table(this.list[id]);
    } else {
      console.log("task number not found");
    }
  }

  showTask() {
    if (this.list.length) {
      console.table(this.list);
    } else {
      console.log("no task to show");
    }
  }

 Mannual() {
    console.log('createTodo("insert task name") => creates a task');
    console.log(
      'completeTask("insert task number") => completes already added task'
    );
    console.log("showTask() => shows task");
    console.log('removeTodo("insert task number") => removes task');
  }
}

const todoApp = new todoList();
