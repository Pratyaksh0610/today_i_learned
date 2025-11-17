import WrapperComponent from "@/components/WrapperComponent/WrapperComponent";
import styles from "./page.module.css";
import GreetComponent from "@/components/GreetComponent/GreetComponent";

export default function Home() {
  const WrappedGreet = WrapperComponent(GreetComponent);
  return (
    <div className={styles.page}>
      <WrappedGreet message="World" />
      {/* <h1>Hello</h1> */}
    </div>
  );
}
