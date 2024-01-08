export interface InputProps {
  label?: string;
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
