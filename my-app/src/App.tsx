import React, { useState, useEffect } from 'react';
import { getArticles } from './api/articles';
import { Layout } from './components/Layout';
import { ArticleModal } from './components/Modal';
import { CreateArticleForm } from './components/NewArticle';
import type { Article } from './types';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      const data = await getArticles();
      setArticles(data);
      setError(null);
    } catch (err) {
      setError('Impossible de charger les articles');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Layout onNewArticle={() => setIsCreating(true)}>

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {isCreating && (
        <CreateArticleForm
          onArticleCreated={fetchArticles}
          onClose={() => setIsCreating(false)}
        />
      )}
    </Layout>
  );
}

export default App;