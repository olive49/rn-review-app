import { useState, useCallback } from "react";

interface UseFormProps {
  title: string;
  content: string;
  rating: number;
  handleTitleChange: (updatedTitle: string) => void;
  handleContentChange: (updatedContent: string) => void;
  handleRatingChange: (updatedRating: number) => void;
  resetForm: () => void;
  validateForm: () => boolean;
}

const useForm = (): UseFormProps => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const handleTitleChange = useCallback((updatedTitle: string): void => {
    setTitle(updatedTitle);
  }, []);

  const handleContentChange = useCallback((updatedContent: string): void => {
    setContent(updatedContent);
  }, []);

  const handleRatingChange = useCallback((updatedRating: number): void => {
    setRating(updatedRating);
  }, []);

  const validateForm = (): boolean => {
    if (!title || !content || !rating) {
      return false;
    }
    return true;
  };

  const resetForm = (): void => {
    setTitle("");
    setContent("");
    setRating(0);
  };

  return {
    title,
    content,
    rating,
    handleTitleChange,
    handleContentChange,
    handleRatingChange,
    resetForm,
    validateForm,
  };
};

export default useForm;
