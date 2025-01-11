import { Title, FilterCheckbox } from './index';

interface Props {
  className: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title size='sm' className='mb-5 font-bold' text='Фильтрация' />
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>
    </div>
  );
};
