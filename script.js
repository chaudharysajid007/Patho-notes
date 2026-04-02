document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('searchInput').addEventListener('input', function() {
    searchFacts(this.value);
  });
  document.querySelectorAll('.system-title').forEach(function(el) {
    el.addEventListener('click', function() { toggle(el); });
  });
});

function toggle(titleEl) {
  const content = titleEl.nextElementSibling;
  const arrow = titleEl.querySelector('.arrow');
  content.classList.toggle('hidden');
  arrow.classList.toggle('open');
}

function searchFacts(query) {
  const q = query.toLowerCase();
  const allFacts = document.querySelectorAll('.fact, .tip, .topic');
  
  if (!q) {
    document.querySelectorAll('.system-content').forEach(c => c.classList.remove('hidden'));
    document.querySelectorAll('.topic').forEach(t => t.style.display = '');
    document.querySelectorAll('.fact, .tip').forEach(f => f.style.display = '');
    return;
  }

  document.querySelectorAll('.system').forEach(system => {
    const content = system.querySelector('.system-content');
    content.classList.remove('hidden');
    let systemHasMatch = false;

    system.querySelectorAll('.topic').forEach(topic => {
      let topicHasMatch = false;
      topic.querySelectorAll('.fact, .tip').forEach(fact => {
        if (fact.textContent.toLowerCase().includes(q)) {
          fact.style.display = '';
          topicHasMatch = true;
          systemHasMatch = true;
        } else {
          fact.style.display = 'none';
        }
      });
      const topicName = topic.querySelector('.topic-name');
      if (topicName && topicName.textContent.toLowerCase().includes(q)) {
        topic.querySelectorAll('.fact, .tip').forEach(f => f.style.display = '');
        topicHasMatch = true;
        systemHasMatch = true;
      }
      topic.style.display = topicHasMatch ? '' : 'none';
    });
  });
}

// Start all sections open
document.querySelectorAll('.system-content').forEach(c => {
  // all open by default
});



function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.onload = function() {
  document.getElementById("popup").style.display = "flex";
};

