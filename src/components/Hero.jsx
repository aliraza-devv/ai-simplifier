import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='Logo' className='w-28 object-contain' />
        <button 
          type='button' 
          onClick={() => window.open('https://github.com/aliraza-devv/ai-simplifier')}
          className='black_btn'
        >
        Github
        </button>
      </nav>
      <h1 className='head_text'>
        Simplify Article with<br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with AI-Simpli, an open-source article summarizer <br />
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero