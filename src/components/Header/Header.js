import { useState, useRef } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { VscMenu } from 'react-icons/vsc'
import { HiLocationMarker } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import Menu from './Menu/Menu'
import useOnClickOutside from 'use-onclickoutside'

const StyledHeader = styled.div`
	height: 56px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
	z-index: 10;
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	@media (min-width: 1024px) {
		padding: 0 2.5rem;
		gap: 3rem;
		height: auto;
		grid-template-columns: auto 1fr;
	}
	#left {
		display: flex;
		align-items: center;
		img {
			max-width: 28px;
			@media (min-width: 1024px) {
				max-width: 70px;
			}
		}
		svg {
			font-size: 1.75rem;
			margin-left: 1.25rem;
			@media (min-width: 1024px) {
				display: none;
			}
		}
	}
	#right {
		display: flex;
		justify-content: flex-end;
		@media (min-width: 1024px) {
			flex-flow: column;
		}
		svg {
			font-size: 1.2rem;
		}
		#top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			@media (min-width: 1024px) {
				height: 60px;
			}

			
			> div:first-of-type,
			> div:last-of-type {
				display: flex;
				align-items: center;
				gap: 1.75rem;
				font-size: 90%;
				> div {
					display: flex;
					align-items: center;
					gap: .25rem;
				}
			}
			> div:first-of-type {
				display: none;
				svg {
					font-size: .85rem;
				}
				@media (min-width: 1024px) {
					display: flex;
				}
			}
			#search,
			#location {
				display: none;
				@media (min-width: 1024px) {
					display: flex;
				}
			}
			#location {
				svg {
					color: red;
				}
			}
		}
		#bottom {
			padding: 1.25rem 0;
			font-size: 108%;
			display: none;
			white-space: nowrap;
			@media (min-width: 1024px) {
				display: block;
			}
			ul {
				list-style-type: none;
				text-transform: capitalize;
				font-size: 100%;
				display: flex;
				gap: 2rem;
			}
		}
	}
`
const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const links = [
		{ name: 'our menu', links: [] },
		{ name: 'download app' },
		{ name: "myMcDonald's rewards" },
		{ name: 'exclusive deals' },
		{ name: 'about our food' },
		{ name: 'locate' }
	]

	const menuRef = useRef()
	useOnClickOutside(menuRef, () => setIsOpen(false))
	return (
		<StyledHeader>
			<div id="left">
				<a href="/"><img src={logo} alt="" /></a>
				<div ref={menuRef}>
					<VscMenu onClick={() => setIsOpen(!isOpen)} />
					<Menu open={isOpen} />
				</div>
			</div>
			<div id="right">
				<div id="top">
					<div>
						<div>
							Language
							<BsChevronDown />
						</div>
						<div>Sign Up for Emails</div>
						<div>Careers</div>
					</div>
					<div>
						<div id="search">
							<BiSearch />
							Search
						</div>
						<div id="location">
							<HiLocationMarker />
							Change Your Location
						</div>
						<button>order now</button>
					</div>
				</div>
				<div id="bottom">
					<ul>{links.map((link, i) => <li key={i}>{link.name}</li>)}</ul>
				</div>
			</div>
		</StyledHeader>
	)
}
export default Header
