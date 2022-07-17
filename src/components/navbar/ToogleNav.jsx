import { useState } from 'react';
import { ToogleNavbar, TooglerButton, Toogler, Bar, ToogleItems, ToogleItem, DashboardButton } from '../../styles/navbarStyles'
import { navLinks } from '../../consts/links';
import Modal from '../Modal';

function ToogleNav() {
    const [open, setOpen] = useState(false);
    const { tokenomics, farm, community, dashboard } = navLinks;
    const toogle = () => {
        if (open) document.body.style.overflow = '';
        else document.body.style.overflow = 'hidden';
        setOpen(!open);
    }
    const [show, setShow] = useState(false)

    return (
        <>
            <ToogleNavbar>
                <TooglerButton onClick={toogle}>
                    <Toogler open={open}>
                        <Bar />
                        <Bar />
                        <Bar />
                    </Toogler>
                </TooglerButton>
                <ToogleItems open={open}>
                    <ToogleItem>
                        <a onClick={() => setShow(true) } href={tokenomics}>Tokenomics</a>
                    </ToogleItem>
                    <ToogleItem>
                        <a href={farm}>Farm</a>
                    </ToogleItem>
                    <ToogleItem>
                        <a href={community}>Community</a>
                    </ToogleItem>
                    <Modal onClose={() => setShow(false) } show={show} />
                </ToogleItems>
                <DashboardButton href={dashboard}>Farm and Earn</DashboardButton>
        
            </ToogleNavbar>
        </>
    )
}

export default ToogleNav;