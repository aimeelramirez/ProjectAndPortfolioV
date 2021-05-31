export default interface Nav {
  key: number;
  msg: string;
  children: (add: AddFunction) => void;
}
type AddFunction = (props: any) => void;
