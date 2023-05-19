export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[320px] text-center leading-relaxed">
        You don&apos;t have any memories registered yet,{' '}
        <a href="" className="underline hover:text-gray-50">
          start your timeline now
        </a>
        !
      </p>
    </div>
  )
}
