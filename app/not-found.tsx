import Image from 'next/image';
const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={'/not-found.png'}
        alt="not found page"
        width={200}
        height={200}
      />
      <div className="flex justify-center items-center mt-5 ">
        <h1 className="text-4xl font-extrabold ml-3 ">404 - Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;

// import { redirect } from 'next/navigation';
// export default function NotFoundPage() {
//   redirect('/');
// }
