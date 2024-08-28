'use client';
import { ProgressSpinner } from 'primereact/progressspinner';
export default function Loading() {
  return (
    <div className="card justify-content-center mt-20 flex min-h-[calc(100vh_-_25.875rem)]">
      <ProgressSpinner />
    </div>
  );
}
