import React from 'react';
import NoteDetails from './NoteDetails.client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from "@/lib/api";

interface NoteDetailsPageProps {
  params: {
    id: string;
  };
}

const NoteDetail = async ({ params }: NoteDetailsPageProps) => { 
  const queryClient = new QueryClient();
  const {id} = await params;
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: ()=> fetchNoteById(id),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetails />
    </HydrationBoundary>
  )
};

export default NoteDetail; 