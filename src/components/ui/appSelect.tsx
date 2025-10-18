import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

interface AppsSelectProps {
  options: { label: string; value: string }[];
  selected?: string;
  onChange?: (value: string) => void;
  label: string;
  placeholder: string;
}

function AppSelect({ options, label, placeholder, selected, onChange }: AppsSelectProps) {
  return (
    <Select value={selected} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((item) => {
            return (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AppSelect;
