export async function auth() {
  await new Promise(r => setTimeout(r, 1000));
  localStorage.setItem('login', 'true'); 
  return true;
}

export async function unAuth() {
  await new Promise(r => setTimeout(r, 1000)); 
  localStorage.setItem('login', 'false');  
  return true;
}
