import { API_IP } from "@/API_CONFIG";
import { Campsite } from "@/types/types";
import { useCallback, useEffect, useState } from "react";

export default function useCampsites() {
  const [campsites, setCampsites] = useState<Campsite[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCampsites = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://${API_IP}/campsite`);
      if (response.ok) {
        const data = await response.json();
        setCampsites(data);
      }
    } catch (err) {
      console.error("Failed to fetch campsites.", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCampsites();
  }, [fetchCampsites])

  return { campsites, loading, refetch: fetchCampsites };
}