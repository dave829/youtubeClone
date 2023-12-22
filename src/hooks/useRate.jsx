import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRate, setRate } from "../api/firebase";

export default function useRate() {
  const queryClient = useQueryClient();

  //Get
  const rateQuery = useQuery({
    queryKey: ["rate"],
    queryFn: (like) => getRate(like),
  });

  //ADD
  const addRate = useMutation({
    mutationFn: (like) => setRate(like), //데이터 업데이트
    onSuccess: () => queryClient.invalidateQueries(["rate/like"]), //동일한 캐시 키
  });

  // return
  return { addRate, rateQuery };
}
