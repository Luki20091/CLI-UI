export async function fakeAuth() {
  await new Promise(r => setTimeout(r, 500));
  return true;
}
