"use strict";

/*
  Sample test data.
  Replace these sample entries with actual tests when needed.
*/

const mockTests = [
  {
    id: "sample-today-1",
    title: "Assam GK Mock Test",
    publisher: "Sir Rohit Biswas",
    date: getRelativeDate(0),
    questions: 30,
    minutes: 25,
    group: "today"
  },
  {
    id: "sample-today-2",
    title: "General Knowledge Practice Test",
    publisher: "Sir Yadav Subba",
    date: getRelativeDate(0),
    questions: 25,
    minutes: 20,
    group: "today"
  },
  {
    id: "sample-yesterday-1",
    title: "Assam History Mock Test",
    publisher: "Sir Rohit Biswas",
    date: getRelativeDate(1),
    questions: 30,
    minutes: 25,
    group: "yesterday"
  },
  {
    id: "sample-earlier-1",
    title: "Indian Polity Practice Test",
    publisher: "Sir Yadav Subba",
    date: getRelativeDate(3),
    questions: 40,
    minutes: 30,
    group: "earlier"
  }
];

function getRelativeDate(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDate(dateString) {
  const date = new Date(dateString + "T12:00:00");

  return {
    day: date.getDate(),
    month: date.toLocaleDateString("en-IN", {
      month: "short"
    })
  };
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });
}

function createTestCard(test) {
  const date = formatDate(test.date);
  const card = document.createElement("article");

  card.className = "test-card";

  card.innerHTML = `
    <div class="date-badge" aria-label="${escapeHTML(test.date)}">
      <span class="date-day">${date.day}</span>
      <span class="date-month">${escapeHTML(date.month)}</span>
    </div>

    <div class="test-info">
      <h3 class="test-title">${escapeHTML(test.title)}</h3>

      <p class="test-publisher">
        ${escapeHTML(test.publisher)}
      </p>

      <div class="test-meta">
        <span>${Number(test.questions)} Questions</span>
        <span>${Number(test.minutes)} Minutes</span>
      </div>
    </div>

    <a
      class="start-button"
      href="mock-test.html?test=${encodeURIComponent(test.id)}"
      aria-label="Start ${escapeHTML(test.title)}"
    >
      Start
    </a>
  `;

  return card;
}

function renderTests() {
  const groups = {
    today: document.getElementById("todayTests"),
    yesterday: document.getElementById("yesterdayTests"),
    earlier: document.getElementById("earlierTests")
  };

  let totalVisible = 0;

  Object.values(groups).forEach(function (container) {
    container.replaceChildren();
  });

  mockTests.forEach(function (test) {
    const container = groups[test.group];

    if (!container) {
      return;
    }

    container.appendChild(createTestCard(test));
    totalVisible++;
  });

  document.querySelectorAll(".archive-section").forEach(function (section) {
    const list = section.querySelector(".test-list");
    section.hidden = !list || list.children.length === 0;
  });

  document.getElementById("archiveEmpty").hidden = totalVisible !== 0;
}

/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const menuPanel = document.getElementById("menuPanel");
const menuIcon = document.getElementById("menuIcon");

const hamburgerSVG = `
  <path d="M4 7h16"></path>
  <path d="M4 12h16"></path>
  <path d="M4 17h16"></path>
`;

const closeSVG = `
  <path d="m6 6 12 12"></path>
  <path d="M18 6 6 18"></path>
`;

function closeMenu() {
  menuPanel.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  menuIcon.innerHTML = hamburgerSVG;
}

function openMenu() {
  menuPanel.classList.add("open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation menu");
  menuIcon.innerHTML = closeSVG;
}

menuToggle.addEventListener("click", function (event) {
  event.stopPropagation();

  if (menuPanel.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.addEventListener("click", function (event) {
  if (
    menuPanel.classList.contains("open") &&
    !menuPanel.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenu();
  }
});

menuPanel.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

/* SEARCH */

const searchOpen = document.getElementById("searchOpen");
const searchClose = document.getElementById("searchClose");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function openSearch() {
  closeMenu();

  searchOverlay.classList.add("open");
  searchOverlay.setAttribute("aria-hidden", "false");

  setTimeout(function () {
    searchInput.focus();
  }, 50);
}

function closeSearch() {
  searchOverlay.classList.remove("open");
  searchOverlay.setAttribute("aria-hidden", "true");
  searchInput.value = "";
  renderSearchResults("");
}

searchOpen.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);

searchOverlay.addEventListener("click", function (event) {
  if (event.target === searchOverlay) {
    closeSearch();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();

    if (searchOverlay.classList.contains("open")) {
      closeSearch();
    }
  }
});

function renderSearchResults(query) {
  const normalizedQuery = query.trim().toLowerCase();

  const results = mockTests.filter(function (test) {
    const searchableText = [
      test.title,
      test.publisher,
      test.date,
      test.questions + " questions",
      test.minutes + " minutes"
    ].join(" ").toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  searchResults.replaceChildren();

  if (results.length === 0) {
    const empty = document.createElement("div");
    empty.className = "search-empty";
    empty.textContent = normalizedQuery
      ? "No matching mock tests found."
      : "Search for a mock test or teacher.";

    searchResults.appendChild(empty);
    return;
  }

  results.forEach(function (test) {
    const result = document.createElement("a");

    result.className = "search-result";
    result.href = "mock-test.html?test=" + encodeURIComponent(test.id);

    result.innerHTML = `
      <div class="search-result-title">
        ${escapeHTML(test.title)}
      </div>

      <div class="search-result-meta">
        ${escapeHTML(test.publisher)}
        &nbsp;·&nbsp;
        ${Number(test.questions)} Questions
        &nbsp;·&nbsp;
        ${Number(test.minutes)} Minutes
      </div>
    `;

    searchResults.appendChild(result);
  });
}

searchInput.addEventListener("input", function () {
  renderSearchResults(searchInput.value);
});

/* INITIALIZE */

document.getElementById("currentYear").textContent =
  new Date().getFullYear();

renderTests();
