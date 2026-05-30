'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "@/core/dbconfig/connection"
import { ExperienceItem } from '../types/Experience';

export function experiences_repository() {
  const [data, setData] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

   setLoading(true);

   async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "experiences"));
      const fetched = querySnapshot.docs.map(doc => doc.data() as ExperienceItem);
      setData(fetched);

      setLoading(false);
   }
   fetchData();

  }, []);

  return { data, loading };
}