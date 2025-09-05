const BinaryTitle = ({ word }) => {
  const binaryWord = word
    .split('')
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');

  return (
    <div className="flex justify-center">
      <div className="max-w-2xl border-x border-gray-200 mx-auto py-6 w-full">
        <div className="text-center font-mono text-xs text-muted-foreground">
          {binaryWord}
        </div>
      </div>
    </div>
  );
};
export default BinaryTitle;
