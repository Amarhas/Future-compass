let missionStepIndex = 0;

function getTranslationForCurrentActivity() {
  const activity = currentActivity ? currentActivity() : activities[week];
  if (!activity) return null;
  return activityScaffolds[activity.id] || null;
}

function getResearchLabel(tag) {
  return researchAnchors?.[tag]?.label || tag;
}

function getMissionSteps(data) {
  if (!data) return [];
  return [
    {
      key: 'mission',
      eyebrow: 'Step 1 of 7',
      title: '🎯 Mission',
      body: `<p>${esc(data.mission)}</p><p class="missionHint">Tiny goal: try it for 15–25 minutes. You are collecting clues, not trying to be perfect.</p>`
    },
    {
      key: 'why',
      eyebrow: 'Step 2 of 7',
      title: '🌟 Why this matters',
      body: `<p>${esc(data.whyThisMatters)}</p>`
    },
    {
      key: 'skills',
      eyebrow: 'Step 3 of 7',
      title: '🏅 What you are practicing',
      body: `<div class="skillChips">${data.skillsPracticed.map(skill => `<span class="skillChip">${skill.emoji} ${esc(skill.badge)} · ${esc(skill.behavior)}</span>`).join('')}</div><p class="missionHint">These are clues, not labels.</p>`
    },
    {
      key: 'start',
      eyebrow: 'Step 4 of 7',
      title: '🧭 Before you start',
      body: `<p>${esc(data.beforeYouStart)}</p><p class="missionHint">Starter nudge: Pick one guess before you build. You are not trying to be right. You are making a prediction to test.</p>`
    },
    {
      key: 'try',
      eyebrow: 'Step 5 of 7',
      title: '👐 Try it',
      body: `<p>Build, test, change one thing, and test again.</p><p class="missionHint">Starter nudge: Build a quick first version. A wobbly tower is useful because it gives you clues about what to change.</p><button class="soft wide missionJump" type="button" data-jump-target="steps">Show challenge steps</button>`
    },
    {
      key: 'notice',
      eyebrow: 'Step 6 of 7',
      title: '👀 Notice the clues',
      body: `<p>${esc(data.whatToNotice)}</p><p class="missionHint">Starter nudge: Look for where the tower failed first. Did the bottom slide, the middle bend, or the top tip over?</p><div class="missionProof"><strong>Proof you made:</strong><br>${esc(data.proofYouMade)}</div><div class="missionProof"><strong>If you get stuck:</strong><br>${esc(data.stuckHelp)}</div>`
    },
    {
      key: 'levelUp',
      eyebrow: 'Step 7 of 7',
      title: '🚀 Level-up or reflect',
      body: `<p>${esc(data.levelUp)}</p><p class="missionHint">When you are done, answer the reflection questions and save your clue.</p><button class="primary wide missionJump" type="button" data-jump-target="reflection">Go to reflection</button>`
    }
  ];
}

function setMissionStep(index) {
  const data = getTranslationForCurrentActivity();
  const steps = getMissionSteps(data);
  missionStepIndex = Math.max(0, Math.min(index, steps.length - 1));
  renderTranslationLayer();
}

function jumpToMissionTarget(target) {
  const map = {
    steps: document.getElementById('steps'),
    reflection: document.querySelector('.reflection'),
    start: document.querySelector('.moduleStart')
  };
  const el = map[target];
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderMissionDots(steps) {
  return steps.map((step, index) => `<button class="missionDot ${index === missionStepIndex ? 'active' : ''}" type="button" aria-label="Go to ${esc(step.title.replace(/^[^\w]+/, ''))}" data-mission-step="${index}"></button>`).join('');
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
  const steps = getMissionSteps(data);
  if (missionStepIndex >= steps.length) missionStepIndex = 0;
  const current = steps[missionStepIndex];
  if (!panel) {
    panel = document.createElement('section');
    panel.id = 'translationLayer';
    panel.className = 'translationLayer missionFlow';
    activityText.insertAdjacentElement('afterend', panel);
  }
  panel.className = 'translationLayer missionFlow';
  panel.innerHTML = `
    <div class="missionTopline">
      <div><div class="eyebrow">Focused mission flow</div><h3>${current.title}</h3></div>
      <span class="missionCounter">${current.eyebrow}</span>
    </div>
    <article class="missionCard" aria-live="polite">${current.body}</article>
    <div class="missionDots" aria-label="Mission steps">${renderMissionDots(steps)}</div>
    <div class="missionControls">
      <button class="soft" type="button" id="missionBack" ${missionStepIndex === 0 ? 'disabled' : ''}>Back</button>
      <button class="soft" type="button" id="missionSkip">Skip to Try It</button>
      <button class="primary" type="button" id="missionNext">${missionStepIndex === steps.length - 1 ? 'Ready to reflect' : 'Next'}</button>
    </div>
  `;
  panel.querySelector('#missionBack')?.addEventListener('click', () => setMissionStep(missionStepIndex - 1));
  panel.querySelector('#missionNext')?.addEventListener('click', () => {
    if (missionStepIndex === steps.length - 1) jumpToMissionTarget('reflection');
    else setMissionStep(missionStepIndex + 1);
  });
  panel.querySelector('#missionSkip')?.addEventListener('click', () => setMissionStep(4));
  panel.querySelectorAll('[data-mission-step]').forEach(btn => btn.addEventListener('click', () => setMissionStep(Number(btn.dataset.missionStep))));
  panel.querySelectorAll('[data-jump-target]').forEach(btn => btn.addEventListener('click', () => jumpToMissionTarget(btn.dataset.jumpTarget)));
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
      <div class="adultGuideBlock full"><h4>Research-backed why</h4><p>${esc(data.parentResearchNote)}</p><div class="researchTagRow">${data.researchTags.map(tag => `<span class="researchTag">${esc(getResearchLabel(tag))}</span>`).join('')}</div></div>
      <div class="adultGuideBlock"><h4>Evidence to look for</h4><ul class="evidenceList">${data.observableEvidence.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>
      <div class="adultGuideBlock"><h4>Do not overinterpret</h4><p>${esc(data.doNotOverinterpret)}</p></div>
      <div class="adultGuideBlock full"><h4>Possible next step</h4><p>${esc(data.nextStepRule)}</p></div>
    </div>
  `;
}

const originalRenderForTranslation = render;
render = function renderWithTranslationLayer() {
  originalRenderForTranslation();
  missionStepIndex = 0;
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
