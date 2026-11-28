import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks } from "./ui.js";

let tasks = loadTasks();

$("#saveTask").on("click", () => {
  const title = $("#taskTitle").val().trim();

  if (!title) {
    $("#taskTitle").addClass("is-invalid");
    return;
  }

  const task = {
    id: Date.now(),
    title,
    description: $("#taskDesc").val().trim(),
    priority: $("#taskPriority").val(),
    status: "todo",
  };

  tasks = [...tasks, task];
  saveTasks(tasks);
  renderTasks(tasks);

  bootstrap.Modal.getOrCreateInstance($("#taskModal")[0]).hide();
  $("#taskTitle, #taskDesc").val("").removeClass("is-invalid");
});

renderTasks(tasks);