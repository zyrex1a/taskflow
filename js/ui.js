const priorityLabels = { low: "Basse", medium: "Moyenne", high: "Haute" };
const priorityColors = { low: "success", medium: "warning", high: "danger" };

const escapeHtml = (str) => $("<div>").text(str).html();

export const createTaskCard = ({ id, title, description, priority }) => `
  <div class="card task-card mb-2" data-id="${id}">
    <div class="card-body p-2">
      <div class="d-flex justify-content-between align-items-start">
        <h6 class="card-title mb-1">${escapeHtml(title)}</h6>
        <span class="badge text-bg-${priorityColors[priority]}">${priorityLabels[priority]}</span>
      </div>
      <p class="card-text small text-muted mb-0">${escapeHtml(description)}</p>
    </div>
  </div>`;

export const renderTasks = (tasks) => {
  ["todo", "doing", "done"].forEach((status) => {
    const html = tasks
      .filter((task) => task.status === status)
      .map(createTaskCard)
      .join("");
    $(`#${status}`).html(html);
  });
};