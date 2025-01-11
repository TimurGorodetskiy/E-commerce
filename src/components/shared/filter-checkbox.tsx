interface Props {
  className?: string;
  text: string;
  value: string;
}

export const FilterCheckbox: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
