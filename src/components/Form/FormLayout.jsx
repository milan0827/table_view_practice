function FormLayout({ children }) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div
        className="flex w-[40%] flex-col items-center justify-center gap-10  
      rounded-md bg-stone-200 p-6 shadow-lg shadow-stone-400"
      >
        {children}
      </div>
    </div>
  );
}

export default FormLayout;
