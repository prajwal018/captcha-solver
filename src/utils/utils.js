// utils.js
export const getSessionId = () => {
  let sessionId = localStorage.getItem('SESSION_ID');
  if (!sessionId) {
    sessionId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('SESSION_ID', sessionId);
  }
  return sessionId;
};
