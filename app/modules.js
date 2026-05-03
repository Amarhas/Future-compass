const moduleText = {
  showMe: {
    label: '👀 Show Me',
    title: 'A quick picture in your mind',
    build(activity) {
      return `Imagine the finished challenge first. For <strong>${esc(activity.title)}</strong>, look for shapes, patterns, or examples that make the task easier to understand before you begin.`;
    }
  },
  tellMe: {
    label: '🎧 Tell Me',
    title: 'A short explanation',
    build(activity) {
      return `In this challenge, you are practicing <strong>${esc(activity.badges.join(', '))}</strong>. The goal is not to get the perfect answer. The goal is to try, notice what happened, and learn one clue about yourself.`;
    }
  },
  tryIt: {
    label: '👐 Let Me Try',
    title: 'Start with your hands',
    build(activity) {
      return `Skip the long explanation. Gather what you need: <strong>${esc(activity.materials)}</strong>. Start the first step now and adjust as you go.`;
    }
  },
  talkMeThrough: {
    label: '💬 Talk Me Through',
    title: 'Use guiding questions',
    build(activity) {
      return `<ul><li>What is the first tiny thing you can do?</li><li>What might be confusing or hard?</li><li>What could you change if your first idea does not work?</li><li>What would you tell someone else about this challenge?</li></ul>`;
    }
  },
  surpriseMe: {
    label: '🎲 Surprise Me',
    title: 'Try a twist',
    build(activity) {
      const twists = {
        Build: 'Try using only 3 pieces of paper first. Then improve it.',
        Money: 'Pretend one thing costs more than expected. What changes?',
        Help: 'Try helping quietly without being asked, then notice what changed.',
        Explain: 'Explain it with no more than 3 steps.',
        Investigate: 'Find one surprising clue and one question you still have.',
        Organize: 'Make the checklist shorter, not longer.',
        Fix: 'Pick the weirdest possible fix, then the most practical fix.',
        Create: 'Make a tiny first version in 5 minutes.',
        Team: 'Let the other person choose the first role.',
        Sell: 'Explain the product to a kid, then to a grown-up.',
        Observe: 'Look for something moving, changing, or repeating.',
        Review: 'Pick your favorite by feeling, not by what sounds impressive.'
      };
      return twists[activity.theme] || 'Try the smallest version of this challenge first, then improve one thing.';
    }
  }
};

let activeModuleMode = 'showMe';

function renderModuleContent(mode = activeModuleMode) {
  const activity = activities[week];
  const module = moduleText[mode] || moduleText.showMe;
  activeModuleMode = mode;
  document.querySelectorAll('.moduleBtn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  const content = document.getElementById('moduleContent');
  if (!content || !activity) return;
  content.innerHTML = `<strong>${module.title}</strong><div>${module.build(activity)}</div>`;
}

function bindModuleButtons() {
  document.querySelectorAll('.moduleBtn').forEach(btn => {
    btn.addEventListener('click', () => renderModuleContent(btn.dataset.mode));
  });
}

const originalRender = render;
render = function patchedRender() {
  originalRender();
  renderModuleContent(activeModuleMode);
};

bindModuleButtons();
renderModuleContent();
