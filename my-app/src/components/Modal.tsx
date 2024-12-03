import React from 'react';
import { X } from 'lucide-react';
import { format } from 'date-fns';
import type { Article } from '../types';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold">{article.title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="mb-6 text-sm text-gray-500">
            <span>By {article.author}</span>
            <span className="mx-2">•</span>
            <span>{format(new Date(article.created_at), 'MMMM d, yyyy')}</span>
          </div>
          <div className="prose max-w-none">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}