import React from 'react';
import { format } from 'date-fns';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">
        {article.content.substring(0, 150)}...
      </p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {article.author}</span>
        <span>{format(new Date(article.created_at), 'MMM d, yyyy')}</span>
      </div>
    </div>
  );
}