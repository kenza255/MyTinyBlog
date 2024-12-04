import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getArticles } from './api/articles';
import { Layout } from './components/Layout';
import { ArticleModal } from './components/Modal';
import { NewArticle } from './components/NewArticle';
import { ArticleCard } from './components/artCard';
import type { Article } from './types';
import ContactPage from '../src/pages/contact'; // Import de la page Contact

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

  const handleArticleCreated = async () => {
    await fetchArticles();
    setIsCreating(false);
  };

  return (
    <Router>
      <Routes>
        {/* Route vers la page d'accueil (articles) */}
        <Route
          path="/"
          element={
            <Layout onNewArticle={() => setIsCreating(true)}>
              {selectedArticle && (
                <ArticleModal
                  article={selectedArticle}
                  onClose={() => setSelectedArticle(null)}
                />
              )}

              {isCreating && (
                <NewArticle
                  onArticleCreated={handleArticleCreated}
                  onClose={() => setIsCreating(false)}
                />
              )}

              {isLoading && <p>Loading...</p>}
              {error && <p>{error}</p>}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.title}
                    article={article}
                    onClick={() => setSelectedArticle(article)}
                  />
                ))}
              </div>
            </Layout>
          }
        />

        {/* Route vers la page de contact */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
