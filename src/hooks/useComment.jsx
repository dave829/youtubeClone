import React from "react";
import { getCommentText, setCommentText } from "../api/firebase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useComment = () => {
  const queryClient = useQueryClient();

  //Get
  const getComment = useQuery({
    queryKey: ["CommentText"],
    queryFn: (text) => getCommentText(text),
  });

  //ADD
  const setComment = useMutation({
    mutationFn: (text) => setCommentText(text),
    onSuccess: () => queryClient.invalidateQueries(["CommentText"]), //동일한 캐시 키
  });

  return { setComment, getComment };
};
