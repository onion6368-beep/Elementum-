import './hero.css'
import vectorLine from '../assets/Vector 5.png'
import pill from '../assets/Ellipse 736.png'

function Hero() {
  return (
    <section className="hero">
      <h1>
        The thinkers and <br/>doers were cha<span className='highlight-pink'>nging</span><br />the{' '}
        <span className="highlight-green">status</span> Quo with
      </h1>
      <img src={vectorLine} className='zigzag-hero' alt=''/>
      <img src={pill} className='pill-hero' alt=''/>
      <p>
        We are a team of strategists, designers communicators, researchers. Together,
        we belive that progress only happens when you refuse to play things safe.
      </p>
      <div className="avatar-row">
        <img src="https://i.pravatar.cc/150?img=1" alt="team member" />
        <img src="https://i.pravatar.cc/150?img=2" alt="team member" />
        <img src="https://i.pravatar.cc/150?img=3" alt="team member" />
        <img src="https://i.pravatar.cc/150?img=4" alt="team member" />
        <img src="https://i.pravatar.cc/150?img=5" alt="team member" />
      </div>
    </section>
  )
}

export default Hero