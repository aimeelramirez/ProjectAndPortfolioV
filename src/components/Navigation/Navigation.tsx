import "./interface";
//getting interface for function typing on props
export default function Navigation(props: any): any {
  return <div onClick={props.add}>{props.children}</div>;
}
