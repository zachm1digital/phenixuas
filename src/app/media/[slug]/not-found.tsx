import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="py-14 text-center font-secondary text-3xl">
        <div>Page not found.</div>
        <div>
          <Link
            href="/media"
            className="mb-4 block font-primary text-[0.9375rem] font-bold text-phenix-gray001 
                        hover:text-phenix-primary md:px-9"
          >
            BACK TO ALL
          </Link>
        </div>
      </div>
    </>
  );
}
