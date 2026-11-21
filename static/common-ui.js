/* Shared shell: non-blocking status indicator on every dashboard view. */
document.addEventListener('DOMContentLoaded', async () => {
  const status = document.getElementById('healthStatus');
  try {
    const response = await fetch('/capabilities', { signal: AbortSignal.timeout(6500) });
    if (!response.ok) throw new Error('unavailable');
    if (status) status.textContent = 'SYSTEM ACTIVE';
  } catch (error) {
    if (status) { status.textContent = 'SERVER OFFLINE'; status.parentElement.classList.add('offline'); }
  }
});
