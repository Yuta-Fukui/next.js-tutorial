import Hero from './;HeroDetails';

export const metadata = {
	title: "俺のヒーロー紹介",
};

const MemoDetail = ({params}:{params: {id: string}}) => {

  return (
    <main>
        <Hero id={params.id}/>
    </main>
  );
};

export default MemoDetail;