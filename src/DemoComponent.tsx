import useBearStore from "@/store";

const Controls = () => {
  const increase = useBearStore((state) => state.increase);
  return <button onClick={() => increase(1)}>one up</button>;
};

const DemoComponent = () => {
  const bears = useBearStore((state) => state.bears);

  return (
    <div className="flex row gap-4">
      <h1>{bears} around here...</h1>
      <Controls />
    </div>
  );
};

export default DemoComponent;
