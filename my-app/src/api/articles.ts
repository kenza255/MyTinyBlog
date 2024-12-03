const API_URL = 'http://localhost:3000/api';

export async function getArticles() {
  const response = await fetch(`${API_URL}/articles`);
  if (!response.ok) throw new Error('Erreur lors du chargement des articles');
  return response.json();
}

export async function getArticle(id: number) {
  const response = await fetch(`${API_URL}/articles/${id}`);
  if (!response.ok) throw new Error('Erreur lors du chargement');
  return response.json();
}

export async function createArticle(article: { title: string; content: string; author: string }) {
  const response = await fetch(`${API_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
  if (!response.ok) throw new Error('Erreur lors de la création du nouvel article');
  return response.json();
}