import Nav from './Nav'
import Link from 'next/link'
import styled from 'styled-components'

const Logo = styled.div`
    font-size: 4rem;
    margin-left: 2rem;
`

const Header = () => (
        <div>
            <div className='bar'>
                <Logo>
                    <Link href="/">
                        <a>Sick Fits</a>
                    </Link>
                </Logo>
                <Nav/>
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <div>Cart</div>
        </div>
)

export default Header