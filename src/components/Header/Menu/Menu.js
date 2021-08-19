import styled from 'styled-components'
const StyledMenu = styled.div`
	position: fixed;
	top: 56px;
	right: 0;
    height: 100vh;
    overflow-y: scroll;
	background-color: white;
	width: 100%;
	transition: visibility 0.3s linear, opacity 0.3s linear;
	animation-direction: alternate-reverse;
	padding:  0;
	visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
	opacity: ${(props) => (props.open ? '1' : '0')};
	@media (min-width: 1024px) {
		display: none;
	}
	> div {
		padding: 0;
		text-transform: capitalize;
		display: flex;
		flex-flow: column;
        border-bottom: 1px solid #DFDFDF;
        &:last-of-type {
            border-bottom: none;
        }
		a, #drop {
            padding: 1rem 0;
            &:hover {
                background-color: #F4A02C;
            }
		}
        a {
            padding: 1rem;
        }
	}
`
const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<div>
				<div id="drop">
					<a href="/">Language</a>
				</div>
				<a href="/">Sign Up for Email</a>
				<a href="/">Careers</a>
			</div>
			<div>
                <a href="/">home</a>
                <div id="drop">
					<a href="/">our menu</a>
				</div>
                <a href="/">download app</a>
                <a href="/">myMcDonald's rewards</a>
                <a href="/">exclusive deals</a>
                <a href="/">about our food</a>
                <a href="/">locate</a>
            </div>
			<div>
                <a href="/">search</a>
                <a href="/">change your location</a>
            </div>
		</StyledMenu>
	)
}
export default Menu
