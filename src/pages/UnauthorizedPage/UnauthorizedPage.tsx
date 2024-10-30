export default function UnauthorizedPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center ">
      <h1 className="lg:text-8xl text-rose-600">401</h1>
      <h1 className="lg:text-2xl capitalize italic text-rose-600">
        Unauthorized Access attempt.
      </h1>
      <p>Personal data policy.</p>
    </div>
  );
}
