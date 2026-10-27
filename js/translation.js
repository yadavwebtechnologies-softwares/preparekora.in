"use strict";

(function () {
  const STRINGS = {
    en: {
      /* Nav */
      navAbout: "About",
      navFindUs: "Find Us",

      /* Homepage */
      mockTestsHeading: "Mock Tests",
      mockTestsSub: "Explore mock tests and prepare for your next exam.",
      today: "Today",
      yesterday: "Yesterday",
      earlier: "Earlier",
      noMockTests: "No mock tests available.",
      searchPlaceholder: "Search tests or teachers...",
      searchHint: "Search for a mock test or teacher.",
      noMatches: "No matching mock tests found.",
      start: "Start",
      questionsUnit: "Questions",
      minutesUnit: "Minutes",

      /* Mock-test page */
      mockTestEyebrow: "Mock Test",
      questions: "Questions",
      minutes: "Minutes",
      marks: "Marks",
      rule1: "Each question carries 1 mark.",
      rule2: "There is no negative marking.",
      rule3: "The test is submitted automatically when the timer ends.",
      startTest: "Start Test",
      almostThere: "Almost there",
      enterDetails: "Enter your details",
      testLabel: "Test",
      yourName: "Your name",
      yourWhatsApp: "WhatsApp number (optional)",
      whatsAppHint: "Only used by the publisher if needed.",
      requiredField: "This field is required.",
      nameTooShort: "Name must be at least 2 characters.",
      nameTooLong: "Name is too long.",
      invalidWhatsApp: "Enter a valid WhatsApp number.",
      beginTest: "Begin test",
      back: "Back",
      questionOf: "Question {n} of {total}",
      markForReview: "Mark for review",
      unmarkReview: "Unmark review",
      clearResponse: "Clear response",
      previous: "Previous",
      next: "Next",
      submitTest: "Submit test",
      paletteBtn: "Questions",
      paletteTitle: "Questions",
      legendAnswered: "Answered",
      legendNotAnswered: "Not answered",
      legendMarked: "Marked",
      legendCurrent: "Current",
      statusAnswered: "Answered",
      statusNotAnswered: "Not answered",
      statusMarked: "Marked for review",
      statusNotVisited: "Not visited",
      confirmTitle: "Submit test?",
      confirmAnswered: "Answered",
      confirmUnanswered: "Unanswered",
      confirmMarked: "Marked",
      cancel: "Cancel",
      confirmYes: "Submit",
      timeUp: "Time is up. Your test has been submitted.",
      oneMinuteLeft: "One minute remaining.",
      resultEyebrow: "Result",
      correct: "Correct",
      wrong: "Wrong",
      unattempted: "Unattempted",
      timeTaken: "Time taken",
      download: "Download result",
      retake: "Retake",
      home: "Home",
      optionsLegend: "Answer options",
      scoreOf: "{a} of {b} correct",
      byLine: "By {name}",
      testNotFound: "Test not found",
      testNotFoundSub: "The test you are looking for does not exist or was removed.",
      backToHome: "Back to home",
      closeSearch: "Close search",

      /* Result PNG */
      resultPngTitle: "MOCK TEST RESULT",
      resultPngDate: "Date",
      resultPngName: "Name"
    },

    as: {
      /* Nav */
      navAbout: "আমাৰ বিষয়ে",
      navFindUs: "আমাক বিচাৰক",

      /* Homepage */
      mockTestsHeading: "মক টেষ্ট",
      mockTestsSub: "মক টেষ্ট চাওক আৰু পৰীক্ষাৰ বাবে প্ৰস্তুতি চলাওক।",
      today: "আজি",
      yesterday: "যোৱাকালি",
      earlier: "পূৰ্বে",
      noMockTests: "কোনো মক টেষ্ট উপলব্ধ নাই।",
      searchPlaceholder: "পৰীক্ষা বা শিক্ষক বিচাৰক...",
      searchHint: "মক টেষ্ট বা শিক্ষক বিচাৰক।",
      noMatches: "কোনো মিল থকা মক টেষ্ট পোৱা নগ'ল।",
      start: "আৰম্ভ",
      questionsUnit: "প্ৰশ্ন",
      minutesUnit: "মিনিট",

      /* Mock-test page */
      mockTestEyebrow: "মক টেষ্ট",
      questions: "প্ৰশ্ন",
      minutes: "মিনিট",
      marks: "নম্বৰ",
      rule1: "প্ৰতিটো প্ৰশ্নৰ বাবে ১ নম্বৰ।",
      rule2: "ঋণাত্মক নম্বৰ কটা নহয়।",
      rule3: "সময় শেষ হ'লে পৰীক্ষা স্বয়ংক্ৰিয়ভাৱে জমা হ'ব।",
      startTest: "পৰীক্ষা আৰম্ভ কৰক",
      almostThere: "প্ৰায় সম্পূৰ্ণ",
      enterDetails: "আপোনাৰ তথ্য দিয়ক",
      testLabel: "পৰীক্ষা",
      yourName: "আপোনাৰ নাম",
      yourWhatsApp: "হোৱাটছএপ নম্বৰ (ঐচ্ছিক)",
      whatsAppHint: "প্ৰয়োজন হ'লে প্ৰকাশকে ব্যৱহাৰ কৰিব পাৰে।",
      requiredField: "এই ক্ষেত্ৰখন পূৰণ কৰাটো আৱশ্যক।",
      nameTooShort: "নাম কমেও ২ আখৰৰ হ'ব লাগিব।",
      nameTooLong: "নাম অতি দীঘল।",
      invalidWhatsApp: "বৈধ হোৱাটছএপ নম্বৰ দিয়ক।",
      beginTest: "পৰীক্ষা আৰম্ভ কৰক",
      back: "পিছলৈ",
      questionOf: "প্ৰশ্ন {n} / {total}",
      markForReview: "পৰ্যালোচনাৰ বাবে চিহ্নিত কৰক",
      unmarkReview: "চিহ্ন আঁতৰাওক",
      clearResponse: "উত্তৰ মচক",
      previous: "পূৰ্বৱৰ্তী",
      next: "পৰৱৰ্তী",
      submitTest: "পৰীক্ষা জমা দিয়ক",
      paletteBtn: "প্ৰশ্ন",
      paletteTitle: "প্ৰশ্নসমূহ",
      legendAnswered: "উত্তৰ দিয়া",
      legendNotAnswered: "উত্তৰ নিদিয়া",
      legendMarked: "চিহ্নিত",
      legendCurrent: "বৰ্তমান",
      statusAnswered: "উত্তৰ দিয়া হৈছে",
      statusNotAnswered: "উত্তৰ দিয়া নাই",
      statusMarked: "পৰ্যালোচনাৰ বাবে চিহ্নিত",
      statusNotVisited: "পৰিদৰ্শন কৰা নাই",
      confirmTitle: "পৰীক্ষা জমা দিবনে?",
      confirmAnswered: "উত্তৰ দিয়া",
      confirmUnanswered: "উত্তৰ নিদিয়া",
      confirmMarked: "চিহ্নিত",
      cancel: "বাতিল",
      confirmYes: "জমা দিয়ক",
      timeUp: "সময় শেষ। আপোনাৰ পৰীক্ষা জমা কৰা হৈছে।",
      oneMinuteLeft: "এক মিনিট বাকী আছে।",
      resultEyebrow: "ফলাফল",
      correct: "শুদ্ধ",
      wrong: "ভুল",
      unattempted: "উত্তৰ নিদিয়া",
      timeTaken: "লগা সময়",
      download: "ফলাফল ডাউনলোড কৰক",
      retake: "পুনৰ চেষ্টা",
      home: "মুখ্য পৃষ্ঠা",
      optionsLegend: "উত্তৰৰ বিকল্পসমূহ",
      scoreOf: "{a} / {b} শুদ্ধ",
      byLine: "{name}ৰ দ্বাৰা",
      testNotFound: "পৰীক্ষা পোৱা নগ'ল",
      testNotFoundSub: "আপুনি বিচৰা পৰীক্ষাটো নাই বা আঁতৰোৱা হৈছে।",
      backToHome: "মুখ্য পৃষ্ঠালৈ ঘূৰি যাওক",
      closeSearch: "সন্ধান বন্ধ কৰক",

      /* Result PNG */
      resultPngTitle: "মক টেষ্টৰ ফলাফল",
      resultPngDate: "তাৰিখ",
      resultPngName: "নাম"
    }
  };

  function readSaved() {
    try {
      const saved = localStorage.getItem("pk_lang");
      if (saved === "as" || saved === "en") return saved;
    } catch (e) { /* ignore */ }
    return "en";
  }

  const PK = {
    lang: readSaved(),

    t: function (key, vars) {
      const pack = STRINGS[this.lang] || STRINGS.en;
      let text = pack[key] !== undefined ? pack[key] : (STRINGS.en[key] || key);
      if (vars) {
        Object.keys(vars).forEach(function (name) {
          text = text.split("{" + name + "}").join(vars[name]);
        });
      }
      return text;
    },

    L: function (pair) {
      if (pair === null || pair === undefined) return "";
      if (typeof pair === "string") return pair;
      return pair[this.lang] !== undefined ? pair[this.lang] : (pair.en || "");
    },

    setLang: function (newLang) {
      if (newLang !== "en" && newLang !== "as") return;
      if (newLang === this.lang) return;
      this.lang = newLang;
      try { localStorage.setItem("pk_lang", newLang); } catch (e) { /* ignore */ }
      applyAll();
      document.dispatchEvent(new CustomEvent("pk:langchange", { detail: { lang: newLang } }));
    }
  };

  window.PK = PK;

  function applyAll() {
    document.documentElement.lang = PK.lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = PK.t(el.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", PK.t(el.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      el.setAttribute("aria-label", PK.t(el.dataset.i18nAriaLabel));
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const active = btn.dataset.lang === PK.lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  document.addEventListener("click", function (event) {
    const btn = event.target.closest(".lang-btn");
    if (!btn) return;
    const next = btn.dataset.lang;
    if (next) PK.setLang(next);
  });

  document.addEventListener("DOMContentLoaded", applyAll);
  if (document.readyState !== "loading") applyAll();
})();
