import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />
      <Container className='pb-14'>
        <div className='flex fap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex flex-col gap-16'>Список пицц</div>
        </div>
      </Container>
    </>
  );
}
