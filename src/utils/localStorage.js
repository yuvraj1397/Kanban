export function saveViewState(state) {
    localStorage.setItem('kanbanViewState', JSON.stringify(state));
  }
  
  export function getSavedViewState() {
    const savedState = localStorage.getItem('kanbanViewState');
    return savedState ? JSON.parse(savedState) : null;
  }
  