export async function fakeAuth() {
  await new Promise(r => setTimeout(r, 1000));
  localStorage.setItem('login', 'true'); 
  return true;
}

export async function fakeUnAuth() {
  await new Promise(r => setTimeout(r, 1000)); 
  localStorage.setItem('login', 'false');  
  return true;
}
