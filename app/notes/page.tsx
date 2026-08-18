import React from "react";
import Notes from "./Notes.client";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNotes } from "@/lib/api";

const NotesPage = async () => { 
  const queryClient = new QueryClient();
  const search = '';
  const page = 1;
  // const perPage = 12;
  await queryClient.prefetchQuery({
    queryKey: ["notes", search, page],
    queryFn: ()=> fetchNotes({ page, search }),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes />
    </HydrationBoundary>
  )
};

export default NotesPage; 