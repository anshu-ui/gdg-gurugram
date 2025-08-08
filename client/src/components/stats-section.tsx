import { useEffect, useState } from "react";

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= targetValue) {
          clearInterval(interval);
          return targetValue;
        }
        return prev + Math.ceil(targetValue / 100);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <img src={icon} alt="" className="h-12 w-12" />
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">
        {count >= 1000 ? `${Math.floor(count / 1000)}K++` : `${count}++`}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiM0Mjg1RjQiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxMiIgeT0iMTIiPgo8cGF0aCBkPSJNMTYgN0M5LjM4IDcgNCA5LjM4IDQgMTJTOS4zOCAxNyAxNiAxN0MyMC4wMyAxNyAyMy41MSAxNC41MSAyMy44MSAxMC41QzIzLjkzIDkuNTcgMjMuMzcgOC42OSAyMi40OCA4LjI5TDE5IDYuNjVDMTcuOTYgNi4xNyAxNi45OCA2IDE2IDd6IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+"
            value="5000"
            label="Community Members"
          />
          <StatItem
            icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGRjAwMDAiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxMiIgeT0iMTIiPgo8cGF0aCBkPSJNMTkuMTUgOEM5Ljg5IDggMi41NCA5Ljc1IDIuNTQgMTJTOS44OSAxNiAxOS4xNSAxNkMyMC4yNyAxNiAyMS4yNyAxNS4xNiAyMS4yNyAxNC4xNFMxOS44NSAxMi4yOCAxOS4xNSAxMi4yOCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cjwvc3ZnPg=="
            value="1000"
            label="YouTube Subscribers"
          />
          <StatItem
            icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiMwMDc3QjUiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxMiIgeT0iMTIiPgo8cGF0aCBkPSJNMjAuMzcgOC45MUE4IDE4IDAgMDAyMC4zNyA4LjkxTDE5LjYyIDYuNDRBOCAxOCAwIDAwMTkuNjIgNi40NCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cjwvc3ZnPg=="
            value="2500"
            label="LinkedIn Followers"
          />
          <StatItem
            icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNFNDQwNUYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxMiIgeT0iMTIiPgo8cGF0aCBkPSJNMTIgMkMxMy4xIDIgMTQgMi45IDE0IDRIMTJDMTAUOSA0IDEwIDQuOSAxMCA2UzEwLjkgOCAxMiA4UzE0IDcuMSAxNCA2UzEzLjEgNCAxMiA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cjwvc3ZnPg=="
            value="8000"
            label="Instagram Followers"
          />
        </div>
      </div>
    </section>
  );
}
