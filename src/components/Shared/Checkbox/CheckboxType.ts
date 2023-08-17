export interface ICheckboxProps {
  title?: string;
  name?: string;
  id?: string;
  pallet?: {
    checkboxBorder: string;
    checkboxCheckColor: string;
  };
  onChange: (id: string) => void;
  isChecked: boolean;
  ref?: React.RefObject<HTMLInputElement>;
}
export interface ICheckboxState {}
