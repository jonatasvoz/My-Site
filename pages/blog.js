import React from 'react';

export default function Blog() {
    const posts = [
      { id: 1, title: "Post 1", description: "Esse é o primeiro post do meu blog.", date: "01/06/2024" },
      { id: 2, title: "Post 2", description: "Outro conteúdo interessante para os visitantes.", date: "02/06/2024" },
    ];
  
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <div className="text-gray-600">{post.description}</div>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  