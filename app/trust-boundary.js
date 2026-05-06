function addTrustBoundaryNote(target, id, message) {
  if (!target || document.getElementById(id)) return;
  const note = document.createElement('p');
  note.id = id;
  note.className = 'small trustNote';
  note.textContent = message;
  target.insertAdjacentElement('afterend', note);
}

function installTrustBoundaryHints() {
  const profileSelect = document.getElementById('profileSelect');
  addTrustBoundaryNote(
    profileSelect,
    'profilePrivacyNote',
    'Privacy tip: use a nickname. Avoid full names, school names, addresses, emails, phone numbers, or personal details.'
  );

  const favorite = document.getElementById('favorite');
  if (favorite) {
    favorite.placeholder = 'Example: I liked testing the tower. Do not include full names, school names, addresses, contact details, or private information.';
    addTrustBoundaryNote(
      favorite,
      'reflectionPrivacyNote',
      'Privacy tip: keep reflections simple. Do not include private details like full names, school names, addresses, contact information, medical information, or location details.'
    );
  }

  const exportBtn = document.getElementById('exportBtn');
  addTrustBoundaryNote(
    exportBtn,
    'backupPrivacyNote',
    'Backup files may include local progress, profile nicknames, reflections, timestamps, and badge evidence. Only share backups with someone you trust.'
  );
}

function installTrustBoundaryActions() {
  const addProfileBtn = document.getElementById('addProfileBtn');
  if (addProfileBtn && typeof addProfile === 'function') {
    addProfileBtn.onclick = () => {
      const ok = confirm('Use a nickname only. Avoid full names, school names, addresses, emails, phone numbers, or personal details. Continue?');
      if (ok) addProfile();
    };
  }

  const guardedExport = () => {
    const ok = confirm('This backup may include local progress, reflections, timestamps, and badge evidence. Only share it with someone you trust. Export backup?');
    if (ok && typeof exportBackup === 'function') exportBackup();
  };

  const exportBtn = document.getElementById('exportBtn');
  const jsonBtn = document.getElementById('jsonBtn');
  if (exportBtn) exportBtn.onclick = guardedExport;
  if (jsonBtn) jsonBtn.onclick = guardedExport;
}

installTrustBoundaryHints();
installTrustBoundaryActions();
