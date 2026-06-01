'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "@/core/firebase/config"
import { Project } from '../types/Project';

export function PortfolioRepository() {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);

    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const fetched = querySnapshot.docs.map(doc => doc.data() as Project);
      setData(fetched);

      setLoading(false);
    }
   fetchData();

  }, []);

  return { data, loading };
}