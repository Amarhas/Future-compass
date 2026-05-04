const translationLayer = {
  'build-paper-tower': {
    mission: 'Build a paper tower that can stand on its own for 10 seconds.',
    whyThisMatters: 'People who design bridges, furniture, game levels, buildings, and apps often start with a rough version, test it, and improve it. This challenge helps you practice testing ideas instead of trying to be perfect on the first try.',
    realWorldConnection: 'This kind of thinking shows up in engineering, construction, product design, game design, robotics, architecture, and software development.',
    skillsPracticed: [
      { badge: 'Builder', emoji: '🧱', behavior: 'making a real structure' },
      { badge: 'Fixer', emoji: '🛠️', behavior: 'improving after a test' },
      { badge: 'Investigator', emoji: '🔎', behavior: 'noticing what changed and why' }
    ],
    beforeYouStart: 'What do you think will help more: a wide base, a tall shape, or stronger corners?',
    whatToNotice: 'Did the tower fall because of height, balance, weak paper, or the base?',
    proofYouMade: 'A tower plus one design change after testing.',
    stuckHelp: 'Try changing only one thing. Make the bottom wider, fold the paper, or use less tape.',
    levelUp: 'After your tower stands, try to make it taller without using more paper.',
    childReflectionPrompt: 'What did you change after the first test?',
    parentSummary: 'This is not just a paper tower. It is a small design-and-test challenge. Your child is practicing how to make a first attempt, test it, notice what happened, and improve it.',
    parentResearchNote: 'This activity uses ideas supported by research on metacognition, project-based learning, and career self-efficacy. In plain language: children benefit when they plan, try, check, improve, and can explain what changed. Hands-on projects also create visible evidence of skills instead of relying only on interest surveys.',
    observableEvidence: [
      'Did they test the tower?',
      'Did they change one thing after it failed or wobbled?',
      'Could they explain why the second version worked better or worse?',
      'Did they stay with the task when it did not work the first time?'
    ],
    doNotOverinterpret: 'A falling tower does not mean they are bad at building. The useful evidence is whether they tested, adjusted, noticed patterns, or enjoyed improving the design.',
    nextStepRule: 'If they liked improving the tower, try another Builder/Fixer challenge. If they mostly liked figuring out why it fell, try an Investigator challenge.',
    researchTags: ['Metacognition', 'Project-based learning', 'Career confidence', 'Observable evidence']
  }
};

function getTranslationForCurrentActivity() {
  const activity = currentActivity ? currentActivity() : activities[week];
  if (!activity) return null;
  return translationLayer[activity.id] || null;
}

function renderTranslationLayer() {
  const activityText = document.getElementById('text');
  if (!activityText) return;
  let panel = document.getElementById('translationLayer');
  const data = getTranslationForCurrentActivity();
  if (!data) {
    if (panel) panel.remove();
    return;
  }
  if (!panel) {
    panel = document.createElement('section');
    panel.id = 'translationLayer';
    panel.className = 'translationLayer';
    activityText.insertAdjacentElement('afterend', panel);
  }
  panel.innerHTML = `
    <div class="eyebrow">Why this challenge matters</div>
    <h3>Mission: ${esc(data.mission)}</h3>
    <div class="translationGrid">
      <div class="translationBlock full"><h4>🌟 Why this matters</h4><p>${esc(data.whyThisMatters)}</p></div>
      <div class="translationBlock full"><h4>🌎 Where this shows up</h4><p>${esc(data.realWorldConnection)}</p></div>
      <div class="translationBlock full"><h4>🏅 You are practicing</h4><div class="skillChips">${data.skillsPracticed.map(skill => `<span class="skillChip">${skill.emoji} ${esc(skill.badge)} · ${esc(skill.behavior)}</span>`).join('')}</div></div>
      <div class="translationBlock"><h4>🧠 Before you start</h4><p>${esc(data.beforeYouStart)}</p></div>
      <div class="translationBlock"><h4>👀 What to notice</h4><p>${esc(data.whatToNotice)}</p></div>
      <div class="translationBlock"><h4>📌 Proof you made</h4><p>${esc(data.proofYouMade)}</p></div>
      <div class="translationBlock"><h4>🛟 If you get stuck</h4><p>${esc(data.stuckHelp)}</p></div>
      <div class="translationBlock full"><h4>🚀 Level-up option</h4><p>${esc(data.levelUp)}</p></div>
    </div>
  `;
}

function renderAdultGuide() {
  const adult = document.getElementById('adult');
  if (!adult) return;
  let guide = document.getElementById('adultGuide');
  const data = getTranslationForCurrentActivity();
  if (!data) {
    if (guide) guide.remove();
    return;
  }
  const anchor = document.getElementById('adultStats');
  if (!guide) {
    guide = document.createElement('section');
    guide.id = 'adultGuide';
    guide.className = 'adultGuide';
    anchor.insertAdjacentElement('afterend', guide);
  }
  guide.innerHTML = `
    <div class="eyebrow">Grown-up coaching note</div>
    <h3>What this activity is really working on</h3>
    <div class="adultGuideGrid">
      <div class="adultGuideBlock full"><h4>Plain-English summary</h4><p>${esc(data.parentSummary)}</p></div>
      <div class="adultGuideBlock full"><h4>Research-backed why</h4><p>${esc(data.parentResearchNote)}</p><div class="researchTagRow">${data.researchTags.map(tag => `<span class="researchTag">${esc(tag)}</span>`).join('')}</div></div>
      <div class="adultGuideBlock"><h4>Evidence to look for</h4><ul class="evidenceList">${data.observableEvidence.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>
      <div class="adultGuideBlock"><h4>Do not overinterpret</h4><p>${esc(data.doNotOverinterpret)}</p></div>
      <div class="adultGuideBlock full"><h4>Possible next step</h4><p>${esc(data.nextStepRule)}</p></div>
    </div>
  `;
}

const originalRenderForTranslation = render;
render = function renderWithTranslationLayer() {
  originalRenderForTranslation();
  renderTranslationLayer();
  renderAdultGuide();
};

const originalRenderAllForTranslation = renderAll;
renderAll = function renderAllWithTranslationLayer() {
  originalRenderAllForTranslation();
  renderTranslationLayer();
  renderAdultGuide();
};

renderTranslationLayer();
renderAdultGuide();
