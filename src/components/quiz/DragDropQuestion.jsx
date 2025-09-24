
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { audioManager } from '@/lib/audio';

const DragDropQuestion = ({ question, onAnswerSelect, isAnswerSubmitted }) => {
  const [draggedItems, setDraggedItems] = useState({});

  useEffect(() => {
    // Quando todos os itens forem arrastados, verifica a resposta
    if (Object.keys(draggedItems).length === question.items.length) {
      const isCorrect = question.items.every(
        (item) => draggedItems[item.text] === item.category
      );
      // A resposta correta para drag-and-drop é sempre o índice 0
      onAnswerSelect(isCorrect ? 0 : 1); 
    }
  }, [draggedItems, question, onAnswerSelect]);

  const handleDrop = (item, category) => {
    if (isAnswerSubmitted || draggedItems[item.text]) return;

    audioManager.playSound('click');
    setDraggedItems((prev) => ({
      ...prev,
      [item.text]: category,
    }));
  };

  const getCategoryBgColor = (category) => {
    if (!isAnswerSubmitted) return 'bg-gray-50';
    
    const allInCategoryCorrect = Object.entries(draggedItems)
      .filter(([_, cat]) => cat === category)
      .every(([text, _]) => {
        const originalItem = question.items.find(i => i.text === text);
        return originalItem && originalItem.category === category;
      });

    return allInCategoryCorrect ? 'bg-green-100' : 'bg-red-100';
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Itens para arrastar */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg">Itens:</h4>
          {question.items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-3 rounded-lg border-2 cursor-move transition-all ${
                draggedItems[item.text]
                  ? 'bg-gray-100 border-gray-300 opacity-50 cursor-not-allowed'
                  : 'bg-white border-primary-green hover:shadow-md'
              }`}
              draggable={!isAnswerSubmitted && !draggedItems[item.text]}
              onDragStart={(e) => e.dataTransfer.setData('text/plain', JSON.stringify(item))}
            >
              {item.text}
            </motion.div>
          ))}
        </div>

        {/* Categorias */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Categorias:</h4>
          {[...new Set(question.items.map((item) => item.category))].map((category) => (
            <div
              key={category}
              className={`min-h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-lg transition-colors ${getCategoryBgColor(category)}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const item = JSON.parse(e.dataTransfer.getData('text/plain'));
                handleDrop(item, category);
              }}
            >
              <h5 className="font-medium mb-2">{category}</h5>
              <div className="space-y-2">
                {Object.entries(draggedItems)
                  .filter(([_, cat]) => cat === category)
                  .map(([text, _]) => (
                    <div key={text} className="p-2 bg-white rounded border text-sm">
                      {text}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragDropQuestion;
