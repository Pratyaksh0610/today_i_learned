export default function WrapperComponent(Component: React.ComponentType<any>) {
  return (props: any) => (
    <>
      <h1>INSIDE Wrapper :</h1>
      <Component {...props} />
    </>
  );
}
