import useSWR from "swr";
import { fetcher } from "@/help/fetcher";

export function useGenres() {
    return useSWR(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, fetcher,{ refreshInterval: 0 })
}
