export async function fakeAuth() {
  await new Promise(r => setTimeout(r, 1000)); // symulacja opóźnienia (np. zapytania do backendu)
  localStorage.setItem('login', 'true');     // ustawienie login = true w localStorage
  return true;
}
