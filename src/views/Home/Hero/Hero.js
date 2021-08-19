import styled from 'styled-components'
import hero from '../../../assets/mobile-sweetie.png'
const StyledHero = styled.div`
        margin: 0 .25rem;
        border-radius: 3px;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	img {
		max-width: 100%;
	}
    >div {
        padding: 1rem 1.5rem;
        h2 {
            font-size: 160%;
            margin-bottom: .25rem;
        }
        p {
            font-size: 90%;
            line-height: 1.5;
            margin-bottom: 2.5rem;
        }
        span {
            font-size: 72%;
            display: block;
            padding-top: 1rem;
        }
    }
`
const Hero = () => {
	return (
		<StyledHero>
			<img src={hero} alt="" />
			<div>
				<h2>The Saweetie Meal is Here*</h2>
				<p>
					The Saweetie Meal just dropped and it’s our icy-est collab yet—a Big Mac®, 4
					piece Chicken McNuggets®, medium Fries, a medium Sprite with Saweetie 'N Sour
					and Tangy BBQ Sauces.
				</p>
				<button>order in the app</button>
                <br />
				<span>*At participating McDonald's for a limited time.</span>
			</div>
		</StyledHero>
	)
}
export default Hero
